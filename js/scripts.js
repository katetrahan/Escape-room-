//business logic

function Items(items){
  this.items=items;
}

function Door(){
  this.door="Door"
}
//function to get to level 2
Items.prototype.checkItemsLevelOne=function(){
  if(this.items.toString().match(/(?=.*key)/)){
    document.getElementById('room1').src= "img/room1_opendoor.png";
    document.getElementById("door").onclick=function(){
      location.href = "roomtwo.html";
    }
  } else {
    alert("It won't budge, it is locked!" )
  }
}
//function to get to level 3
Items.prototype.checkItemsLevelTwo=function(){
  if(this.items.toString().match(/(?=.*book)(?=.*glasses)/)){
    document.getElementById('room2').src= "room2/saturn.png";
    document.getElementById("saturn").onclick=function(){
      location.href = "roomthree.html";
    }
  } else {
    alert("Can't Travel to Saturn!")
  }
}

//user interface
//function to get to level 2
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
    items.checkItemsLevelOne();
  });

  $("#firstLevelButton").click(function(){
    $("#level1Img").fadeOut();
  });

  //function to get to level 2

// $(document).ready(function(){
//   var itemArray = [];
  $("#r2_book").click(function(){
    var book = "book"
    $("#r2_book").fadeOut();
    itemArray.push(book);
    console.log(itemArray);
    $("#inventory").append("<li>Book</li>");
  });
  // var items = new Items(itemArray);

  $("#r2-saturn").click(function(){
    items.checkItemsLevelOne();
  });

  $("#secondLevelButton").click(function(){
    $("#level2Img").fadeOut();
  });
});


  // $("#thirdLevelButton").click(function(){
  //   $("#level3Img").fadeOut();
  // });
  //
  // $("#fourthLevelButton").click(function(){
  //   $("#level3Img").fadeOut();
  // });
