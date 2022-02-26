const root = document.querySelector('#root');
const todo = ['проснуться','поесть','погулять','поспать'];
const colors = ['green','blue','pink','yellow'];
const formElem = document.querySelector('form');


// function getRandColor(colors){
//   const index = Math.round(Math.random()*(colors.length-1));
//   return colors[index];
// }

function render(){
  root.innerText = '';
  for (let i=0; i<todo.length;i++){
    const pElem = document.createElement('p');
    // pElem.style.color =getRandColor(colors);
    // pElem.style.backgroundColor = getRandColor(colors);
    
    pElem.classList.add('todo');
    pElem.innerText =  todo[i];
    root.appendChild(pElem);
  }
}



function form_handler(event){
  event.preventDefault();
  const inputElem = document.querySelector('#deal_input');
  todo.push(inputElem.value);
  if(value === ''){
    return
  }
  inputElem.value ='';
  render();
  // console.log(event);
  // console.log('форма отправлена')
}

formElem.addEventListener('submit',form_handler);



