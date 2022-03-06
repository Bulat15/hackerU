// const lst = [12,5,43,2,5,32];

// for (let elem of list){
//     console.log(elem);
// }

// console.log(lst.includes(12));
// console.log(lst.includes(1));

// function handler(lst1,lst2,lst3){
//     const result = [];
//     for (let elem of lst1){
//         if (lst2.includes(elem) && lst3.includes(elem)){
//             result.push(elem);
//         }
//     }
//     return result;
// }

const obj = {
    Гайк: 'Гайк',
    gfgfdg: 'gfgfdg',
}
// const result = [];
// for (let elem in obj){
//     result.push(elem);
// }

// console.log(result)

// function handler(obj){
//     const result = [];
//         for (let elem in obj){
//             if(elem.length < 6){
//                 result.push(elem);
//             }
//         }
//     return console.log(result);
// }

// function handler2(obj){
//     const result = [];
//     const result2 = [];
//         for (let elem in obj){
//                 result.push(elem);
//         }
//         for (let elem of result){
//             if(elem.length < 6){
//                 result2.push(elem);
//             }
//         }
//     return console.log(result2);
// }

function handler(obj){
    const result = [];
        for (let elem in obj){
                if(obj[elem] == elem[obj]){
                    return console.log(obj);
                }
        }
    
}

handler(obj);


// console.log(handler([2,5,1],[3,5,6],[7,5,9]));

