var hitPoints=0;;
var strength=0;;
var name="";
var gold=0;


function Actor(name, hitpoints, strength){
  this.name = name;
  this.hitpoints = hitpoints;
  this.strength = strength;
};

var toString=function(){
  return name + "hit points:" + hitPoints + " strength: " + strength;
};

var strike=function(Actor, opponent){
  var ourThrow = throwDie();
  var oppThrow = opponent.throwDie();
  if(ourthrow > oppThrow){
    $("#message").text("Good Hit!" + opponent.getName() + " loses a hit point");
  }else{
    $("#message").text(opponent.getName() + " ducks and is not hurt.");
  }
};

var getName=function(){
  return name;
};

var takeHit=function(){
  hitPoints-=points;
};

var getHitpoints=function(){
  return hitPoints;
}

var throwDie=function(){
  return Math.floor((Math.random() * strength) + 1);
}
