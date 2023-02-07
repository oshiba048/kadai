const remove_button = document.querySelectorAll(".remove_button");

for(const btn of remove_button){
    btn.onclick = () => {
        btn.parentNode.remove();
    } 
}

