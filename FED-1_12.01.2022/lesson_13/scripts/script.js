const formElem = document.forms[0];
const titleElem = formElem.title;
const imageElem = formElem.image;
const descrElem = formElem.describe;
const productsElem = document.querySelector('#products')
let products = [];


formElem.addEventListener('submit', event => {
  event.preventDefault();
  products.push({
  	title: titleElem.value,
  	description: descrElem.value,
  	img_url: imageElem.value
  })
  rerender();
});


function rerender(){
	productsElem.innerText = '';
	for (let i = 0; i< products.length; i++){
		const card = document.createElement('div');
		const closeElem = document.createElement('div');
		const h2Elem = document.createElement('h2');
		const pElem = document.createElement('p');
		const imgElem = document.createElement('div');

		closeElem.addEventListener('click', () =>{
			products = products.filter(elem => elem.title !== products[i].title);
			rerender();
		});

		imgElem.classList.add('product_img');
		card.classList.add('card');
		closeElem.classList.add('close');

		card.append(h2Elem, pElem, imgElem, closeElem);
		productsElem.appendChild(card);
		h2Elem.innerText = products[i].title;
		pElem.innerText = products[i].description;
		closeElem.innerText = '✖';
		imgElem.style.backgroundImage = `url("${products[i].img_url}")`;
	}
}


// добавить поле с описанием товара (textarea)