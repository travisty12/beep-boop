// beepBoop: takes in number (as a string), outputs a string based on the input.
// If the input contains a 3, it becomes HAL-9000. Else if it contains a 2, it
// boops. Else if it contains a 1, it beeps. Else, it outputs the number line
// up to that input number.
function beepBoop(numIn) {
  for (var i = 0; i < (parseInt(numIn) + 1); i++) {
    if (i.toString().split("").includes("3")) {
      arrOut.push("I'm sorry Dave. I'm afraid I can't do that.");
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
var name = "";
var result = "";
var arrOut = [];
var userIn = "";

$(document).ready(function() {
  $("#start").click(function() {
    $("#start").hide();
    $("#nameIn").show();
    $("#nameIn").submit(function(event) {
      name = $("#userName").val();
      $("#nameIn").hide();
      $("#numIn").show();
      $("#numIn").submit(function(event) {
        userIn = $("#numBlank").val();
        $("#numIn").hide();
        $("#result").show();
        $("#restart").show();

        $("#result").text(beepBoop(userIn));
        event.preventDefault();
      });


      event.preventDefault();
    });
  });

});
