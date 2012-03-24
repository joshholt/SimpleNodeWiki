### Node Wiki ###

This is a very simple wiki using NodeJS and the file system as a database.

### Getting Started ###

First things first, you will want to clone this repository into your favorite
location.

`git clone `

Then you will want get the dependencies.

`make deps`

Then it's time to play...

		> make &
		> open http://localhost:3000/

This will open your browser and you will be viewing your first wiki page.
You can edit the text (which is Markdown) and save it. If you enter something 
other than "/home" as the URL in the location bar you will have just generated
a new wiki page. This new page has not yet been saved to disk, because you must
submit the text on the page by clicking the submit button.


### Deployment ###

If you would like to deploy this simple wiki to heroku, everything is setup for 
you. All you need to do is execute the following commands and your wiki will be 
live.

		> heroku create --stack=cdear && make deploy
		> heroku open


### Testing ###

If you care about testing and how things work within this application, then
you will want to check out the following pages [test-docs][docs], [code-coverage][coverage].

If you would like to run the tests then you can just run the following command:

`make test`

If you want to help improve the code coverage, then you will need to run the follwoing commands:
		
		> cd ~
		> curl -O http://dl.dropbox.com/u/5268661/node-jscoverage.zip
		> unzip ./node-jscoverage.zip
		> cd ./visionmedia-node-jscoverage-4826683
		> ./configure
		> make
		> sudo make install
		> cd -

		# The following commands will run the tests and generage the coverage.html page.

		> make lib-cov && make test-cov 
		> make &
		> open http://localhost:3000/coverage.html


[docs]: http://localhost:3000/test-docs.html
[coverage]: http://localhost:3000/coverage.html