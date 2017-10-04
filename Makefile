.PHONY: build
.PHONY: docs

BASEDIR  = $(realpath .)

NPM     ?= npm
BUNDLE  ?= bundle

install:
	$(NPM)	   install $(BASEDIR)
	$(BUNDLE) install

docs:
	cd docs && $(BUNDLE) install && make docs

clean:
	clear