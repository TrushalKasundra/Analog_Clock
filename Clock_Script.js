setInterval(()=>{ let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    let newhour = "  ";
    if(hour<=12){
      newhour +=hour;
    }
    else{
      newhour+= hour-12;
    }
    let hours =30*newhour+minute/2;
    let minutes = 6*minute;
    let seconds = 6*second;


document.getElementById("hour").style.transform = `rotate(${hours}deg)`;
document.getElementById("minute").style.transform = `rotate(${minutes}deg)`;
document.getElementById("second").style.transform = `rotate(${seconds}deg)`;



},1000);