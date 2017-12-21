var playerHealth=100;
var bossHealth=100;
var strength=15;
var name="";

var throwDie=function(){
  var die = Math.floor((Math.random() * strength ) + 1);
  return die
}

var strike=function(){
  var playerThrow = throwDie();
  var bossThrow = throwDie();
  console.log(playerThrow)
  if(playerThrow > bossThrow){
    $("#msg").text("Good Hit!, Boss loses: " + playerThrow + "health");
    bossHealth-=playerThrow;
  }else if(playerThrow < bossThrow){
    $("#msg").text( "Boss ducks and is not hurt, the boss fights back");
    playerHealth-=bossThrow;
  }
  if(bossHealth<=0 && playerHealth > 0){
    $("#msg").text( "You have beat the boss, congradulations!");
    alert("You have beat the boss, congradulations!");
    location.href = "win.html"
  } else if(playerHealth<=0 && bossHealth > 0){
    $("#msg").text( "You have died");
    alert("You have died")
  }
};

$(document).ready(function(){
  $("#fight").click(function(){
    strike();
  });
});
