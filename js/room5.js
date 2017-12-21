var itemArray = [];
var health = 100;


var flashWhite = function() {
  $('.back').css("background-color","#F2F2F2");
  setTimeout(function() {
    $('.back').css("background-color","#000000")},100);
    if (itemArray.length ===  5) {
      $(".room5").fadeOut(1000);
      setTimeout(function() { 
        location.href = "win.html"
        },1500);
    } else {
      console.log("not yet");
    }
}
var flashRed = function() {
    $('.back').css("background-color","#FF0000");
    setTimeout(function() {
      $('.back').css("background-color","#000000")},100);
    health -= 10;
    $('.progress-bar').css("width", health + "%");
    if (health <= 0) {
     console.log("you died");
     $(".room5").fadeOut(1000);
     setTimeout(function() {
       $(".dead").fadeIn(500)},1500);
       setTimeout(function() {
       location.href = "index.html"},5000);
    } else {}
}
var loseHealth = function(){
    setInterval(function(){flashRed()},5000);
}

$(document).ready(function(){
  $(".intro").fadeIn(3000);
  $(".intro").click(function(){
    $(".intro").fadeOut(1000);
    setTimeout(function() {$(".room5").fadeIn(3000)},1000);
    setTimeout(loseHealth(),9000);
  });

  $('#rabbit').one("click", function(){
    var key = "key";
    itemArray.push(key);
    console.log(itemArray);
    flashWhite();
  });
  $('#specs').one("click", function(){
    var key = "specs";
    itemArray.push(key);
    console.log(itemArray);
    flashWhite();
  });
  $('#saturn').one("click", function(){
    var key = "saturn";
    itemArray.push(key);
    console.log(itemArray);
    flashWhite();
  });
  $('#alien').one("click", function(){
    var key = "alien";
    itemArray.push(key);
    console.log(itemArray);
    flashWhite();
  });
  $('#key').one("click", function(){
    var key = "key";
    itemArray.push(key);
    console.log(itemArray);
    flashWhite();
  });
  $('.room5').click(function(){
    flashRed();
  });

});
