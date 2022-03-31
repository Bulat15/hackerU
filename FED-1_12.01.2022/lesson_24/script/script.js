// const btn = document.querySelector('button');
// const resultElem = document.querySelector('#result')

// let ls_value = localStorage.getItem('value');
// let value = (!value) ? 0 : ls_value;

// let value = localStorage.getItem('value') || 0;

// resultElem.innerText = value;

// btn.addEventListener('click', ()=>{
// 	resultElem.innerText = ++value;
// 	localStorage.setItem('value',value)
// })

const readCards  = ()=> JSON.parse(localStorage.getItem('cards')) || [];
const writeCards = data => localStorage.setItem('cards', JSON.stringify(data));

const cards = readCards();

const form = document.querySelector('form');

form.addEventListener('submit', e=>{
	e.preventDefault();
	const title = e.target.title.value;
	const text = e.target.text.value;
	cards.push({title,text});
	writeCards(cards);
	e.target.title.value = '';
	e.target.text.value = '';

	console.log(cards);

});