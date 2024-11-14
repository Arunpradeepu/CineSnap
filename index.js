let t = 1;


setInterval(() => {
  console.log("Value of t:", t);

  document.querySelectorAll("#one, #two, #three, #four, #five").forEach(el => {
    el.style.display = "none";
  });

  document.querySelectorAll("#cir1, #cir2, #cir3, #cir4, #cir5").forEach(el => {
    el.style.backgroundColor = "";  
  });

  if (t === 1) {
    document.querySelector("#one").style.display = "block";
    document.querySelector("#cir1").style.backgroundColor="red";
    
  } else if (t === 2) {
    document.querySelector("#two").style.display = "block";
    document.querySelector("#cir2").style.backgroundColor="red";

  } else if (t === 3) {
    document.querySelector("#three").style.display = "block";
    document.querySelector("#cir3").style.backgroundColor="red";

  } else if (t === 4) {
    document.querySelector("#four").style.display = "block";
    document.querySelector("#cir4").style.backgroundColor="red";

  } else {
    document.querySelector("#five").style.display = "block";
    document.querySelector("#cir5").style.backgroundColor="red";

  }

  t = (t < 5) ? t + 1 : 1;
}, 3000); 

function change1(){
  t=1;
}
function change2(){
  t=2;
}
function change3(){
  t=3;
}
function change4(){
  t=4;
}
function change5(){
  t=5;
}
