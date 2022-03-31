const mode = localStorage.getItem('mode');

mode && document.body.classList.add(mode);

const change_mode_button = document.querySelector('#btn');


change_mode_button.addEventListener('click', ()=>{
	const body_classList  = document.body.classList;
	body_classList.toggle('dark');
	localStorage.setItem('mode' , body_classList.contains('dark') ? 'dark' : '');
})

if(!localStorage.getItem('hello')){
	const helloelem = document.createElement('div');

	helloelem.classList.add('hello');

	helloelem.innerText = 'Добро пожаловать епты!!';
	document.body.append(helloelem);
	
	localStorage.setItem('hello' , 1);
}
	
