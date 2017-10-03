.PHONY: build
.PHONY: docs

BASEDIR  = $(realpath .)

NPM     ?= npm
BUNDLER ?= bundler

install:
	$(NPM)	   install $(BASEDIR)
	$(BUNDLER) install $(BASEDIR)