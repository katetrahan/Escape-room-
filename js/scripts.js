//business logic

function Items(items){
  this.items=items;
}

function Door(){
  this.door="Door"
}

Items.prototype.checkItems=function(){
  if(this.items.toString().match(/(?=.*key)/)){
    alert("Proceed!")
  } else {
    alert("It won't budge, it is locked!")
  }
}

$(document).ready(function(){
  var itemArray = [];
  $("#key1").click(function(){
    var key = "key"
    $("#key1").fadeOut();
    itemArray.push(key);
    console.log(itemArray);
  });
  var items = new Items(itemArray);

  $("#key1").click(function(){
    $("#key1").fadeOut();
  });

  Door.onClick = items.checkItems();

});
