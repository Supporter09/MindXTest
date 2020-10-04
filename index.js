// let user_input = dom.querySelector("#user_input").value;
let hot_pot = Math.floor(Math.random() * 11); 
console.log(hot_pot)
const btn = document.querySelector("#btn");
let user_input = document.querySelector("#user_input");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    Main()
    

})
function checkHotPot(numCheck) {
    
    if(numCheck == hot_pot){
        alert("CHUC MUNG BAN DA TRUNG SO XO")
        return true
    }else{
        alert("hay thu lai")
        user_input.innerHTML =""
        return false
    }
}

function Main() {
    let numCheck = user_input.value;
    checkHotPot(numCheck)
}