// // const elk  = {
// //   height: 230,
// //   energy : 70,
// //   color :"grey",
// //   sound: "AAAAAAAAAAAAAAAAAAA",
// //   run: function(){
// //     this.energy -= 10;
// //   },
// //   changeColor: function(newColor){
// //     this.color = newColor;
// //   },
// //   get_sound(){
// //     console.log(this.sound);
// //   }
// // };

// // const dog = {
// //   sound:"fsdfsdfsdf",
// // }

// // dog.get_sound= elk.get_sound;

// // console.log(elk.energy);
// // elk.run();
// // console.log(elk.energy);

// // console.log(elk.color);
// // elk.changeColor("black");
// // console.log(elk.color);

// // dog.get_sound();
// // elk.get_sound();


// // function power(value,p){
// //   return value**p;
// // }

// // const power_1 = (value,p)=>value**p;

// // console.log(power(12,4));
// // console.log(power_1(12,4));


// // let bla = [23,23,34,54,65];

// // console.log(bla.sort((a,b)=>a-b));

// // console.log(bla.sort((a,b)=>b-a));

// // let users = [
// //   {name: 'Гайк', age: 29},
// //   {name: 'Анатолий', age: 31},
// //   {name: 'Степан', age: 20},
// //   {name: 'Генадий', age: 43},
// //   {name: 'Олег', age: 45}
// //  ]

// //  console.log(users.sort((a,b)=>a.age-b.age)); 
// const users = {
//    arr: [23,34,54,655],
//    get_length(){
//       return this.arr.length
//    },
//    sum(){
//      let result =0;
//      for (let i=0;i<this.get_length();i++){
//        result += this.value[i];
//      }
//      return result;
//     },
//     avg(){
//       return this.sum()/this.get_length();
//     }
// }

// console.log(users.avg())

// const perr = document.querySelector('#text');
const paragr = document.querySelectorAll('p');
const snans = document.querySelectorAll('span');

// const texte = ['привет', 'пока' , 'красавчик', 'ложись' ,'спать' ,'пожалуйста','хрен тебе']
// const perr = document.getElementById('text');
let arr =[];
for (let i=0;i<paragr.length;i++){
  arr.push(paragr[i].innerText);
}

function arraySum(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
      sum += parseInt(array[i]);
      }
  console.log(sum);
  }
  arraySum(arr);

// for (let i=0;i<paragr.length;i++){
//   paragr[i].innerText = snans[i].innerText;
//   snans[i].innerText = arr[i];
// }
// console.log(perr.innerText);
