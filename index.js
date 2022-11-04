var geek = [];

for (let i = 0; i <= 5; i++) {
  if (i == 0) {
    geek[i] = prompt("Enter Emplyee No: ");
  } else if (i == 1) {
    geek[i] = prompt("Enter Employee text");
  } else if (i == 2) {
    geek[i] = prompt("Enter Overtime no");
  } else if (i == 3) {
    geek[i] = prompt("Enter Overtime text");
  } else if (i == 4) {
    geek[i] = prompt("Enter leave no");
  } else {
    geek[i] = prompt("Enter leave text");
  }
}

for (let i = 0; i <= 5; i++) {
  if (i == 0) {
    document.querySelector("#totalEmpNo").innerHTML = geek[i];
  } else if (i == 1) {
    document.querySelector("#totalEmpText").innerHTML = geek[i];
  } else if (i == 2) {
    document.querySelector("#totalovertimeNo").innerHTML = geek[i];
  } else if (i == 3) {
    document.querySelector("#totalOvertimeText").innerHTML = geek[i];
  } else if (i == 4) {
    document.querySelector("#totalLeaveNo").innerHTML = geek[i];
  } else {
    document.querySelector("#totalLeaveText").innerHTML = geek[i];
  }
}
