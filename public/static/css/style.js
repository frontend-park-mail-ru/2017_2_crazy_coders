const bodyStyles = {
	selector: 'body',
	styles: {
		'background-color': '#FFFF00',
	}
};

const createStylesheet = (styles) => {
	return styles.reduce((stylesheet, current) => {
		const properties = Object.entries(current.styles)
			.map(prop => prop[0] + ':' + prop[1] + ';');
		stylesheet += `${current.selector} {${properties}}\n`;
		return stylesheet;
	},'');
};

const appendStylesheet = (stylesheet) => {
	let styleTag = document.getElementById('theme-styles');
	styleTag.innerHTML = stylesheet;
};

let hasTheme = false;
let styles = createStylesheet([bodyStyles]);

document
	.getElementById('theme-switch')
	.addEventListener('click', function (evt) {
		let stylesheet = hasTheme ? '' : styles;

		appendStylesheet(stylesheet);

		hasTheme = !hasTheme;
	});