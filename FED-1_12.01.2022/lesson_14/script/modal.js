// написать процесс, который из массива modals создает множество кнопок с указанным текстом
// и при нажатии на каждую должно выплытвать модальное окно с указанным текстом.
const rootElem = document.querySelector('#root');

const modals  = [
	{
		button_text: 'конпка 1',
		modal_text: 'Какой-нибудь текст для модального окна 1'
	},
	{
		button_text: 'конпка 2',
		modal_text: 'Какой-нибудь текст для модального окна 2'
	},
	{
		button_text: 'конпка 3',
		modal_text: 'Какой-нибудь текст для модального окна 3'
	},
	{
		button_text: 'конпка 4',
		modal_text: 'Какой-нибудь текст для модального окна 4'
	},
	{
		button_text: 'конпка 5',
		modal_text: 'Какой-нибудь текст для модального окна 5'
	}
];

function addModalWindow(text){
	const modalContainerElem = document.createElement('div');
	const modalElem = document.createElement('div');
	const crossElem = document.createElement('div');

	modalContainerElem.classList.add('modal-container');
	modalElem.classList.add('modal');
	crossElem.classList.add('close-cross')
	crossElem.innerText = '✖';

	modalElem.appendChild(crossElem);
	modalContainerElem.appendChild(modalElem);
	rootElem.appendChild(modalContainerElem);
	modalElem.append(text);

	crossElem.addEventListener('click', ()=>modalContainerElem.remove());
	modalContainerElem.addEventListener('click', ()=>modalContainerElem.remove());
	modalElem.addEventListener('click', event=>event.stopPropagation());
}


const buttonContainerElem = document.createElement('div');
root.appendChild(buttonContainerElem);

for (let i = 0; i < modals.length; i++){
	const buttonElem = document.createElement('button');
	buttonElem.innerText = modals[i].button_text;
	buttonContainerElem.appendChild(buttonElem);
	buttonElem.addEventListener('click', ()=>addModalWindow(modals[i].modal_text));
}

// addModalWindow(`Равным образом постоянное информационно-пропагандистское обеспечение нашей 
// 	деятельности влечет за собой процесс внедрения и модернизации систем массового участия. 
// 	Значимость этих проблем настолько очевидна, что сложившаяся структура организации в значительной 
// 	степени обуславливает создание соответствующий условий активизации. Равным образом укрепление и 
// 	развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных 
// 	финансовых и административных условий.`)


