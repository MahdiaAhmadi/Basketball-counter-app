// JavaScript file goes here .....

let displayScreen1 = document.getElementById("home-score-1");
let displayScreen2 = document.getElementById("home-score-2");

let count1 = 0;
let count2 = 0;

function plusPoint1() {
  count1 += 1;

  displayScreen1.value = count1;
}

function plusPoint2() {
  count1 += 2;

  displayScreen1.value = count1;
}

function plusPoint3() {
  count1 += 3;

  displayScreen1.value = count1;
}

//Guest section functions

function plusPoint_1() {
  count2 += 1;

  displayScreen2.value = count2;
}

function plusPoint_2() {
  count2 += 2;

  displayScreen2.value = count2;
}
function plusPoint_3() {
  count2 += 3;

  displayScreen2.value = count2;
}

function rest() {
  if (displayScreen1.value == 0) {
    displayScreen2.value = 0;
    count2 = 0;
  } else {
    displayScreen1.value = 0;
    count1 = 0;
  }
}
