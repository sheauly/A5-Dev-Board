const changeColor = ["#7C93C3", "#E0E5B6", "purple", "slate","#EFB6C8","#E5D9F2", "#F2E2B1", "#4cb7ba"];
let index = 0;

document.getElementById("button-color").addEventListener("click", function () {
    document.getElementById("body").style.background = changeColor[index];
    index = (index + 1) % changeColor.length
});

function updateTask () {
    let taskAssigned = document.getElementById("task-assigned").innerText;
    let task = parseInt(taskAssigned);
    let completedTaskBtn = document.getElementById("Completed").innerText;
    let completed = parseInt(completedTaskBtn)
    if(task>0) {
        task = task-1
        completed = completed+1;
        alert("Board Update Successfully")
    }
    
    document.getElementById("task-assigned").innerText = task
    document.getElementById("Completed").innerText = completed 
    if(task===0){
        alert("congrates..!! You Have Compelete All Task")
    }
}

function addToCartItems(butttonId, cardId) {
    const button = document.getElementById(butttonId);
    button.addEventListener("click", function () {
        const times = new Date().toLocaleTimeString();
        const card1 = document.getElementById(cardId);
        const newElement = document.createElement("card-cointainer");
        updateTask()
        newElement.textContent = `You have Complete The Task ${card1.textContent} at : ${times}`;
        newElement.classList.add(
            "bg-[#F4F7FF]",   
            "p-3",           
            "rounded-lg",    
            "border"        
        );
        document.getElementById("card-cointainer").appendChild(newElement);
        document.getElementById(butttonId).disabled = true;
    })
}
addToCartItems("item-1", "cart-A");
addToCartItems("item-2", "cart-B");
addToCartItems("item-3", "cart-C");
addToCartItems("item-4", "cart-D");
addToCartItems("item-5", "cart-E");
addToCartItems("item-6", "cart-F");

document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("card-cointainer").innerHTML = "";
})
const times = new Date();
const optionsTimes = { weekday: "long", hour: "numeric", minute: "numeric", second: "numeric", hour12: true };
const now = times.toLocaleString("en-US", options)
document.getElementById("time").innerText = now