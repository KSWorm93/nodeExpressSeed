const dirs = require('../utilities/directories');

module.exports = function (app) {
	//Home page, if no route is sent
	app.get('/', function (request, response) {
		response.redirect('/home');
	});

	//Home page
	app.get('/home', function (request, response) {
		response.render(dirs.layouts + '/home.html', configObjects.home);
	});

	//Create about page
	app.get('/about', function (request, response) {
		response.render(dirs.layouts + '/about.html', configObjects.about);
	});

    //Page1 page
	app.get('/page1', function (request, response) {
		response.render(dirs.layouts + '/page1.html', configObjects.page1);
	});

	//Page2 page
	app.get('/page2', function (request, response) {
		response.render(dirs.layouts + '/page2.html', configObjects.page2);
	});

	//Page3 page
	app.get('/page3', function (request, response) {
		response.render(dirs.layouts + '/page3.html', configObjects.page3);
	});

	//Unknown page
	app.get('*', function (request, response) {
		response.render(dirs.layouts + '/oops.html');
	});
}

const configObjects = {
	home: {
		navigation: {
			active: 'home'
		}
	},
	about: {
		navigation: {
			active: 'about'
		}
	},
	page1: {
		navigation: {
			active: 'page1'
		}
	},
	page2: {
		navigation: {
			active: 'page2'
		}
	},
	page3: {
		navigation: {
			active: 'page3'
		}
	}
};