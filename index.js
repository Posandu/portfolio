document.querySelector("#submit").addEventListener("click", () => {
	const name = document.querySelector("#name").value;
	const msg = document.querySelector("#msg").value;

	window.open(`mailto:posandumapa@gmail.com?subject=${name}&body=${msg}`);
});

let i = 0;

function changeColor() {
	i += 0.2;

	document.querySelector(
		"#hero_img"
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

/**
 * Spotify status
 */
const apiURL = "https://api.lanyard.rest/v1/users/961161387101536296";
const spEl = (name) => document.querySelector(`.spotify__${name}`);

const updateSpotify = async () => {
	const res = await fetch(apiURL);
	const data = await res.json();

	document.querySelector(".spotify").classList.remove("open");
	
	if (data.data) {
		const { spotify } = data.data;

		if (spotify) {
			spEl("song").innerText = spotify.song;
			spEl("artist").innerText = spotify.artist;
			spEl("img").src = spotify.album_art_url;

			const endTimeStamp = new Date(+spotify.timestamps.end).getTime();

			setTimeout(() => {
				updateSpotify();
			}, endTimeStamp - Date.now());

			document.querySelector(".spotify").classList.add("open");
		} else {
			document.querySelector(".spotify").classList.remove("open");
		}
	}
};

updateSpotify();
