import Element from './Element'

class Control extends Element {
	constructor (...options) {
		super (Control.OPTIONS, ...options)

		this.$element = $(Control.TEMPLATE)

		this.init()
	}

	init ( ) {
		super.init()
	}
}
Control.OPTIONS  = 
{
	
}
Control.TEMPLATE = 
`
<div class="frappe-ui frappe-ui-control"/>
`

export default Control