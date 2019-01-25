// beepBoop: takes in number (as a string), outputs a string based on the input.
// If the input contains a 3, it becomes HAL-9000. Else if it contains a 2, it
// boops. Else if it contains a 1, it beeps. Else, it outputs the number line
// up to that input number.
function beepBoop(numIn) {
  if (numIn.split("").includes("3")) {
    return "I'm sorry Dave. I'm afraid I can't do that.";
  } else if (numIn.split("").includes("2")) {
    return "boop";
  } else if (numIn.split("").includes("1")) {
    return "beep";
  } else {
    for (var i = 0; i < (parseInt(numIn) + 1); i++) {
      arrOut.push(i);
    }
    result = arrOut.join(", ");
  }
  return result;
}

var result = "";
var arrOut = [];

beepBoop("5");
