// let lst = [
//     {name: 'Гайк', lastname: 'Инанц'},
//     {name: 'Булат', lastname: 'ыва'},
//     {name: 'нее', lastname: 'ыав'},
//     {name: 'Гаыавыайк', lastname: 'выавы'},
// ]

// lst.forEach(elem =>{
//     let result =`${elem.name} ${elem.latname}`;
//     console.log(result);
// })

// lst.forEach(({lastname}) =>{
//     let result =`${name} ${lastname}`;
//     console.log(result);
// })

// написать функцию, которая получает два числа и возвращает наибольшее

// function fdfd(val1,val2){
//     if(val1 > val2){
//         return console.log(val1);
//     }else{
//         return console.log(val2);
//     }
// }

// function handler(x,y,...args){
//     console.log(x);
//     console.log(y);
//     console.log(args);
// }

// console.log(handler(12,4,5,6));


// function handler(){
//     console.log(this.value);
// }

// const obj_1 = {
//     value : 'dsadsadsa',
//     handler
// }

// const obj_2 = {
//     value : 'dsadssdsd232adsa',
//     handler
// }

// function find(...arrs) {
//     max = 0;
//     result = '';
//     for (let index = 0; index < arrs.length; index++) {
//         if (max < (arrs[index].length)) {
//             max = arrs[index].length;
//             result = arrs[index];
//         }
//     }
//     return console.log(result);
// }



function find(len,...args){
    let arr = [];
         args.reduce((a,b)=>(a.length === len) ? arr.push(a) : b);
    return arr;
}

function find2(len,...args){
    let arr = [];
    for(arg of args){
        if(arg.length == len){
            arr.push(arg); 
        }
    }
    return arr;
}

function find3(len,...words){
    return words.filter(elem=> elem.length === len);
}


console.log(find3(4,'dfsdf', 'sfdr','dfd','erty'));
