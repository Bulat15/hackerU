const arr = [1,3,5,6,7,8,9,0,22,33,44,55,66,77,88,99,123,234,345,456];

//Ззадание 1
//- max со значением максимального числа
//- min со значением минимального числа
// - count со значением кол-ва элементов в массиве
//- avg со значением среднего 
MyObject = {
	count : 0,
	avg : 0,
	min: 0,
	max: 0,
} 

console.log(MyObject);
//{count: 0, avg: 0, min: 0, max: 0}

function avg(arr){
	let avg = 0;
	let sum = 0;
	let count = 0;
	let min = arr[0];
	let max = arr[0];
	for (let i = 1; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	for (let i = 0; i < arr.length; i++){
		count++;
	}
	for (let i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}
	for (let i = 1; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	avg = sum / arr.length;
	MyObject.avg = avg;
	MyObject.count = count;
	MyObject.min = min;
	MyObject.max = max;
	return 
}

avg(arr)

console.log(MyObject);
//{id: 1, avg: 84.05, boolval: true}



//задание 2
//В данном задании вам необходимо реализовать сумматор. 
// Добавьте в HTML страницу форму с полем ввода и кнопкой "Прибавить". Помимо этого ниже добавьте параграф с id "result".
// Напишите обработчик в javascript, который при submit формы забирает значение из поля ввода и прибавляет его к значению из параграфа "result". Общий результат выводится в параграф "result".
// Процесс должен корректно работать только при вводе числа в поле формы, иные сценарии поведения пользователя обрабатывать не нужно.

const formElem = document.querySelector('#form_1');
const result = document.querySelector('#result'); 
let sum = 0;

function form_handler(event) {
	event.preventDefault();
	const inputElem = document.querySelector('#sum');
	let a = Number(inputElem.value);
	sum = sum + a;
	result.innerText = sum;
}

formElem.addEventListener('submit', form_handler);


//задание 3
//Добавьте в HTML страницу форму с полем ввода и кнопкой "Добавить". 
//Помимо этого ниже добавьте div с id "colors". Поле ввода должно принимать значение цвета.
//Напишите обработчик в javascript, 
//который при submit формы забирает значение из поля ввода и в div с id "colors" создает еще один div. 
//У нового div в центре должен быть код цвета, введенный пользователем,
// а цвет заднего фона нового div должен быть окрашен тем цветом, который был получен из input элемент.
// При добавлении нового элемента старые не должны пропадать.

const formElem_2 = document.querySelector('#form_2');
const color = document.querySelector('#color'); 

function form_handler_2(event){
	event.preventDefault();
	const inputElem_2 = document.querySelector('#add');
	const divElem = document.createElement('div');
	divElem.classList.add('in');
	document.getElementById('color').appendChild(divElem);
	divElem.innerText = inputElem_2.value;
	divElem.style.backgroundColor = inputElem_2.value;
	divElem.style.width = '100px';
	divElem.style.height = '100px';
	divElem.style.display = 'flex';
	divElem.style.alignItems = 'center';
	divElem.style.paddingLeft = '25px';
}

formElem_2.addEventListener('submit', form_handler_2);