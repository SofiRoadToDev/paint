const lienzo= document.getElementById('canvas');
var ctx= lienzo.getContext('2d');

const colorPicker= document.querySelector('#color');
const shapePicker= document.querySelector('#shape');
const grosorPicker= document.querySelector('#grosor');
//var rect= lienzo.getBoundingClientRect();//ubicacion del canvas respectoa  la pantalla

let color =colorPicker.value;
let grosor =grosorPicker.value;
let shape=shapePicker.value;

let isDrawing=false;

const canvasOffsetX=lienzo.offsetLeft;// distancia desde el borde del elemento padre a nuestro canvas
const canvasOffsetY=lienzo.offsetTop;

let startX;
let startY;



/**Manejo de cambios en inputs color y grosor */
const setColor=(c)=>{
    console.log('color: '+c);
    color=c
}

const setThickness =(t)=>{
    grosor =t
}

const setShape =(f)=>{
    shape =f
}




const dibujar= (x,y)=>{
    let xPosition=x-canvasOffsetX;
    let yPosition=y-canvasOffsetY;

    console.log(`drawing X: ${x} y: ${y}`)
    if(!isDrawing){
        return;
    }
    
    ctx.lineWidth=grosor;
    ctx.lineCap=shape;
    ctx.strokeStyle=color;
    ctx.lineTo(xPosition,yPosition);
    ctx.stroke();
    
}





const clickOnCanvas=(e) =>  { 
    isDrawing=true;
    startX=e.clientX;
    startY=e.clientY;
   
    //console.log(' click on canvas x: '+e.clientX+' valor startX: '+ startX)
   
}


const mouseMoving=(e)=>{
    dibujar(e.clientX,e.clientY);
    
}



const leaveCanvas=(e) => {

    console.log(`Mouse leave: x: ${e.clientX} y: ${e.clientY}`)

    isDrawing=false;
    ctx.stroke();
    ctx.beginPath(); 
    
}






lienzo.addEventListener('mousedown',clickOnCanvas)
lienzo.addEventListener('mousemove',mouseMoving)
lienzo.addEventListener('mouseup',leaveCanvas)
