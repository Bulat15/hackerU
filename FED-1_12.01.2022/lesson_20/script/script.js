const rootElem = document.querySelector('#root');
const imgList = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];
const mediaPath = 'media/'
let imgIndex = 0;

const gallery_container = document.createElement('div');
const gallery_main = document.createElement('div');
const gallery_trigger = document.createElement('div');

const gallery_trigger_left = document.createElement('div');
const gallery_trigger_right = document.createElement('div');
gallery_trigger_left.innerHTML = '<i class="fas fa-arrow-left"></i>';
gallery_trigger_right.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

gallery_container.classList.add('gallery-container');
gallery_main.classList.add('gallery-main');
gallery_trigger.classList.add('gallery-trigger');


gallery_trigger.append(gallery_trigger_left, gallery_trigger_right);

gallery_container.append(gallery_main, gallery_trigger);
rootElem.append(gallery_container);


function render(){
	gallery_main.style.backgroundImage = `url('${mediaPath+imgList[imgIndex]}')`;
}



gallery_trigger_left.addEventListener('click', ()=>{
	console.log('left');
	if (imgIndex > 0){
		imgIndex--;
	}else{
		imgIndex = imgList.length - 1;
	}
	render()
	console.log(imgIndex);
});

gallery_trigger_right.addEventListener('click', ()=>{
	console.log('right');
	if (imgList.length - 1 > imgIndex){
		imgIndex++;
	}else{
		imgIndex = 0;
	}
	render()
	console.log(imgIndex);
});


const ulElem = document.createElement('ul');
ulElem.classList.add('gallery-points');

ulElem.append(...imgList.map(()=>document.createElement('li')));
gallery_container.append(ulElem);


render()