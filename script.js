const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

canvas.addEventListener("mousedown",(e)=>{
    isPressed=true
    x=e.offsetX
    y=e.offsetY
})
document.addEventListener("mouseup",(e)=>{
    isPressed=false
    x=undefined
    y=undefined
})
canvas.addEventListener("mousemove",(e)=>{
    if(isPressed){
        x2=e.offsetX
        y2=e.offsetY
        pointcircle(x,y)
        linecircle(x,y,x2,y2)
        x=x2
        y=y2
    }
})
function pointcircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle=color
    ctx.fill()
}
function linecircle(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.lineWidth=size*2
    ctx.strokeStyle=color
    ctx.stroke()
}
function update_size(){
    sizeEL.innerText=size
}

increaseBtn.addEventListener("click",()=>{
        size+=5
        if(size>50){
            size=50
        }
   
    update_size()
})
decreaseBtn.addEventListener("click",()=>{
        size-=5
        if(size<5){
            size=5
        }
   
    update_size()
})


colorEl.addEventListener('change', (e) => color = e.target.value)


clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))