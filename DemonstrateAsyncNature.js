console.log("Welcome To Ajax Practice Problems");
function showTime(){
    let date=new Date();
    return date.getHours()+"Hrs "+date.getMinutes()+"Min "+date.getSeconds()+"Sec";
}

function showSessionExpire(){
    console.log("Activity-B : Session Exired at "+showTime());
}

console.log("Activity-A : Triggering Activity-B at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity-A : Triggering Activity-B at "+showTime()+" Will execute after 5 sec.");
