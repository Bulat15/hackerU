// // const lst = ['12','5','43','2','32','5','65','43']
// const lst = [12,5,-43,-2,32,5,-6,43]

// const lst3 = ['fdgdfgfg','sfds','sdfdsfds','sdf']

// const lst4 = [
//     {
//         type: 'dsdsd',
//         id: 3
//     },
//     {
//         type: 'dsdsd',
//         id: 4
//     },
//     {
//         type: 'лыжи',
//         id: 4
//     }
// ]

// // lst.forEach(elem=>{
// //     if(elem%2 === 0){
// //         console.log(elem)
// //     }
// // })

// // lst.forEach((elem,index,arr)=>arr[index]=+elem);
// // console.log(lst);

// // lst2.forEach(elem=>{
// //     if(elem<0){
// //            elem = -1*(elem);
// //         }        
// // });
// // console.log(lst2);

// // const lst2 = lst.map (elem=>(elem<0) ? -elem :elem);


// // let lst2 = lst3.filter(elem=>elem.length<6);
// // console.log(lst2);

// console.log(lst4.find(elem=>elem.id ==4))
// console.log(lst4.find(elem=>elem.type == 'лыжи'))

const root = document.querySelector('#root');
const search = document.querySelector('#search');
const asc = document.querySelector('.assending');
const desc = document.querySelector('.descending')
// const pLst = document.getElementsByTagName('p');

// [...pLst].find(elem=>elem.innerText == 'Штаны').classList.add('main')

// let text = [...pLst].map(elem =>elem.innerText);
// // console.log(text)

search.addEventListener('input',event=>{
    const value = event.target.value;
    const lst = todoList.filter(elem=>elem.startsWith(value))
    render(lst);
})

const todoList = ['поеасть','по-спать','по-кататься'];

function render(list){
    root.innerText = '';
    root.append(...list.map(elem=>{
        const liElem = document.createElement('li');
        liElem.innerText = elem;
        return liElem;
    }))
}

asc.addEventListener('click',event=>{
    console.log('agahjda');
})



render(todoList);
   