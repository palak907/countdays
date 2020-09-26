let endday;
let stdate=document.getElementById('start').value;
        let enddate=document.getElementById('end');
        let stday=new Date(stdate);
         
        
document.getElementById('countdays').addEventListener('click',function(){
    function countdown(){
        console.log(enddate.value)
        let val=new Date(enddate.value);
        let tsec=new Date(val-stday)/1000;
        let days=Math.floor(tsec/3600/24);
        let hours=Math.floor((tsec/3600)%24);
        let min=Math.floor((tsec/60)%60);
        let sec=Math.floor(tsec%60);
        let count=document.getElementById('count');
        count.innerHTML=format(days)+"days";
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
    setInterval(countdown,1000);
})
function todays(){
    
     let td=new Date();
     fdate=td.getFullYear()+'-'+td.getMonth()+'-'+td.getDate();
     endday=fdate;
     console.log(endday)
     endday=enddate.value;
     console.log(enddate.value)
    
}
