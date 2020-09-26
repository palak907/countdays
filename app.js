function countdown(){
let newyear='1 Jan 2021';
let today=new Date();
let nyear=new Date(newyear);
let tsec=new Date(nyear-today)/1000;
let days=Math.floor(tsec/3600/24);
let hours=Math.floor((tsec/3600)%24);
let min=Math.floor((tsec/60)%60);
let sec=Math.floor(tsec%60);
let count=document.getElementById('count');
count.innerHTML=format(days)+"days:"+format(hours)+"hours:"+format(min)+"minutes:"+format(sec)+"seconds";
}
function format(time){
    if(time<10){
        return `0${time}`
    }
    else{
        return time;
    }
}
countdown();
setInterval(countdown,1000)