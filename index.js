var speed;
var mini = document.getElementById("mini"),
    button = document.getElementById("button"),
    form = document.getElementById("form"),
    timeOpt = document.getElementById("timeOpt"),
    speedOpt = document.getElementById("speedOpt"),
    squareOpt = document.getElementById("squareOpt"),
    fieldOpt = document.getElementById("fieldOpt"),
    flag = true,
    min = 0,
    divResult = document.getElementById("result"),
    main = document.getElementById("main"),
    numberOfCycles = 600,
    counter1 = 0,
    start = document.getElementById("start"),
    option = document.getElementById("option"),
    h1 = document.createElement("h1"),
    h2 = document.createElement("h2");

    mini.style.borderRadius = "5px";
    divResult.classList.add("none");
    main.classList.add("none");
    form.classList.add("none");
    button.classList.add("none");

function startGame(s) {
  if(s === 0){
    numberOfCycles = i;
  }
  var delay = speed,
      i = 0;

  var startTimer = function () {
    var max = +fieldOpt.value - +squareOpt.value,
        randomL = min + Math.random() * (max - min),
        randomT = min + Math.random() * (max - min);
        console.log(max);
    if(!flag){
      clearTimeout(timer);
      setTimeout(startTimer,delay/2);
      i++;
      return false;
    }

    if(i < numberOfCycles){
      miniStyle(randomL,randomT);
      setTimeout(startTimer,delay);
    }else{
      main.classList.add("none");
      mini.classList.add("none");
      h1.classList.add("none");
      h2.classList.add("none");
      drawFinishList();
    }
    i++;
  }
  if(s === undefined){
    var timer = setTimeout(startTimer,4);
  }
}



function speedSelection() {
  console.log(speedOpt);
  switch (speedOpt.value) {
    case "1":
      return 700;
      break;
    case "2":
      return 860;
      break;
    case "3":
      return 1020;
      break;
    case "4":
     return 1180;
     break;
    case "5":
      return 1340;
      break;
    case "6":
      return 1500;
      break;
    case "7":
      return 1660;
      break;
    case "8":
      return 1820;
      break;
    case "9":
      return 1980;
      break;
    default:
      return 2500;
  }
}

function timeTimer() {
    var timeSelect = timeOpt.value;
  for(var j = 0;timeSelect >= 60;i++){
  timeSelect = timeSelect - 60;
    j++;
  }
  var delay = 1000,
      i = 0;
      minute = j,
      second = timeSelect;

  var startTimer = function () {
    draw(minute,second);
    if(second === 0&minute === 0){
      startGame(second);
    }
    if(i < numberOfCycles){
      if(second === 0){
        minute--;
        second = 60;
      }
      second--;
      setTimeout(startTimer,delay);
    }
    i++;
  }
  var timer = setTimeout(startTimer,4);
}

function draw(m,s){
  var div = document.getElementById("div");

  div.innerHTML = "";
  var addSumbols = "00000";

  h1.classList.add("times")
  h2.classList.add("points")
  if(s < 10){
  h1.innerText = "0"+ m + ":" + "0" + s;
}else{
    h1.innerText = "0"+ m + ":" + s;
}
 var sum = addSumbols + counter1;
if(sum.length > 6){
  h2.innerText = sum.slice(-6);
}else{
  h2.innerText = sum;
}
    div.appendChild(h2);
    div.appendChild(h1);
}

function drawFinishList() {

  divResult.classList.remove("none")
  divResult.innerHTML = "";
  var p = document.createElement("p");
    p.innerText = "Congratulations, you typed " + counter1 + " points";
    divResult.appendChild(p);
}

function counter() {
  counter1 += 5;
  return counter1;

}

function miniStyle(rl,rt) {
  mini.classList.remove("none");
  mini.style.marginLeft = rl + "px";
  mini.style.marginTop = rt + "px";
  mini.style.backgroundColor = "";
  mini.style.borderRadius = "5px";
}

button.addEventListener("click",function() {
  startGame();
  timeTimer();
  speedSelection();
  button.classList.add("none");
})

mini.addEventListener("click",function () {
  mini.style.backgroundColor = "red";
  mini.style.borderRadius = "25px";
  counter();
  flag = false;
});

mini.addEventListener("transitionend",function(){
  mini.classList.add("none");
  flag = true;
});

start.addEventListener("click",function() {
  main.classList.remove("none");
  main.style.width = fieldOpt.value + "px";
  main.style.height = fieldOpt.value + "px";
  mini.style.width = squareOpt.value + "px";
  mini.style.height = squareOpt.value + "px";
   speed = speedSelection();
   option.classList.add("none");
   start.classList.add("none");
   form.classList.add("none");
   button.classList.remove("none");

})

option.addEventListener("click",function(){
  form.classList.remove("none");
})
