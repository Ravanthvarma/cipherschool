let hour=0;
let min=0;
let sec=0;
let milisec=0;

let timerStatus=false;



 function start(){
   timerStatus=true;
   stopwatch();
};
 function stop() {
    timerStatus=false;
};
    function reset(){
    timerStatus=false;
    hour=0;
    min=0;
    sec=0;
    milisec=0;
    

    document.getElementById("milisec").innerHTML="00";
      document.getElementById("sec").innerHTML="00";
      document.getElementById("min").innerHTML="00";
      document.getElementById("hour").innerHTML="00";


};

  function stopwatch(){
    if(timerStatus == true){

      milisec= milisec +1;
      //console.log(milisec);
      if(milisec == 100){
          sec=sec+1;
          console.log(sec);
          milisec=0;
      } 
      if(sec == 60){
          min= min+1;
          sec=0;
      }
      if(min == 60){
        hour= hour+1;
        min=0;
        sec=0;
    }
    let stringHour = hour;
    let stringMin = min;
    let stringSec = sec;
    let stringMilisec = milisec;
    if(milisec<10){
        stringMilisec= "0" + stringMilisec;
    }
    if(sec<10){
        stringsec= "0" +stringSec;
    }
    if(min<10){
        stringMin= "0" + stringMin;
    }
    if(hour<10){
        stringHour= "0"  + stringHour
        }

    
      document.getElementById("milisec").innerHTML=stringMilisec;
      document.getElementById("sec").innerHTML=stringsec;
      document.getElementById("min").innerHTML=stringMin;
      document.getElementById("hour").innerHTML=stringHour;
                                  
      setInterval("stopwatch()",100)
    }

}
