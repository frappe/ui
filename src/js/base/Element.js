class Element {
	template = ''

	constructor (...options) {
		this.options  = Object.assign({ }, Element.OPTIONS, ...options)
	
		// this.$element = $(Element.TEMPLATE)

		this.init()
	}

	init ( ) {
		this.$element = $(this.template);
		this.mount()
	}

	mount () {
		this.$parent = $(this.options.parent)
		this.$parent.append(this.$element)
	}
}
Element.OPTIONS  = 
{
	
}
Element.TEMPLATE = 
`
<div class="frappe-ui frappe-ui-element"/>
`

export default Element