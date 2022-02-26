const formElem = document.querySelector('form');
const atr = [];

function form_handler(event){
  event.preventDefault();
  const inputElem = document.querySelector('#deal_input');
  atr.push(inputElem.value);
  if(value === ''){
    return
  }
  inputElem.value ='';
  console.log(atr);
  // console.log('форма отправлена')
}

formElem.addEventListener('submit',form_handler);



