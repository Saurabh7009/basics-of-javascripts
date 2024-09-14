let element=document.getElementById('new');

let fd=new Date(2025, 0, 1, 0, 0, 0, 0);

console.log(fd)
function diffdate(){

    let td=new Date() // everytime we take new date for the calculation

    let newdate=fd-td;
    console.log(newdate)
    
    let days=Math.floor(newdate/(24*60*60*1000))
    console.log(days)

    let hours=Math.floor((newdate % (24*60*60*1000))/(60*60*1000)) // newdate % (24*60*60*1000)== remainder will be in millisecons (remainder)/(hour format in milliseconds)== 24 hrs format
    console.log(hours)

    let minutes=Math.floor((newdate%(60*60*1000))/(60*1000)) //newdate%(60*60*1000)--60minutes == remander millsecondes in terms of minutes /1min in millseconds
    let seconds=Math.floor((newdate%(60*1000))/(1000)) //newdate%(60*1000)--60seconds == remander millsecondes in terms of seconds /1sec in millseconds

    element.innerHTML=`${days}days,${hours}hours,${minutes}minutes,${seconds}seconds`

    


    
}
setInterval(diffdate,1000) // set it to 1 second
diffdate()



