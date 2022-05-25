let a =0;
function Animate1(){
const hi = document.getElementById("Box");
a++;
hi.innerHTML = a;
hi.style.animation="test1 2s";


}

function Animate2(){
    const hi = document.getElementById("Box");
  
    hi.style.animation=null;
    
}