const config = 
{
	rollup:
	{
		input: config.path.source.js.main,
		output: 
		{
			  file: path.join(config.path.distribution.js, `${config.name}.js`),
			format: 'iife',
			  name: 'frappe'
		},
	   plugins:
	   [
		   resolve()
	   ]
	}
}

export default config