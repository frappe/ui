var FrappeUI = (function () {
'use strict';

class FrappeError extends Error       { }
class ImportError extends FrappeError { }

class Element {
	constructor (...options) {
		this.options  = Object.assign({ }, Element.OPTIONS, ...options);
	
		// this.$element = $(Element.TEMPLATE)

		this.init();
	}

	init ( ) {
		this.mount();
	}

	mount (selector = null) {
		this.$parent = selector ? $(selector) : $(this.options.parent);
		this.$parent.append(this.$element);
	}
}
Element.OPTIONS  = 
{
	
};
Element.TEMPLATE = 
`
<div class="frappe-ui frappe-ui-element"/>
`;

class Control extends Element {
	constructor (...options) {
		super (Control.OPTIONS, ...options);

		this.$element = $(Control.TEMPLATE);

		this.init();
	}

	init ( ) {
		super.init();
	}
}
Control.OPTIONS  = 
{
	
};
Control.TEMPLATE = 
`
<div class="frappe-ui frappe-ui-control"/>
`;

if ( typeof jQuery === 'undefined' ) {
	throw new ImportError('frappe.ui requires jQuery. Kindly import jQuery.')
}

var index = {
	Element, Control
};

return index;

}());
