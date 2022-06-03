const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const circles = Array.from(document.querySelectorAll(".circle"));
const progress_steps = document.querySelector(".progress_steps");
// console.log(circles);


let currentActive =1;

next.addEventListener("click",function(){
  currentActive++;
  if(currentActive > circles.length){
    currentActive = circles.length;
  }
  console.log(currentActive);
  update();
});
previous.addEventListener("click",function(){
  currentActive--;
  if(currentActive < 1){
    currentActive = 1;
  }
  update();
});

function update(){
  circles.forEach((value,index) =>{

    console.log(value);
    console.log(index);
  if(index < currentActive){
    value.classList.add("active");
  }
  else{
    value.classList.remove("active");
  }
  });

  const actives = document.querySelectorAll(".active");
  console.log(actives);
  progress_steps.style.width = (actives.length-1)/(circles.length-1)*100 +"%";

  if(currentActive===1){
    previous.disabled = true;
  }
  else if(currentActive===4){
    next.disabled = true;
  }
  else{
    previous.disabled = false;
    next.disabled = false;
  }
}

