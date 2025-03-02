const changeColor = ["#7C93C3", "#E0E5B6", "purple", "slate","#EFB6C8","#E5D9F2", "#F2E2B1", "#4cb7ba"];
let index = 0;

document.getElementById("button-color").addEventListener("click", function () {
    document.getElementById("body").style.background = changeColor[index];
    index = (index + 1) % changeColor.length
});

function updateTask () {
    let taskAssigned = document.getElementById("task-assigned").innerText;
    let task = parseInt(taskAssigned);
    let completedTask = document.getElementById("Completed-task").innerText;
    let complete = parseInt(completedTask)
    if(task>0) {
        task = task-1
        complete = complete+1;
        alert("Board Update Successfully")
    }
    
    document.getElementById("task-assigned").innerText = task
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
document.getElementById("time").innerText = now