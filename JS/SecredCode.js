let x, y;
x = 0; y = 0;
$(".b").css("display", "none")
function destroyStyles(){
  document.head.innerHTML = ""
}
function spawnBlock(){
  console.log("Рухатися за допомогою w, s, a, d")
  $(".b").css("display", "block")
  document.onkeypress = function(event){
    if (event.key == "w" || event.key == "W" && x != innerHeight && x != innerWidth){
      y-= 10;
      $(".b").css("transform", "translate("+x+"px, "+y+"px)")
    }
    if (event.key == "s" || event.key == "S"){
      y+= 10;
      $(".b").css("transform", "translate("+x+"px, "+y+"px)")
    }
    if (event.key == "d" || event.key == "D"){
      x+= 10;
      $(".b").css("transform", "translate("+x+"px, "+y+"px)")
    }
    if (event.key == "a" || event.key == "A"){
      x-= 10;
      $(".b").css("transform", "translate("+x+"px, "+y+"px)")
    }
  };
}
