let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let para = document.getElementById('para');
let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
let underline = document.getElementById('underline');
let clear = document.getElementById('clear');
let color = document.getElementById('color');
let font = document.getElementById('font');
let bg = document.getElementById('bg');
let haeding = document.getElementById('heading');
let size= 1;


plus.addEventListener('click' , ()=> {
    size=size + 0.1 ;
    para.style.fontSize = size + "em";

});

minus.addEventListener('click' ,()=>  {
    size=size - 0.1 ;
    if(size < 0.1) size = 0.1;
     para.style.fontSize = size + "em";
    

});
bold.addEventListener('click' ,()=>{
    para.style.fontWeight = 'bold';
} );

italic.addEventListener('click' ,()=>{
    para.style.fontStyle = 'italic';
} );

underline.addEventListener('click' ,()=>{
    para.style.textDecoration = 'underline';
});

clear.addEventListener('click' , ()=>{
para.style = 'none';
});

color.addEventListener('input', ()=>{
    para.style.color = color.value;
});

bg.addEventListener('input' , ()=>{
    document.body.style.backgroundColor = bg.value;
});

font.addEventListener('click' , ()=>{
    para.style.fontFamily = font.value;
});





