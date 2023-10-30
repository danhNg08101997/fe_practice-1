const btnsEl = document.querySelectorAll("button")
const inputFieldEl = document.getElementById("result")

for(let i = 0; i < btnsEl.length; i++){
btnsEl[i].addEventListener("click", () => {
    const btnValue = btnsEl[i].textContent;
    if(btnValue === "C"){
        clearResult()
    }else if (btnValue === "="){
        calculateResult()
    }else{
        appendValue(btnValue)
    }
})
}

function clearResult() {
    inputFieldEl.value = ""
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(btnValue){
    inputFieldEl.value += btnValue
}