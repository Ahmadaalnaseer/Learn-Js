function start(){

let timeleft = 0;

let process = document.getElementById("Activty");

    process.textContent= "Start Soon ...";


let koko = setTimeout(()=>{

    process.textContent= "Running ...";

    let CountDown = setInterval(()=>{
     timeleft++;
     process.textContent = "Running ..." + timeleft;

     if(timeleft=== 6){
        clearInterval(CountDown);
        
        process.textContent= "Prosess Complete ! ..";
        

}
},1000);

},2000);






};