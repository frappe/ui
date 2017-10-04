.PHONY: build
.PHONY: docs

BASEDIR  = $(realpath .)

NPM     ?= npm
BUNDLE  ?= bundle

build:
	rollup --config build/rollup.config.js

build-watch:
	rollup --watch --config build/rollup.config.js

install:
	$(NPM)	   install $(BASEDIR)
	$(BUNDLE) install

docs:
	cd docs && $(BUNDLE) install && make docs

clean:
	clear

run:
	make build