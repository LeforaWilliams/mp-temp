const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

const context = canvas.getContext("2d");
context.scale(2, 2);

let aimX = null; 
let aimY = null; 
let currentX = null; 
let currentY = null; 


let curImg = 0;

const imgArr = ['img/pic_1.jpg', 'img/pic_2.jpg', 'img/pic_3.jpg'].map(src => {
    const image = document.createElement('img');
    image.src = src; 
    return image; 
});

document.addEventListener('mousemove', function(e) {
    aimX = e.pageX;
    aimY = e.pageY; 
    if( currentX === null) {
        currentX = e.pageX;
        currentY = e.pageY;     
    }
});

canvas.addEventListener('click', function() {
    curImg =  curImg + 1; 
    if(curImg >= imgArr.length) {
        curImg = 0; 
    }
});

const draw = function () {
    if(currentX) {
        if(imgArr[curImg].complete) {
            context.drawImage(imgArr[curImg], currentX - 200, currentY - 300, 400, 600);
        }  
        
        currentX = currentX + (aimX - currentX) * 0.08;
        currentY = currentY + (aimY - currentY) * 0.08;

    }

    requestAnimationFrame(draw);
}

draw();