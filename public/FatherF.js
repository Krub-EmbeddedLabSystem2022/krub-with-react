var num = document.getElementById("number");
var hi = document.getElementById("pee");
var N = 0;
setInterval(updateN, 1000);
function updateN(){
    num.textContent = N++;
    if(N > 2){
        hi.textContent = "persons in this area";
    }
}