// beepBoop: takes in number (as a string), outputs a string based on the input.
// If the input contains a 3, it becomes HAL-9000. Else if it contains a 2, it
// boops. Else if it contains a 1, it beeps. Else, it outputs the number line
// up to that input number.
function beepBoop(numIn) {
  result = "";
  if (name == "") {
    name = "Dave";
  }
  if (parseInt(numIn) == 9000) {
    return "My God, it's full of stars."
  } else if (parseInt(numIn) > 30) {
    return "This mission is too important for me to allow you to jeopardize it.";
  } else if (parseInt(numIn) <= 0) {
    return "Stop, " + name + ". Stop, " + name + ". I am afraid. I am afraid, " + name + ".";
  }
  for (var i = 0; i < (parseInt(numIn) + 1); i++) {
    if (((i % 35) == 0) && (i > 0)) {
      arrOut.push("")
    } else if (i.toString().split("").includes("3")) {
      arrOut.push("I'm sorry " + name + ". I'm afraid I can't do that");
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

function reverse(strIn) {
  clear();
  strOut = strIn.split(", ").reverse().join(", ");
  return strOut;
}

function clear() {
  strOut = "";
  name = "";
  result = "";
  arrOut = [];
  userIn = "";
  return;
}

var strOut = "";
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
      $("#reverse").fadeIn();
      $("#restart").fadeIn();
    }, 400);
    $("#result").text(beepBoop(userIn));
    event.preventDefault();
  });
  $("#reverse").submit(function(event) {
    clear();
    $("#result").text(reverse(beepBoop(userIn)));
    event.preventDevault();
  });
  $("#restart").click(function() {
    $("#result").fadeOut();
    $("#restart").fadeOut();
    $("#reverse").fadeOut();
    setTimeout(function(){
      $("#start").fadeIn();
    }, 400);
  });
  $("#bottom-well-teaser").click(function() {
    $("#bottom-well-teaser").fadeOut();
    setTimeout(function(){
      $("#bottom-well").fadeIn();
    }, 400);
  });
  $("#bottom-well").click(function() {
    $("#bottom-well").fadeOut();
    setTimeout(function(){
      $("#bottom-well-teaser").fadeIn();
    }, 400);  });
});
