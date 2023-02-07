const p = document.createElement("p");
p.classList.add("boxlist");
document.body.append(p);

for(let i = 0; i< 5; i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = Math.floor(Math.random() * 5) + 1;
    p.append(div);
}
