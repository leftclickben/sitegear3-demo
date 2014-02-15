/*jslint node: true, nomen: true, white: true*/
/*!
 * Initialise the data store for the Sitegear3 demo site.
 */

(function (sitegear3) {
	"use strict";

	var // Initialise the application object
		app = sitegear3(require('../settings.json')).connect('filesystem', { root: __dirname }),

		// Get repositories from modules
		pageRepository = app.module('default').pageRepository,
		productItemRepository = app.module('products').itemRepository,
		productCategoryRepository = app.module('products').categoryRepository,

		// Remove existing data
		clear = function (callback) {
			pageRepository.clear(function () {
				productCategoryRepository.clear(function () {
					productItemRepository.clear(function () {
						callback();
					});
				});
			})
		},

		// Add data
		seed = function () {
			pageRepository.set('index', { title: 'Home Page', main: '<h1>Demo Site</h1>\r\n<p>Demo site for Sitegear3, now implemented in Node.js!</p>\r\n<p>Read all <a href="about">about us</a>, browse our demo <a href="products">products</a> catalogue, or <a href="contact">talk to us</a>.</p>' });
			pageRepository.set('about', { title: 'About', main: '<h1>This is a demo site</h1>\r\n<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer tellus sapien, convallis sit amet quam eget, placerat fringilla mauris. Etiam ullamcorper libero lacus, ut convallis mauris convallis in. Quisque mollis fermentum convallis. Sed non consectetur eros, sed rhoncus metus. Integer lacinia lorem ac tortor pulvinar, varius euismod nunc feugiat. Nulla auctor lacus est, eu accumsan diam blandit at. Integer pharetra turpis quis augue rutrum, a luctus orci placerat. Proin vel ligula felis. Duis at mauris mauris. Nam eget suscipit velit, vitae egestas lectus. Duis sodales cursus elit. Vivamus lorem neque, pulvinar sed elit nec, ultricies semper orci. Curabitur velit dui, bibendum quis viverra lacinia, placerat ut dolor. Donec quis magna posuere, sagittis justo ac, venenatis eros. Nulla facilisi.</p>\r\n<h2>More Information</h2>\r\n<ul>\r\n<li>About our <a href="about/board">board members</a></li>\r\n<li>Interested in a <a href="about/careers">career with us</a>?</li>\r\n<li>View our range of <a href="products">products</a></li>\r\n<li><a href="contact">Contact us</a> for more information</li>\r\n</ul>' });
			pageRepository.set('about/board', { title: 'About our Board Members', main: '<h1>About our Board</h1>\r\n<p>Blah blah blah.</p>' });
			pageRepository.set('contact', { title: 'Contact Us', main: '<h1>Contact us</h1>\r\n<p>Please direct all enquiries to <code>/dev/null</code>.</p>' });
			pageRepository.set('contact/thankyou', { title: 'Thankyou for your enquiry', main: '<h1>Thank you for your enquiry</h1>\r\n<p>Please don\'t expect a response.</p>' });

			productCategoryRepository.set('widgets', { name: 'Widgets' });
			productCategoryRepository.set('widgets/steel', { name: 'Steel Widgets' });
			productCategoryRepository.set('widgets/plastic', { name: 'Plastic Widgets' });
			productCategoryRepository.set('widgets/carbon', { name: 'Carbon Widgets' });
			productCategoryRepository.set('gizmos', { name: 'Gizmos' });
			productCategoryRepository.set('gizmos/square', { name: 'Square Gizmos' });
			productCategoryRepository.set('gizmos/long', { name: 'Long Gizmos' });

			productItemRepository.set('acme-steel-widget-type-a', { name: 'ACME Steel Widget: Type A', prices: { retail: 10000, wholesale: 8000 } });
			productItemRepository.set('acme-steel-widget-type-b', { name: 'ACME Steel Widget: Type B', prices: { retail: 11000, wholesale: 8500 } });
			productItemRepository.set('signature-steel-widget', { name: 'Signature Steel Widget', prices: { retail: 13000 } });
			productItemRepository.set('generic-plastic-widget', { name: 'Generic Plastic Widget', prices: { retail: 3000, wholesale: 2500 } });
			productItemRepository.set('signature-plastic-widget', { name: 'Signature Plastic Widget', prices: { retail: 4000 } });
			productItemRepository.set('black-carbon-widget', { name: 'Black Carbon Widget', prices: { retail: 20000, wholesale: 16000 } });
			productItemRepository.set('extreme-carbon-widget', { name: 'Extreme Carbon Widget', prices: { retail: 250000, wholesale: 22000 } });
			productItemRepository.set('signature-carbon-widget', { name: 'Signature Carbon Widget', prices: { retail: 230000 } });
			productItemRepository.set('basic-square-gizmo', { name: 'Basic Square Gizmo', prices: { retail: 2000, wholesale: 1750 } });
			productItemRepository.set('basic-plus-square-gizmo', { name: 'Basic Plus Square Gizmo', prices: { retail: 2200, wholesale: 1950 } });
			productItemRepository.set('signature-square-gizmo', { name: 'Signature Square Gizmo', prices: { retail: 2300 } });
			productItemRepository.set('basic-long-gizmo', { name: 'Basic Long Gizmo', prices: { retail: 3000, wholesale: 2650 } });
			productItemRepository.set('basic-plus-long-gizmo', { name: 'Basic Plus Long Gizmo', prices: { retail: 4000, wholesale: 3600 } });
			productItemRepository.set('signature-long-gizmo', { name: 'Signature Long Gizmo', prices: { retail: 10000 } });
			productItemRepository.set('supreme-long-gizmo', { name: 'Supreme Long Gizmo', prices: { retail: 5000, wholesale: 4200 } });
		};

	// Bootstrap
	clear(seed);

}(require('sitegear3')));
