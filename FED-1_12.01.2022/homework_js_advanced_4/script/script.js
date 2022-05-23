const navBtnElem = document.querySelector('.nav-btn');
const menuElem = document.querySelector('.menu');

navBtnElem.addEventListener('click', ()=>{
    menuElem.classList.toggle('active');
}

);

const pointArr = document.querySelectorAll('.points li');
const pageArr = document.querySelectorAll('.page');

const upElem = document.querySelector('#up');


pointArr.forEach((elem,index)=>{
	elem.addEventListener('click',()=>{
		pageArr[index].scrollIntoView({behavior: 'smooth'});
		pointArr.classList.remove('active');
	})
})

// upElem.addEventListener('click',()=>{
// 	document.body.scrollIntoView({behavior: 'smooth'});
// })

document.querySelector('#up').addEventListener('click',()=>document.body.scrollIntoView({behavior: 'smooth'}))

document.addEventListener('scroll',()=>{
	if(window.scrollY > 200){
		upElem.classList.add('show');
	}else{
		upElem.classList.remove('show');
	}
})


const menuImens = [...document.querySelectorAll('.menu .points li'),...document.querySelectorAll('.menu .btns a')];

menuImens.forEach(t=> t.addEventListener('click',
 ()=>{
	menuElem.classList.remove('active');
 }))