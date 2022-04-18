// function power(v,p){
//     if (p === 0){
//         return 1
//     }
//     return v*power(v,p-1)
// }

// console.log(power(2,5));

// function mirrow(nubmer, prev = 0){
//     const n = nubmer%10;
//     const newNumber = Math.floor(nubmer/10);
//     if(newNumber === 0){
//         return prev*10+n;
//     }
//     // number = number * 10 + length.number*10*end;
//     return mirrow(newNumber, prev*10+n);
    
// }

// console.log(mirrow(1234));


function mullt(val1, val2){
 if(val1 === 1){
     return val2;
 }

 return val2+mullt(val1-1,val2)
}

// console.log(mullt(3,4));

class Node{
    constructor(name){
     this.name = name;
     this.children = [];
    }
   
    add(node){
     this.children.push(node);
    }
   }
   
   const tree = new Node('Анатолий');
   const tree2 = new Node('Булат');
   
   tree.add(new Node('Максим'));
   tree.add(new Node('Антон'));
   tree.add(new Node('Семен'));
   
   tree.children[0].add(new Node('Олег'));
   tree.children[0].add(new Node('Сева'));
   
   tree.children[2].add(new Node('Егор'));
   
   function search(tree, query){
    if (tree.name === query){
     return tree
    }
   
    for (let node of tree.children){
     const result = search(node, query);
     if (result !== null){
      return result
     }
    }
    return null
   }

   function render(tree, indent =''){
       console.log(indent+tree.name)

       for (let node of tree.children){
            render(node,indent+tree.name+'->');
       }
   };
   
   console.log(render(tree, 'Анатолий'));


