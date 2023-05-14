const backgroundStyle1=document.querySelector('.background-style');
const backgroundStyleBack=document.querySelector('.background-style-back');

const shineClass=document.querySelector('.shine1');

backgroundStyle1.addEventListener('mouseover',shines);

 function shines(e)
 {
    e.preventDefault();
        shineClass.classList.add('shine');
        shineClass.classList.remove('shine2');

 }

 backgroundStyleBack.addEventListener('mouseout',shin);

 function shin(e)
 {
    e.preventDefault();
    shineClass.classList.remove('shine');
        shineClass.classList.add('shine2');
 }
