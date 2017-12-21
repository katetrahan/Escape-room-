//business logic

function Items(items){
  this.items=items;
}

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
Items.prototype.checkItemsLevelTwo=function(){
  if(this.items.toString().match(/(?=.*book)(?=.*specs)/)){
      location.href = "roomthree.html";
  } else {
    alert("Can't Travel to Saturn!")
  }
}
Items.prototype.checkItemsLevelThree=function(){
  if(this.items.toString().match(/(?=.*cactus)(?=.*pineapple)(?=.*pizza)/)){
    document.getElementById("bunny").onclick=function(){
      location.href = "roomfour.html";
    }
  } else {
    alert("Can't feed the bunny!")
  }
}
Items.prototype.checkItemsLevelFour=function(){
  if(document.getElementById('r4_circle').src= "room4/circ_12.png"){
      location.href = "roomfive.html";
  } else {
    alert("Can't open the door!")

  }
}

//function to get to level (5)



//user interface
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

  $(".skiplevel").click(function(){
    alert("Sneaky snake you can't skip a level!");
  });

  //function to get to level 2

// $(document).ready(function(){
//   var itemArray = [];
  $("#r2_book").click(function(){
    var book = "book"
    $("#r2_book").css("opacity", "0");
    itemArray.push(book);
    console.log(itemArray);
    $("#inventory").append("<li>Book</li>");
  });
  // $("#r2-saturn").click(function(){
  //  items.checkItemsLevelTwo();
  //  });

  $("#r2_specs").click(function(){
    var specs = "specs"
    $("#r2_specs").css("opacity", "0");
    itemArray.push(specs);
    console.log(itemArray);
    $("#inventory").append("<li>Bifocals</li>");
  });

  $("#r2_saturn").click(function(){
    items.checkItemsLevelTwo();
  });


  $("#secondLevelButton").click(function(){
    $("#level2Img").fadeOut();
  });

  $("#r3_cactus").click(function(){
    var cactus = "cactus"
    $("#r3_cactus").css("opacity", "0");
    itemArray.push(cactus);
    console.log(itemArray);
    $("#inventory").append("<li>Cactus</li>");
  });

  $("#r3_pizza").click(function(){
    var pizza = "pizza"
    $("#r3_pizza").css("opacity", "0");
    itemArray.push(pizza);
    console.log(itemArray);
    $("#inventory").append("<li>Pizza</li>");
  });

  $("#r3_pineapple").click(function(){
    var pineapple = "pineapple"
    $("#r3_pineapple").css("opacity", "0");
    itemArray.push(pineapple);
    console.log(itemArray);
    $("#inventory").append("<li>Pineapple</li>");
  });


    $("#bunny").click(function(){ // click on bunny to get out
      items.checkItemsLevelThree ();
  });

    $("#thirdLevelButton").click(function(){
    $("#level3Img").fadeOut();
  });







  $("#fourthLevelButton").click(function(){
  $("#level4Img").fadeOut();

 });

 });



  //
  // $("#fourthLevelButton").click(function(){
  //   $("#level3Img").fadeOut();
  // });
  $("#bunny").click(function(){ // click on bunny to get out
   items.checkItemsLevelThree ();
   });

  var newClockPosition = 0;
  $('#r4_circle').click(function(){
    var clockPosition = ["room4/circ_6.png","room4/circ_9.png","room4/circ_12.png","room4/circ_3.png"];
    document.getElementById('r4_circle').src= clockPosition[newClockPosition];
    newClockPosition++;
    if(newClockPosition===4){
      newClockPosition = 0;
    }
  });
  $("#r4_door").click(function(){ // click on bunny to get out
   items.checkItemsLevelFour ();
   });
});

