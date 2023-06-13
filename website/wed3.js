let text=document.getElementById('text')
let text=document.getElementById('leaf')
let text=document.getElementById('hill1')
let text=document.getElementById('hill4')
let text=document.getElementById('hill5')

window.addEventlistener('scroll', () =>{
	let value = window.scrollY;

	text.style.marginTop = 2.5 + 'px';
});