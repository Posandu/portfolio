const random = (min) => (max) => Math.random() * (max - min) + min;

const setProperties = (properties) => (element) => {
	Object.entries(properties).forEach(([key, value]) =>
		element.style.setProperty(key, value)
	);

	return element;
};

[...Array(100)].forEach(() =>
	document.body.appendChild(
		setProperties({
			"--snowflake-x": `${random(1)(99)}vw`,
			"--snowflake-speed": `${random(2)(3)}s`,
			"--snowflake-delay": `${random(0)(3)}s`,
		})(
			Object.assign(document.createElement("div"), {
				className: "snowflake",
			})
		)
	)
);
