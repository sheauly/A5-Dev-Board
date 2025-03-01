const changeColor = ["green", "blue", "#3752FD", "#63f0f4", "#4cb7ba", "#4ca8ba"];
let index = 0;

document.getElementById("theme-btn").addEventListener("click", function () {
    document.getElementById("body").style.background = changeColor[index];
    index = (index + 1) % changeColor.length
});

function updateTask () {
    let taskNum = document.getElementById("task-num").innerText;
    let task = parseInt(taskNum);
    let completedTask = document.getElementById("Completed-task").innerText;
    let complete = parseInt(completedTask)
    if(task>0) {
        task = task-1
        complete = complete+1;
        alert("Bord Update Successfully")
    }
    
    document.getElementById("task-num").innerText = task
    document.getElementById("Completed-task").innerText = complete
    if(task===0){
        alert("congrates..!! You Have Compelete All Task")
    }
}

function addCartItems(butttonId, cartId) {
    const button = document.getElementById(butttonId);
    button.addEventListener("click", function () {
        const times = new Date().toLocaleTimeString();
        const cart1 = document.getElementById(cartId);
        const newElement = document.createElement("cart-cointainer");
        updateTask()
        newElement.textContent = `You have Complete The Task ${cart1.textContent} at : ${times}`;
        newElement.classList.add(
            "bg-[#F4F7FF]",   
            "p-3",           
            "rounded-lg",    
            "border"        
              
        );
        document.getElementById("cart-cointainer").appendChild(newElement);
        document.getElementById(butttonId).disabled = true;
        
        
    })
}


addCartItems("item-1", "cart-1");
addCartItems("item-2", "cart-2");
addCartItems("item-3", "cart-3");
addCartItems("item-4", "cart-4");
addCartItems("item-5", "cart-5");
addCartItems("item-6", "cart-6");





document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("cart-cointainer").innerHTML = "";
})


const times = new Date();
const options = { weekday: "long", hour: "numeric", minute: "numeric", second: "numeric", hour12: true };
const now = times.toLocaleString("en-US", options)
document.getElementById("real-time").innerText = now