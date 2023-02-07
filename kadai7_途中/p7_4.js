const num = document.getElementById("num");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

plus.onclick = () => {
    num.value = parseInt(num.value) + 1;
} 

minus.onclick = () => {
    if(num.value > 0){
        num.value = parseInt(num.value) - 1;
    }
    else(alert("これ以上はマイナスできません。"))
} 

reset.onclick = () => {
    num.value = 0;
} 
