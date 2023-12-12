let yt = document.getElementById('yt');
let spotify = document.getElementById('spotify');
let apple = document.getElementById('apple');
let pagina = document.getElementById('pag');
let random = Math.floor(Math.random() * (1 - 0 + 1) + 0);
let portada = document.getElementById('portada');

if(random == 0){
	pagina.classList.remove('Fv');
	pagina.classList.add('Fb');
	portada.classList.remove('border');
	portada.classList.add('shadow');
	yt.src="img/yt2.png";
	spotify.src="img/spotify2.png";
	apple.src="img/apple2.png";
}