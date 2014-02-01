/*jslint node: true, nomen: true, white: true*/
/*!
 * This is the default bootstrap script for a Sitegear3 website.
 *
 * Treat this as a fully functional template.  Middleware sequence can be modified, for example, if you don't need CSRF
 * prevention, then remove the middleware for it.  The templating engine can also be easily swapped out for any other
 * express-compatible engine.
 */

(function (poweredBy, sitegear3, swig, fs) {
	"use strict";

	// Create the application instance
	var app = sitegear3();

	// Pre-configure
	if (app.get('env') === 'development') {
		swig.setDefaults({ cache: false });
	}

	// Generic setup code
	app.initialise(require('./settings.json'))
		.use(poweredBy('sitegear3'))
		.use(sitegear3.logger())
		.use(sitegear3.compress())
		.use(sitegear3.static(__dirname + '/static'))
		.use(sitegear3.cookieParser())
		.use(sitegear3.cookieSession({ "baseKey": "sitegear3.session", "secret": "Sitegear3" }))
		.use(sitegear3.csrf())
		.use(sitegear3.prepareView(app))
		.use(app.router)
		.use(sitegear3.notFound())
		.use(sitegear3.internalServerError())
		.persistence('filesystem', { root: __dirname + '/data' })
		.mapRoutes(require('./routes.json'))
		.engine('html', swig.renderFile)
		.set('views', __dirname + '/templates');

	// Start http
	app.start(8080);

	// Read PFX and start https in callback
	fs.readFile('./certificates/localhost.pfx', function (error, data) {
		if (error) {
			throw error;
		}
		app.start({ pfx: data }, 8443);
	})

}(require('connect-powered-by'), require('sitegear3'), require('swig'), require('fs')));