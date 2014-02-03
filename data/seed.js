/*jslint node: true, nomen: true, white: true, todo: true*/
/*!
 * Initialise the mongodb data store for the Sitegear3 demo site.
 */

(function (sitegear3) {
	"use strict";

	sitegear3.ready(function () {
		// Create and initialise the application instance
		var app = sitegear3().initialise(require('../settings.json')).persistence('filesystem', { root: __dirname }),
			pageCollection = app.storage.repository('page'),
			productItemCollection = app.storage.repository('productItem'),
			productCategoryCollection = app.storage.repository('productCategory');

		// Add seed data - pages
		pageCollection.set('index', { title: 'Home Page', main: '<h1>Demo Site</h1>\r\n<p>Demo site for Sitegear3, now implemented in Node.js!</p>\r\n<p>Read all <a href="about">about us</a>, browse our demo <a href="products">products</a> catalogue, or <a href="contact">talk to us</a>.</p>' });
		pageCollection.set('about', { title: 'About', main: '<h1>This is a demo site</h1>\r\n<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer tellus sapien, convallis sit amet quam eget, placerat fringilla mauris. Etiam ullamcorper libero lacus, ut convallis mauris convallis in. Quisque mollis fermentum convallis. Sed non consectetur eros, sed rhoncus metus. Integer lacinia lorem ac tortor pulvinar, varius euismod nunc feugiat. Nulla auctor lacus est, eu accumsan diam blandit at. Integer pharetra turpis quis augue rutrum, a luctus orci placerat. Proin vel ligula felis. Duis at mauris mauris. Nam eget suscipit velit, vitae egestas lectus. Duis sodales cursus elit. Vivamus lorem neque, pulvinar sed elit nec, ultricies semper orci. Curabitur velit dui, bibendum quis viverra lacinia, placerat ut dolor. Donec quis magna posuere, sagittis justo ac, venenatis eros. Nulla facilisi.</p>\r\n<h2>More Information</h2>\r\n<ul>\r\n<li>About our <a href="about/board">board members</a></li>\r\n<li>Interested in a <a href="about/careers">career with us</a>?</li>\r\n<li>View our range of <a href="products">products</a></li>\r\n<li><a href="contact">Contact us</a> for more information</li>\r\n</ul>' });
		pageCollection.set('about/board', { title: 'About our Board Members', main: '<h1>About our Board</h1>\r\n<p>Blah blah blah.</p>' });
		pageCollection.set('contact', { title: 'Contact Us', main: '<h1>Contact us</h1>\r\n<p>Please direct all enquiries to <code>/dev/null</code>.</p>' });
		pageCollection.set('contact/thankyou', { title: 'Thankyou for your enquiry', main: '<h1>Thank you for your enquiry</h1>\r\n<p>Please don\'t expect a response.</p>' });

		// Add seed data - product categories
		productCategoryCollection.set('widgets', { name: 'Widgets' });
		productCategoryCollection.set('widgets/steel', { name: 'Steel Widgets' });
		productCategoryCollection.set('widgets/plastic', { name: 'Plastic Widgets' });
		productCategoryCollection.set('widgets/carbon', { name: 'Carbon Widgets' });
		productCategoryCollection.set('gizmos', { name: 'Gizmos' });
		productCategoryCollection.set('gizmos/square', { name: 'Square Gizmos' });
		productCategoryCollection.set('gizmos/long', { name: 'Long Gizmos' });

		// Add seed data - product items
		productItemCollection.set('acme-steel-widget-type-a', { name: 'ACME Steel Widget: Type A' });
		productItemCollection.set('acme-steel-widget-type-b', { name: 'ACME Steel Widget: Type B' });
		productItemCollection.set('signature-steel-widget', { name: 'Signature Steel Widget' });
		productItemCollection.set('generic-plastic-widget', { name: 'Generic Plastic Widget' });
		productItemCollection.set('signature-plastic-widget', { name: 'Signature Plastic Widget' });
		productItemCollection.set('black-carbon-widget', { name: 'Black Carbon Widget' });
		productItemCollection.set('extreme-carbon-widget', { name: 'Extreme Carbon Widget' });
		productItemCollection.set('signature-carbon-widget', { name: 'Signature Carbon Widget' });
		productItemCollection.set('basic-square-gizmo', { name: 'Basic Square Gizmo' });
		productItemCollection.set('basic-plus-square-gizmo', { name: 'Basic Plus Square Gizmo' });
		productItemCollection.set('signature-square-gizmo', { name: 'Signature Square Gizmo' });
		productItemCollection.set('basic-long-gizmo', { name: 'Basic Long Gizmo' });
		productItemCollection.set('basic-long-square-gizmo', { name: 'Basic Plus Long Gizmo' });
		productItemCollection.set('signature-long-gizmo', { name: 'Signature Long Gizmo' });
		productItemCollection.set('supreme-long-gizmo', { name: 'Supreme Long Gizmo' });
	});
}(require('sitegear3')));
