const cvsElem = document.querySelector('#cvs');
const ctx = cvsElem.getContext('2d');

const data = [
    { x: 1, y: 2 },
    { x: 2, y: -3 },
    { x: 3, y: 4 },
    { x: 4, y: 0 },
    { x: 5, y: 3 },
    { x: 10, y: -1 },
]

cvsElem.width = 600;
cvsElem.height = 600;

const scale = 20;

function grid() {
    ctx.strokeStyle = '#95a5a6';
    for (let i = 0; i < cvsElem.width; i += scale) {
        for (let j = 0; j < cvsElem.width; j += scale) {
            ctx.strokeRect(j, i, scale, scale);
        }

    }
    ctx.strokeStyle = '#000000';
}

function addPoint(x, y) {
    const width = scale/2;
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(x * scale - width/2, cvsElem.height / 2 - y * scale - width/2, width, width)
}

function drawLine(data) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#e74c3c';
    const firstPoint = data[0];
    ctx.beginPath();

    ctx.moveTo(firstPoint.x*scale, cvsElem.height / 2 - firstPoint.y*scale);
    data.forEach(({x,y})=>ctx.lineTo(x*scale,cvsElem.height / 2 - y*scale));
    ctx.stroke();
}


function zeroLine(){
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(0,cvsElem.height / 2);
    ctx.lineTo(cvsElem.width,cvsElem.height / 2);
    ctx.stroke();
}

data.forEach(({ x, y }) => addPoint(x, y));
grid();
zeroLine();
drawLine(data);