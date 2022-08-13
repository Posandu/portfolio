document.querySelector("#submit").addEventListener("click", () => {
	const name = document.querySelector("#name").value;
	const msg = document.querySelector("#msg").value;

	window.open(`mailto:posandumapa@gmail.com?subject=${name}&body=${msg}`);
});

let i = 0;

function changeColor() {
	i += 0.2;

	document.querySelector(
		".hero_img"
	).style.boxShadow = `0px 0px 0px 4px rgb(${i}, ${
		i + Math.floor(Math.random() * 255)
	}, ${i + Math.floor(Math.random() * 255)})`;

	if (i > 255) {
		i = 0;
	}

	setTimeout(() => {
		requestAnimationFrame(changeColor);
	}, 400);
}

requestAnimationFrame(changeColor);
