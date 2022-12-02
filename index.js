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
	).style.boxShadow = `0px 0px 8px -2px rgb(${i}, ${
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


// Snow - https://www.tronic247.com/how-to-create-a-snowfall-with-javascript/
let  t=()=>{const  t=(t,e)=>Math.random()*(e-t)+t;let  e=window.innerWidth,n=window.innerHeight,s=document.createElement("div");s.style.position="fixed",s.style.top="-2px",s.style.right=t(0,e)+"px",s.style.width="10px",s.style.height="10px",s.style.backgroundColor="#fff",s.style.borderRadius="50%",s.style.zIndex="999",s.style.style.pointerEvents='none';const  i=()=>{s.style.top=parseInt(s.style.top)+2+"px",s.style.right=parseInt(s.style.right)+t(0,2)+"px",parseInt(s.style.top)>n&&(s.style.right=t(0,e)+"px",s.style.top=parseInt("-"+t(0,20)+"px")),window.requestAnimationFrame(i)};window.requestAnimationFrame(i),document.body.appendChild(s)};for(let  e=0;e<60;e++)setTimeout(t,100*e);

