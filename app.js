let size = document.getElementById('size');
let left = document.getElementById('left');
let right = document.getElementById('right');
let justify = document.getElementById('justify')
let para = document.getElementById('para');
let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
let underline = document.getElementById('underline');
let clear = document.getElementById('clear');
let color = document.getElementById('color');
let font = document.getElementById('font');
let bg = document.getElementById('bg');
let haeding = document.getElementById('heading');

left.addEventListener('click', ()=>{
    para.style.textAlign = 'left';
})

right.addEventListener('click', ()=>{
    para.style.textAlign = 'right';
})

center.addEventListener('click' , ()=>{
  para.style.textAlign = 'center';
})
justify.addEventListener('click' , ()=>{
  para.style.textAlign = 'justify';
})


size.addEventListener('click', ()=>{
    para.style.fontSize = size.value + 'px';
})

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

// bg.addEventListener('input' , ()=>{
//     document.body.style.backgroundColor = bg.value;
// });

font.addEventListener('click' , ()=>{
  para.style.fontFamily = font.value;
});





