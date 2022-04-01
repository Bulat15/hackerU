{
const rootElem = document.querySelector('#root');
const imgList = ['image_1.png', 'image_2.png', 'image_3.png', 'image_4.png', 'image_5.png'];
const mediaPath = 'media/'
let imgIndex = 0;

const gallery_container = document.createElement('div');
const gallery_main = document.createElement('div');
const slider_film = document.createElement('div');
const gallery_trigger = document.createElement('div');

gallery_container.classList.add('gallery-container');
gallery_main.classList.add('gallery-main');
gallery_trigger.classList.add('gallery-trigger');
slider_film.classList.add('slider-film');

gallery_container.append(gallery_main, gallery_trigger);
rootElem.append(gallery_container);
gallery_main.append(slider_film);

slider_film.append(...imgList.map(img_name=>{
	const divElem = document.createElement('div');
	divElem.style.backgroundImage = `url('${mediaPath+img_name}')`;
	return divElem
}))

const render = ()=>{
	gallery_main.style.backgroundImage = `url('${mediaPath+imgList[imgIndex]}')`;
	const liList = document.querySelectorAll('.gallery-points li');
	
	liList.forEach(t=>t.classList.remove('active'));
	liList[imgIndex].classList.add('active');

	const window_width = gallery_main.offsetWidth;
	slider_film.style.right = window_width * imgIndex + 'px';
}

const ulElem = document.createElement('ul');
ulElem.classList.add('gallery-points');

ulElem.append(...imgList.map((_, index)=>{
	const elem = document.createElement('li');
	elem.addEventListener('click', event=>{
		const liElem = event.target;
		const liList = [...liElem.parentNode.children];
		imgIndex = liList.indexOf(liElem);
		render();
	})

	return elem
}));
gallery_container.append(ulElem);

render()
}