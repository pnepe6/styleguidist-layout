const path = require('path');
const { config } = require('rollup-documentation/lib/styleguide.config');
const { color, sidebar } = require('./styleguide/styleguide.theme.js')

module.exports = { 
	...config,
	styleguideComponents: {
	    HeadingRenderer: path.resolve(__dirname, 'styleguide/components/HeadingRenderer.js'),
	    StyleGuideRenderer: path.resolve(__dirname, 'styleguide/components/StyleGuideRenderer.js'),
    },
    theme: {
    	color: color,
    	sidebarWidth: sidebar.sidebarWidth,
    	// sidebarHeight: sidebar.sidebarHeight,
    },
};
