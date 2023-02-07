const appID = "p10:";
const save = document.getElementById("save");
const load = document.getElementById("load");
const name = document.getElementById("name");
const address = document.getElementById("address");
const mail = document.getElementById("mail");
const nameList = document.getElementById("nameList")

save.onclick = () => {
    const data = {
           name : name.value,
        address : address.value,
           mail : mail.value
    };
    window.localStorage.setItem(appID + data.name, JSON.stringify(data));
};

load.onclick = () => {
    nameList.innerHTML = "";
    const s = window.localStorage;
    for (let i = 0; i < s.length; i++) {
        if (s.key(i).indexOf(appID) == 0) {
            let data = s.getItem(s.key(i));
            data = JSON.parse(data);
            const div = document.createElement("div");
            div.classList.add("d-flex");
            const newElement = document.createElement("div");
            newElement.classList.add("bg-primary", "text-white", "rounded-pill", "p-2", "m-1");
            newElement.innerHTML = data.name;
            newElement.onclick = function() {
                let data = window.localStorage.getItem(appID + this.innerText);
                data = JSON.parse(data);
                name.value = data.name;
                address.value = data.address;
                mail.value = data.mail;
            };
            div.append(newElement);
            nameList.append(div);
        }
    }
};