
const long1 = document.getElementById('long1');
const lat1 = document.getElementById('lat1');
const long2 = document.getElementById('long2');
const lat2 = document.getElementById('lat2');


//with fetch only 
function getData() {
fetch('http://api.open-notify.org/iss-now.json')
      .then(res => res.json())
      .then(function(data){
         const {iss_position:{latitude,longitude}}=data;
         lat1.value=latitude;
         long1.value=longitude;
      })
}

setInterval(getData,2000);


//with promise
function getData2(){
 return new Promise((res,rej)=>{
    res(fetch('http://api.open-notify.org/iss-now.json'))
 })
}

function run(){
   getData2()
   .then(res=>res.json())
   .then(function(data){
      const {iss_position:{latitude,longitude}}=data;
      lat2.value=latitude;
      long2.value=longitude;
   })
   setTimeout(run,2000)
}

run()