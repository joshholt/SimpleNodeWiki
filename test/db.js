var DB = require('../index.js'),
    should = require('should');

describe("Database Module", function() {

	describe("#loadPage(name, callback)", function() {

		it("should return an object with page contents and meta-data", function(done) {
			DB.loadPage('home', function(err, result){
				should.not.exist(err);
				if (err) return done(err);
				result.should.have.property('name', 'home');
				result.should.have.property('title', 'Node Wiki');
				result.should.have.property('exists',true);
				result.should.have.property('markdown');
				result.should.have.property('html');
				done();
			});
		});

		it("should create a new page when one does not exits and generate markdown and html", function(done) {
			DB.loadPage('stuff', function(err, result){
				should.not.exist(err);
				if (err) return done(err);
				result.should.have.property('name', 'stuff');
				result.should.have.property('title', 'stuff');
				result.should.have.property('exists',false);
				result.should.have.property('markdown');
				result.should.have.property('html');
				done();
			});
		});

		it("should fail when a file is not readable by the process owner", function(done) {
			DB.loadPage('stuffs', function(err, result) {
				should.exist(err);
				done();
			});
		});
	});

	describe("#savePage(name, value, callback)", function() {

		it("should save a new wiki page using the passed markdown without throwing an exception", function(done) {
			DB.savePage(
				'more_stuff', 
				"%23+Home+Page%0D%0A%0D%0AThis+is+the+homepage+of+the+wiki.%0D%0A%0D%0A---------------------------------------%0D%0A%0D%0AVisit+the+%5Bbuild+script%5D%5Bbuild_script%5D%0D%0A%0D%0A%0D%0A%0D%0A%5Bbuild_script%5D%3A+%2Fbuild_script%0D%0A%0D%0A%0D%0A", 
				done
			);
		});

	});

});
