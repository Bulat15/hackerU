const lst = [];

lst.push({
  id : 1,
  constd: 'Гайк',
  lastname: ' Молодец',
  age: 36,
});

lst.push({
  id : 2,
  constd: 'Булат',
  lastname: ' Молодец',
  age: 23,
});

lst.push({
  id : 3,
  constd: 'Марат',
  lastname: ' Молодец',
  age: 69,
});

// for (let i=0; i<lst.length; i++){
//   if(lst[i]%2 === 0){
//     console.log(lst[i]);
//   }
// }

// let sum = 0;
// for (let i=0; i<lst.length; i++){
//    sum += lst[i];
// }

// console.log(`Добрый день ${obj['constd']}${obj['lastname']}!`);

// console.log(lst);
// let sumAge =0;
// let len = lst.length;
// let my = [];
// let veyMy = [];
// for (let i=0; i<lst.length; i++){
//   // const {age} = lst[i];
//   sumAge += lst[i].age;
//   // age2 += lst[i]{age};
//   // const lst2 = lst[i];
//   // console.log(`Добрый день ${constd} ${lastname}`);
//   // console.log(sumAge/len);

//   if(lst[i].age > sumAge/len){
//     my = lst[i].id;
//   }
// }

// for (let i=0;i<my.length;i++){
//   veyMy = lst[my[i]];
// }
// console.log(veyMy);





function power(value,p=2){
  let result = value **p;
    return result;
}

function myPower(value){
  let mass =[];
  for (i=0;i<=value;i++){
    mass.push(i);
  }  
    return mass;
}

function veryPower(start,end){
  let mass =[];
  for (i=start;i<=end;i++){
    mass.push(i);
  }  
    return mass;
}

function veryPower2(start,end){
  if(start < end){
    let mass =[];
    for (i=start;i<=end;i++){
      mass.push(i);
    }  
      return mass;
  }else{
    let mass =[];
    for (i=end;i<=start;i++){
      mass.push(i);
    }  
      return mass;
  }
  
}

function veryBigPower2(n,m,count=1){
  let mass = [];
  let start = (n < m) ? n : m;
  let end = (n > m) ? n : m;

    for (let i=start;i<=end;i+= count){
      mass.push(i);
    }  
      return mass;
}

function veryMaxiBigPower(n,m,s){
  let mass = [];
  let start = ((n+m) > s) && ((n+s) > m) && ((s+n) > m) ? true : false;
  return start;

}

let p_1 = power(12,2);
let p_2 = power(2,3);
let p_3 = power(5,4);
let p_4 = myPower(2);
let p_5 = veryPower(2,7);
let p_6 = veryPower2(7,2);
let p_7 = veryBigPower2(0,15,3);
let p_8 = veryMaxiBigPower(12,7,8);


// console.log(p_1,p_2,p_3,p_4);

// console.log(p_5);
console.log(p_8);