const lienzo= document.getElementById('canvas');
var ctx= lienzo.getContext('2d');

const colorPicker= document.querySelector('#color');
const shapePicker= document.querySelector('#shape');
const grosorPicker= document.querySelector('#grosor');
//var rect= lienzo.getBoundingClientRect();//ubicacion del canvas respectoa  la pantalla

var color =colorPicker.value;
var grosor =grosorPicker.value;
var shape=shapePicker.value;


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

const dibujar= (cursorX,cursorY)=>{

    console.log('cursorX: '+cursorX+' cursorY: '+cursorY)
    //iniciamos una nueva ruta
    ctx.beginPath();
    ctx.moveTo(initialX,initialY);

    //definimos el color y grosor
    ctx.strokeStyle=color;
    ctx.lineWidth=grosor;
    ctx.lineCap=shape;
    ctx.lineJoin = "round";

    ctx.lineTo(cursorX,cursorY);
    ctx.stroke();
    //ctx.closePath();
   initialX=cursorX;
   initialY=cursorY;

}








const mouseMoving=(e)=>{
    console.log('mouse moving');
    dibujar(e.offsetX,e.offsetY);
}

const clickOnCanvas=(e) =>  {       
    initialX=e.offsetX;
    initialY=e.offsetY;
    dibujar(initialX,initialY);
    lienzo.addEventListener('mousemove',mouseMoving)
}

const leaveCanvas=(e) => {
    lienzo.removeEventListener('mousemove',mouseMoving)
}




lienzo.addEventListener('mouseup',leaveCanvas)
lienzo.addEventListener('mousedown',clickOnCanvas)


