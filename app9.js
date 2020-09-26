let endday;
let stdate=document.getElementById('start');
let enddate=document.getElementById('end');
        
         
        
document.getElementById('countdays').addEventListener('click',function(){
    function countdown(){
        let stday=new Date(stdate.value);
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

})
function todays(){
    
     let td=new Date();
     let month=td.getMonth()+1;
     let monthstring=month<10?'0'+month:month;
     endday=td.getFullYear()+'-'+monthstring+'-'+td.getDate();
     enddate.value=endday;
     
    
}
