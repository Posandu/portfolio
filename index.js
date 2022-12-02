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


// Add chunk of JS for snowfall
!function(t,i){this.t=!0,this.i=!0,this.h=128,this.o=64,this.u=50,this.l=!0,this.className=null,this.i=!0,this.v=null,this.p=!1,this.m="#fff",this.I="&bull;",this.N=!0,this.targetElement=null,this.g=!0,this.M=!1,this.k=!1,this.T=!1,this.A=!0,this.L=0,this.B=0,this.C=8,this.F=8,this.O=5,this.S=4,this.zIndex=0;var n,s=this,h=navigator.userAgent.match(/msie/i),r=navigator.userAgent.match(/msie 6/i),o=navigator.userAgent.match(/mobile|opera m(ob|in)/i),u=h&&"BackCompat"===i.compatMode||r,e=null,a=null,f=null,l=null,c=null,v=null,p=null,d=1,m=!1,x=!1,b=function(){try{i.createElement("div").style.opacity="0.5"}catch(t){return!1}return!0}(),I=!1,N=i.createDocumentFragment();function w(t,i){return isNaN(i)&&(i=0),Math.random()*t+i}function g(){t.setTimeout((function(){s.start(!0)}),20),s.U.remove(h?i:t,"mousemove",g)}n=function(){var n;var h,r=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.j||t.msRequestAnimationFrame||function(i){t.setTimeout(i,1e3/(s.u||20))};function o(t){return void 0!==h.style[t]?t:null}n=r?function(){return r.apply(t,arguments)}:null,h=i.createElement("div");var u={transform:{q:o("-ms-transform"),D:o("MozTransform"),opera:o("OTransform"),G:o("webkitTransform"),H:o("transform"),J:null},K:n};return u.transform.J=u.transform.H||u.transform.D||u.transform.G||u.transform.q||u.transform.opera,h=null,u}(),this.P=null,this.R=[],this.disabled=!1,this.active=!1,this.V=20,this.W=[],this.X=function(t,i,n){if(!t)return!1;s.T||x?(t.style.left=i-s.C+"px",t.style.top=n-s.F+"px"):u||s.v?(t.style.right=100-i/e*100+"%",t.style.top=Math.min(n,c-s.F)+"px"):(t.style.right=100-i/e*100+"%",t.style.bottom=100-n/f*100+"%")},this.U=function(){var i=!t.addEventListener&&t.attachEvent,n=Array.prototype.slice,s={add:i?"attachEvent":"addEventListener",remove:i?"detachEvent":"removeEventListener"};function h(t){var s=n.call(t),h=s.length;return i?(s[1]="on"+s[1],h>3&&s.pop()):3===h&&s.push(!1),s}function r(t,n){var h=t.shift(),r=[s[n]];i?h[r](t[0],t[1]):h[r].apply(h,t)}return{add:function(){r(h(arguments),"add")},remove:function(){r(h(arguments),"remove")}}}(),this.Y=function(){var t,i;if(i=w(s.O,.2),v=1===parseInt(w(2),10)?-1*i:i,p=w(s.S,.2),this.R)for(t=0;t<this.R.length;t++)this.R[t].active&&this.R[t].Z()},this.$=function(){var n;if(l=s.v?0:parseInt(t.scrollY||i.documentElement.scrollTop||(u?i.body.scrollTop:0),10),isNaN(l)&&(l=0),!m&&!s.v&&s.R)for(n=0;n<s.R.length;n++)0===s.R[n].active&&s.R[n]._()},this.tt=function(){t.innerWidth||t.innerHeight?(e=t.innerWidth-16-s.B,f=s.v||t.innerHeight):(e=(i.documentElement.clientWidth||i.body.clientWidth||i.body.scrollWidth)-(h?0:8)-s.B,f=s.v||i.documentElement.clientHeight||i.body.clientHeight||i.body.scrollHeight),c=i.body.offsetHeight,a=parseInt(e/2,10)},this.it=function(){e=s.targetElement.offsetWidth-s.B,f=s.v||s.targetElement.offsetHeight,a=parseInt(e/2,10),c=i.body.offsetHeight},this.freeze=function(){if(s.disabled)return!1;s.disabled=1,s.P=null},this.resume=function(){if(!s.disabled)return!1;s.disabled=0,s.nt()},this.st=function(){s.R.length?(s.active=!s.active,s.active?(s.show(),s.resume()):(s.stop(),s.freeze())):s.start()},this.stop=function(){var n;for(this.freeze(),n=0;n<this.R.length;n++)this.R[n].ht.style.display="none";s.U.remove(t,"scroll",s.$),s.U.remove(t,"resize",s.tt),s.A&&(h?(s.U.remove(i,"focusout",s.freeze),s.U.remove(i,"focusin",s.resume)):(s.U.remove(t,"blur",s.freeze),s.U.remove(t,"focus",s.resume)))},this.show=function(){var t;for(t=0;t<this.R.length;t++)this.R[t].ht.style.display="block"},this.rt=function(t,h,r){var o=this;this.type=t,this.x=h||parseInt(w(e-20),10),this.y=isNaN(r)?-w(f)-12:r,this.ot=null,this.ut=null,this.et=[1,1.2,1.4,1.6,1.8],this.ft=this.et[this.type]||1,this.lt=!1,this.V=s.V,this.W=s.W,this.ct=0,this.vt=0,this.active=1,this.fontSize=10+this.type/5*10,this.ht=i.createElement("div"),this.ht.innerHTML=s.I,s.className&&this.ht.setAttribute("class",s.className),this.ht.style.color=s.m,this.ht.style.position=m?"fixed":"absolute",s.l&&n.transform.J&&(this.ht.style[n.transform.J]="translate3d(0px, 0px, 0px)"),this.ht.style.width=s.C+"px",this.ht.style.height=s.F+"px",this.ht.style.fontFamily="arial,verdana",this.ht.style.cursor="default",this.ht.style.overflow="hidden",this.ht.style.fontWeight="normal",this.ht.style.zIndex=s.zIndex,N.appendChild(this.ht),this.refresh=function(){if(isNaN(o.x)||isNaN(o.y))return!1;s.X(o.ht,o.x,o.y)},this._=function(){u||s.targetElement!==i.documentElement&&s.targetElement!==i.body?o.ht.style.top=f+l-s.F+"px":s.v?o.ht.style.top=s.v+"px":(o.ht.style.display="none",o.ht.style.bottom="0%",o.ht.style.position="fixed",o.ht.style.display="block")},this.dt=function(){o.ot>=0&&o.ot<.2?o.ot=.2:o.ot<0&&o.ot>-.2&&(o.ot=-.2),o.ut>=0&&o.ut<.2&&(o.ut=.2)},this.move=function(){var t=o.ot*d;o.x+=t,o.y+=o.ut*o.ft,o.x>=e||e-o.x<s.C?o.x=0:t<0&&o.x-s.L<-s.C&&(o.x=e-s.C-1),o.refresh(),f+l-o.y+s.F<s.F?(o.active=0,s.N?o._():o.xt()):(s.g&&o.active&&o.type<3&&!o.lt&&Math.random()>.998&&(o.lt=!0,o.bt()),s.M&&(o.vt<0?Math.random()>.97&&(o.vt=parseInt(8*Math.random(),10)):(o.vt--,b?o.ht.style.opacity=o.vt&&o.vt%2==0?0:1:o.ht.style.visibility=o.vt&&o.vt%2==0?"hidden":"visible")))},this.animate=function(){o.move()},this.Z=function(){o.ot=v+w(.12*s.O,.1),o.ut=p+w(.12*s.S,.1)},this.It=function(t,i){if(!b)return!1;t.style.opacity=i},this.bt=function(){s.g&&o.lt&&o.ct<o.V?(o.It(o.ht,o.W[o.ct]),o.ht.style.fontSize=o.fontSize-o.fontSize*(o.ct/o.V)+"px",o.ht.style.lineHeight=s.F+2+.75*s.F*(o.ct/o.V)+"px",o.ct++):o.xt()},this.xt=function(){o.ht.style.display="none",o.ht.style.position=m?"fixed":"absolute",o.ht.style.bottom="auto",o.Z(),o.dt(),o.ct=0,o.lt=!1,o.It(o.ht,1),o.ht.style.padding="0px",o.ht.style.margin="0px",o.ht.style.fontSize=o.fontSize+"px",o.ht.style.lineHeight=s.F+2+"px",o.ht.style.textAlign="center",o.ht.style.verticalAlign="baseline",o.x=parseInt(w(e-s.C-20),10),o.y=parseInt(-1*w(f),10)-s.F,o.refresh(),o.ht.style.display="block",o.active=1},this.xt(),this.refresh()},this.Nt=function(){var t,i,h=0,r=null;for(t=0,i=s.R.length;t<i;t++)1===s.R[t].active&&(s.R[t].move(),h++),s.R[t].lt&&s.R[t].bt();h<s.o&&0===(r=s.R[parseInt(w(s.R.length),10)]).active&&(r.lt=!0),s.P&&n.K(s.Nt)},this.wt=function(t){if(!s.p)return!0;var i=parseInt(t.clientX,10);d=i<a?i/a*2-2:(i-=a)/a*2},this.gt=function(t,i){var n;for(n=0;n<t;n++)s.R[s.R.length]=new s.rt(parseInt(w(6),10)),(i||n>s.o)&&(s.R[s.R.length-1].active=-1);s.targetElement.appendChild(N)},this.nt=function(){s.P=!0,s.Nt()},this.init=function(){var n;for(n=0;n<s.V;n++)s.W.push(1-n/s.V);s.Y(),s.gt(s.h),s.U.add(t,"resize",s.tt),s.U.add(t,"scroll",s.$),s.A&&(h?(s.U.add(i,"focusout",s.freeze),s.U.add(i,"focusin",s.resume)):(s.U.add(t,"blur",s.freeze),s.U.add(t,"focus",s.resume))),s.tt(),s.$(),s.p&&s.U.add(h?i:t,"mousemove",s.wt),s.u=Math.max(20,s.u),s.nt()},this.start=function(n){if(I){if(n)return!0}else I=!0;if("string"==typeof s.targetElement){var h=s.targetElement;if(s.targetElement=i.getElementById(h),!s.targetElement)throw new Error('Snowstorm: Unable to get targetElement "'+h+'"')}if(s.targetElement||(s.targetElement=i.body||i.documentElement),s.targetElement!==i.documentElement&&s.targetElement!==i.body&&(s.tt=s.it,s.T=!0),s.tt(),s.k=s.k&&!u&&!s.v,t.getComputedStyle)try{x="relative"===t.getComputedStyle(s.targetElement,null).getPropertyValue("position")}catch(t){x=!1}m=s.k,e&&f&&!s.disabled&&(s.init(),s.active=!0)},s.t&&s.U.add(t,"load",(function i(){s.i&&o||g(),s.U.remove(t,"load",i)}),!1)}(window,document);
