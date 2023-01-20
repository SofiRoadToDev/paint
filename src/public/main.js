const lienzo= document.getElementById('canvas');
var ctx= lienzo.getContext('2d');

const colorPicker= document.querySelector('#color');
const shapePicker= document.querySelector('#shape');
const grosorPicker= document.querySelector('#grosor');
var rect= lienzo.getBoundingClientRect();//ubicacion del canvas respectoa  la pantalla

let color =colorPicker.value;
let grosor =grosorPicker.value;
let shape=shapePicker.value;

let isDrawing=false;

const canvasOffsetX=rect.left;// distancia desde el borde del elemento padre a nuestro canvas
const canvasOffsetY=rect.top;

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




const dibujar= (x,y,x1,y1)=>{

    if(!isDrawing){
        return;
    }
    ctx.beginPath();
    ctx.lineWidth=grosor;
    ctx.lineCap=shape;
    ctx.strokeStyle=color;
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.stroke();
   
}






const clickOnCanvas=(e) =>  { 
    isDrawing=true;
    
   
}


const mouseMoving=(e)=>{
    if(isDrawing){
        dibujar(startX,startY,e.offsetX,e.offsetY);
        startX=e.offsetX;
        startY=e.offsetY;
    }
  
    
}



const leaveCanvas=(e) => {

    isDrawing=false;
    ctx.closePath();
    
}

lienzo.addEventListener('mousedown',clickOnCanvas)
lienzo.addEventListener('mousemove',mouseMoving)
lienzo.addEventListener('mouseup',leaveCanvas)






