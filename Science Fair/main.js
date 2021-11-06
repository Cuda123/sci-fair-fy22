const canvas = document.getElementById("ctx");

canvas.width = window.innerHeight / 1.1;

canvas.height = window.innerHeight / 1.1;

const ctx = canvas.getContext("2d");

var month = document.getElementById("month");

var grassColor = document.getElementById("ctx");


var startBut = document.getElementById("start")

var cowAmount;

var acreAmount;


var startSim = false;

var cowsIn = document.getElementById("cows")

var acresIn = document.getElementById("acres")

var grassTime;

startBut.addEventListener('click', function() {
  startSim = true;

  cowAmount = cowsIn.value
  acreAmount = acresIn.value

  grassTime = (cowAmount * 1.7) / (acreAmount);
});

console.log(cowAmount)

var num = 0;
var tick = 0;



var grassHealth1 = 0;





var grassHealth2 = 0;






var grassHealth3 = 0;





var grassHealth4 = 0;


var x  = canvas.width / 4 - 50;
var y = canvas.height / 4 - 50;


function drawCow() {
  ctx.fillStyle = 'black'
  ctx.font = "100px monospace"
  ctx.fillText(cowAmount, x, y)


 
}



setInterval(function() {
  
  if (startSim){
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  if (x < canvas.width / 2 && y < canvas.height / 2){
    grassHealth1 += grassTime
    if (grassHealth4 > 0){
      grassHealth4 -= grassTime
    }
  }
  else if (x > canvas.width / 2 && y < canvas.height / 2) {
    grassHealth1 -= grassTime
    grassHealth2 += grassTime;
  }
  else if (x > canvas.width / 2 && y > canvas.height / 2) {
    grassHealth2 -= grassTime
    grassHealth3 += grassTime;
  }
  else if (x < canvas.width / 2 && y > canvas.height / 2) {
    grassHealth3 -= grassTime
    grassHealth4 += grassTime;
  }

  var spd = 30;
  if (grassHealth1 >= 240){
    x += spd
  }

  if (grassHealth2 >= 240){
    y += spd
  }

  if (grassHealth3 >= 240){
    x -= spd
  }

  if (grassHealth4 >= 240){
    y -= spd
  }

  var bgColor_1 = 'rgb( '+ grassHealth1 + ', 191, 33)';
  
  var bgColor_2 = 'rgb( '+ grassHealth2 + ', 191, 33)';
  
  var bgColor_3 = 'rgb( '+ grassHealth3 + ', 191, 33)';
  
  var bgColor_4 = 'rgb( '+ grassHealth4 + ', 191, 33)';
  
  // quadrants
  
  ctx.fillStyle = bgColor_1;
  
  // 0.0
  ctx.fillRect(0, 0, canvas.width / 2, canvas.height/ 2);
  
  ctx.fillStyle = bgColor_2;
  
  // 1.0
  ctx.fillRect(canvas.width / 2, 0, canvas.width / 2, canvas.height / 2);
  
  
  ctx.fillStyle = bgColor_3;
  
  // 1.1
  ctx.fillRect(canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);
  
  ctx.fillStyle = bgColor_4;
  
  // 0.1
  ctx.fillRect(0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
  


 

  drawCow();
  
  tick++;
  
 
  if (tick >= 25){
    tick = 0;
    num++;
  }
  
  month.innerHTML = "Month: " + num;


  }
}, 40);

