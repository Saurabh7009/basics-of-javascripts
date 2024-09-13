start logging keypresses button is pressed 

the event is triggered which is

startBtn.addEventListener("click",()=>{    //element.addeventListener(event,function) here the element is startBtn
    document.addEventListener("keydown",handleDown) // 
    document.addEventListener("keyup",handleUp)
    startBtn.disabled=true
    stopBtn.disabled=false
})

//now ---here element is document

and document.addEventListener("keydown,handleDown)
     document.addEventListener("keyup",handleUp)

here-- document refers to entire document is the web page (or DOM), but the events (keydown, keyup) are triggered by actions on the keyboard. The document is listening for those keyboard events.


//startBtn.disabled=true -- when click the startbtn it should be disabled
//stopBtn.disabled=false-- when click the startbtn , stopbtn should be enabled


------------------------------------------------------------------------------------------------------------------------------

Stop Button is Pressed

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    logDiv.textContent = ""; 
    stateDiv.textContent = "";

    startBtn.disabled=false
    stopBtn.disabled=true})

    //Differences for the Stp button is
--------------------------------------------------------------------------------------------------------------------------
    we remove the event Listner 
    --document.removeEventListener 

    so no action will be performed when the keyboard button is clicked
--------------------------------------------------------------------------------------------------------------------------
    and also we dont want to display the text content over here 

    logDiv.textContent = ""; 
    stateDiv.textContent = "";



