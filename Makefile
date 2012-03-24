REPORTER = list

start:
	@node app

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
					--require should \
					--reporter $(REPORTER) \
					--timeout 100 \
					--growl

test-cov:
	WIKI_COV=1 $(MAKE) test REPORTER=html-cov > public/coverage.html

lib-cov:
	jscoverage lib lib-cov

docs: test-docs

test-docs:
	make test REPORTER=doc \
					| cat docs/head.html - docs/tail.html \
					> public/test.html

.PHONY: test test-cov docs test-docs