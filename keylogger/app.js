const logDiv=document.getElementById("log"); // Log element is store
const stateDiv=document.getElementById("state"); // stateDiv element is store
const startBtn=document.getElementById("strt-btn"); // start button element is store
const stopBtn=document.getElementById("stop-btn"); // stop button element is store

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown) // element.addeventListener(event,function)
    document.addEventListener("keyup",handleUp)
    startBtn.disabled=true
    stopBtn.disabled=false
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    logDiv.textContent = ""; 
    stateDiv.textContent = "";

    startBtn.disabled=false
    stopBtn.disabled=true

})

function handleDown(e){
    logDiv.textContent=`Key ${e.key} pressed down`
    stateDiv.textContent=`Key is Down`

}

function handleUp(e){
    logDiv.textContent=`Key ${e.key} pressed up`
    stateDiv.textContent=`Key is up`  
}