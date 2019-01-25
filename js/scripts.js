// beepBoop: takes in number (as a string), outputs a string based on the input.
// If the input contains a 3, it becomes HAL-9000. Else if it contains a 2, it
// boops. Else if it contains a 1, it beeps. Else, it outputs the number line
// up to that input number.
function beepBoop(numIn) {
  result = "";
  for (var i = 0; i < (parseInt(numIn) + 1); i++) {
    if (i.toString().split("").includes("3")) {
      if (name == "") {
        name = "Dave";
      }
      arrOut.push("I'm sorry " + name + ". I'm afraid I can't do that.");
    } else if (i.toString().split("").includes("2")) {
      arrOut.push("Boop!");
    } else if (i.toString().split("").includes("1")) {
      arrOut.push("Beep!");
    } else {
      arrOut.push(i);
    }

  }
  result = arrOut.join(", ");
  return result;
}

function clear() {
  name = "";
  result = "";
  arrOut = [];
  userIn = "";
  return;
}

var name = "";
var result = "";
var arrOut = [];
var userIn = "";

$(document).ready(function() {
  $("#start").click(function() {
    clear();
    $("#start").fadeOut();
    setTimeout(function(){
      $("#nameIn").fadeIn();
    }, 400);
  });
  $("#nameIn").submit(function(event) {
    name = $("#userName").val();
    $("#nameIn").fadeOut();
    setTimeout(function(){
      $("#numIn").fadeIn();
    }, 400);
    event.preventDefault();
  });
  $("#numIn").submit(function(event) {
    userIn = $("#numBlank").val();
    $("#numIn").fadeOut();
    setTimeout(function(){
      $("#result").fadeIn();
    }, 400);
    setTimeout(function(){
      $("#restart").fadeIn();
    }, 400);
    console.log(userIn);
    $("#result").text(beepBoop(userIn));
    event.preventDefault();
  });
  $("#restart").click(function() {
    $("#result").fadeOut();
    $("#restart").fadeOut();
    setTimeout(function(){
      $("#start").fadeIn();
    }, 400);
  });

});
