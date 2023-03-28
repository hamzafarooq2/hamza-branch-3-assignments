var main = document.querySelector(".main");
var displayData = document.querySelector(".displayData");

displayData.style.visibility = "hidden";

var leaveTitle1 = document.getElementById("leaveTitle1").textContent;
var leaveText1 = document.getElementById("leaveText1").textContent;

var leaveTitle2 = document.getElementById("leaveTitle2").textContent;
var leaveText2 = document.getElementById("leaveText2").textContent;

var leaveTitle3 = document.getElementById("leaveTitle3").textContent;
var leaveText3 = document.getElementById("leaveText3").textContent;

var leaveTitle4 = document.getElementById("leaveTitle4").textContent;
var leaveText4 = document.getElementById("leaveText4").textContent;

// Taking Element to Display Date

var revealLeaveTitle = document.getElementById("revealLeaveTitle");
var revealLeaveText = document.getElementById("revealLeaveText");

//--------------------------------

function myFunction() {
  main.style.display = "none";
  displayData.style.visibility = "visible";

  var sd = document.getElementById("sd").value;
  var ed = document.getElementById("ed").value;

  document.getElementById("displaySd").innerHTML = sd;
  document.getElementById("displayEd").innerHTML = ed;

  var note = document.getElementById("note").value;
  document.getElementById("displayNote").innerHTML = note;

  // Functionality on radio to Display thier Data

  if (document.getElementById("rad1").checked) {
    revealLeaveTitle.innerHTML = leaveTitle1;
    revealLeaveText.innerHTML = leaveText1;
  } else if (document.getElementById("rad2").checked) {
    revealLeaveTitle.innerHTML = leaveTitle2;
    revealLeaveText.innerHTML = leaveText2;
  } else if (document.getElementById("rad3").checked) {
    revealLeaveTitle.innerHTML = leaveTitle3;
    revealLeaveText.innerHTML = leaveText3;
  } else {
    revealLeaveTitle.innerHTML = leaveTitle4;
    revealLeaveText.innerHTML = leaveText4;
  }
}

//---------------------------------------------

// When Radio checked background and border color change------------------------

function check1() {
  document.getElementById("rad1").checked = true;
  const background1 = document.getElementById("b1");
  const background2 = document.getElementById("b2");
  const background3 = document.getElementById("b3");
  const background4 = document.getElementById("b4");

  background1.style.backgroundColor = "#AFEEEE";
  background2.style.backgroundColor = "inherit";
  background3.style.backgroundColor = "inherit";
  background4.style.backgroundColor = "inherit";

  background1.style.borderColor = "#008B8B";
  background2.style.borderColor = "#e9e5e8";
  background3.style.borderColor = "#e9e5e8";
  background4.style.borderColor = "#e9e5e8";
}
function check2() {
  document.getElementById("rad2").checked = true;
  const background1 = document.getElementById("b1");
  const background2 = document.getElementById("b2");
  const background3 = document.getElementById("b3");
  const background4 = document.getElementById("b4");

  background1.style.backgroundColor = "white";
  background2.style.backgroundColor = "#AFEEEE";
  background3.style.backgroundColor = "white";
  background4.style.backgroundColor = "white";

  background1.style.borderColor = "#e9e5e8";
  background2.style.borderColor = "#008B8B";
  background3.style.borderColor = "#e9e5e8";
  background4.style.borderColor = "#e9e5e8";
}
function check3() {
  document.getElementById("rad3").checked = true;
  const background1 = document.getElementById("b1");
  const background2 = document.getElementById("b2");
  const background3 = document.getElementById("b3");
  const background4 = document.getElementById("b4");

  background1.style.backgroundColor = "white";
  background2.style.backgroundColor = "white";
  background3.style.backgroundColor = "#AFEEEE";
  background4.style.backgroundColor = "white";

  background1.style.borderColor = "#e9e5e8";
  background2.style.borderColor = "#e9e5e8";
  background3.style.borderColor = "#008B8B";
  background4.style.borderColor = "#e9e5e8";
}
function check4() {
  document.getElementById("rad4").checked = true;
  const background1 = document.getElementById("b1");
  const background2 = document.getElementById("b2");
  const background3 = document.getElementById("b3");
  const background4 = document.getElementById("b4");

  background1.style.backgroundColor = "white";
  background2.style.backgroundColor = "white";
  background3.style.backgroundColor = "white";
  background4.style.backgroundColor = "#AFEEEE";

  background1.style.borderColor = "#e9e5e8";
  background2.style.borderColor = "#e9e5e8";
  background3.style.borderColor = "#e9e5e8";
  background4.style.borderColor = "#008B8B";
}
