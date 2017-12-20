//business logic

function Items(items){
  this.items=items;
}

function Door(){
  this.door="Door"
}

Items.prototype.checkItems=function(){
  if(this.items.toString().match(/(?=.*key)/)){
    document.getElementById('room1').src= "img/room1_opendoor.png";
    document.getElementById("door").onclick=function(){
      location.href = "roomtwo.html";
    }
  } else {
    alert("It won't budge, it is locked!" )
  }
}

// Items.prototype.checkItems=function(){
//   if(this.items.toString().match(/(?=.*)/)){
//     document.getElementById('room1').src= "img/room1_opendoor.png";
//     document.getElementById("door").onclick=function(){
//       location.href = "roomtwo.html";
//     }
//   } else {
//     alert("It won't budge, it is locked!" )
//   }
// }



$(document).ready(function(){
  var itemArray = [];
  $("#key1").click(function(){
    var key = "key"
    $("#key1").fadeOut();
    itemArray.push(key);
    console.log(itemArray);
    $("#inventory").append("<li>Key</li>");
  });
  var items = new Items(itemArray);

  $("#door").click(function(){
    items.checkItems();
  });

  $("#firstLevelButton").click(function(){
    $("#level1Img").fadeOut();
  });

});
