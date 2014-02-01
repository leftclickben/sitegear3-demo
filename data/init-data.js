/*jslint node: true, nomen: true, white: true, todo: true*/
/*!
 * Initialise the mongodb data store for the Sitegear3 demo site.
 */

(function (sitegear3) {
	"use strict";

	// Create and initialise the application instance
	var app = sitegear3().initialise(require('../settings.json')).persistence('filesystem', { root: __dirname });

	// Add seed data
	app.interfaces.storage.set('page', 'index', { title: 'Home Page', main: '<h1>Demo Site</h1>\r\n<p>Demo site for Sitegear3, now implemented in Node.js!</p>\r\n<p>Read all <a href="about">about us</a>, browse our demo <a href="products">products</a> catalogue, or <a href="contact">talk to us</a>.</p>' });
	app.interfaces.storage.set('page', 'about', { title: 'About', main: '<h1>This is a demo site</h1>\r\n<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer tellus sapien, convallis sit amet quam eget, placerat fringilla mauris. Etiam ullamcorper libero lacus, ut convallis mauris convallis in. Quisque mollis fermentum convallis. Sed non consectetur eros, sed rhoncus metus. Integer lacinia lorem ac tortor pulvinar, varius euismod nunc feugiat. Nulla auctor lacus est, eu accumsan diam blandit at. Integer pharetra turpis quis augue rutrum, a luctus orci placerat. Proin vel ligula felis. Duis at mauris mauris. Nam eget suscipit velit, vitae egestas lectus. Duis sodales cursus elit. Vivamus lorem neque, pulvinar sed elit nec, ultricies semper orci. Curabitur velit dui, bibendum quis viverra lacinia, placerat ut dolor. Donec quis magna posuere, sagittis justo ac, venenatis eros. Nulla facilisi.</p>\r\n<h2>More Information</h2>\r\n<ul>\r\n<li>About our <a href="about/board">board members</a></li>\r\n<li>Interested in a <a href="about/careers">career with us</a>?</li>\r\n<li>View our range of <a href="products">products</a></li>\r\n<li><a href="contact">Contact us</a> for more information</li>\r\n</ul>' });
	app.interfaces.storage.set('page', 'about/board', { title: 'About our Board Members', main: '<h1>About our Board</h1>\r\n<p>Blah blah blah.</p>' });
	app.interfaces.storage.set('page', 'contact', { title: 'Contact Us', main: '<h1>Contact us</h1>\r\n<p>Please direct all enquiries to <code>/dev/null</code>.</p>' });
	app.interfaces.storage.set('page', 'contact/thankyou', { title: 'Thankyou for your enquiry', main: '<h1>Thank you for your enquiry</h1>\r\n<p>Please don\'t expect a response.</p>' });

}(require('sitegear3')));
