const cvsElem = document.querySelector('#cvs');
const ctx = cvsElem.getContext('2d');

cvsElem.width = 500;
cvsElem.height = 500;

// // cvs.fillRect(20 ,20, 300, 300)

// // for(let i =0; i<100;i++){
// //     cvs.fillRect(5+i**2,5+i**2,5,5);
// // }

// function addPoint(x,y){
//     cvs.fillRect(x,cvsElem.height/2 - y,5,5);
// }

// // addPoint(10,20)
// // addPoint(40,40)

// // Math.sin(Math.PI)

// let step = 0;

// function sin(step){
//     cvs.clearRect(0,0,cvsElem.width, cvsElem.height);
//     for(let i=0;i<500;i+=2){
//         let x = i;
//         let y = Math.sin(step/10+Math.PI*i/100)*50;
//         addPoint(x,y);
//     }
// }

// setInterval(()=>sin(--step),1);


class Square {
    constructor() {
        this.height = 10;
        this.width = 10;
        this.x = 50;
        this.y = 50;
        this.step = 5;
        window.addEventListener('keydown', e => {
            if (e.code === 'KeyW') {
                this.goUp()
                console.log('goUp()')
            } else if (e.code === 'KeyA') {
                this.goLeft()
                console.log('goLeft()')
            } else if (e.code === 'KeyS') {
                this.goDown()
                console.log('goDown()')
            } else if (e.code === 'KeyD') {
                this.goRight()
                console.log('goRight()')
            }
            rerender()
        })
    }

    draw() {
        const { x, y, width, height } = this;
        ctx.fillRect(x, y, width, height)
        // ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    goLeft() {
        if(this.x > this.step){
            this.x -= this.step;
        }else{
            this.x = 0;
        }
        
    }
    goRight() {
        this.x += this.step;
    }
    goUp() {
        this.y -= this.step;
    }
    goDown() {
        this.y += this.step;
    }

}

const sq_lst = [];

setInterval(()=>sq_lst.push(new Square()),1000)

// const sq1 = new Square();

function rerender(){
    ctx.clearRect(0,0,cvsElem.width,cvsElem.height);
    sq_lst.forEach(sq => sq.draw());
}





















