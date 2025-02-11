
const users = [];


function removeUsers(e){
    console.log(e.target);
    e.target.remove();
        
}

const form = document.querySelector("form");

const list = document.querySelector("#list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // 
    event.stopPropagation();
    const userName = new FormData(form).get("user");
    
    const li = document.createElement("li");
    const div = document.createElement("div");

    li.addEventListener("dblclick", removeUsers);

    const color = getRandomColors()
    div.style.background = color;
    
    users.push({userName, color})
    
    li.innerText = userName;

    li.prepend(div);
    list.append(li);
    updateWheel()
    form.reset();
    
});


function getRandomColors(){

    const str = "0123456789ABCDEF";

    let color = "#"

    for(let i = 0; i < 6; i++){
        color += str[Math.floor(Math.random() * 16)];
    } 
   return color;
}




function rotateBtn(){
    const rotateWheel = document.querySelector(".rotate-wheel");
    
    const spins = 5 + Math.random() * 5;
    const dur = 300 + Math.random() * 2000;

    rotateWheel.style.transform = `rotate(${spins * 360}deg)`;
    rotateWheel.style.transition = `transform ${dur}ms`; 

    const winer = users[Math.floor(Math.random() * users.length)];

    setTimeout(() => {
      const modalContent = document.querySelector(".modal-content");
      modalContent.innerHTML = winer.userName;
    }, dur);
}

function updateWheel(){

    const rotateWheel = document.querySelector(".rotate-wheel");
    const spinBtn = document.querySelector(".spin-btn")

    rotateWheel.innerHTML = "";

    const total = users.length;

    const segment = 360 / total;

    users.forEach((user, index) => {
        const elem = document.createElement("div");
        elem.style.backgroundColor = user.color;
        elem.style.transform = `rotate(${segment * index}deg)`; 
        rotateWheel.append(elem);
    })
     
     spinBtn.disabled = !total
   
}








