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
    alert("It won't budge, it is locked")
  }
}

$(document).ready(function(){



  Door.onClick = checkItems();

});
