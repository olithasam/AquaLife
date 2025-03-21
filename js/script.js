// Retrieving elements
var ul = document.getElementById("final-out-ul");
var questionNumber = document.getElementById("question-number");

let ques1 = document.getElementById("ques1");
let ques2 = document.getElementById("ques2");
let ques3 = document.getElementById("ques3");
let ques4 = document.getElementById("ques4");
let ques5 = document.getElementById("ques5");

let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let ans5 = document.getElementById("ans5");

// Arrays for questions and answers
const arrayQuestion1 = [
  "Your Name",
  "Surname",
  "Age",
  "Gender",
  "Agree with privacy terms",
];
const arrayAnswer1 = [];
const arrayQuestion2 = ["Rational", "DoA", "Task", "Place", "Assignment Type"];
const arrayAnswer2  = [];
const arrayQuestion3 = [
  "Area of study",
  "Highest degree",
  "University/Instatution",
  "Completion",
  "Country",
];
const arrayAnswer3 = [];
const arrayQuestion4 = [
  "Availabillty for volunteering",
  "Surname",
  "Tel",
  "Email",
];
const arrayAnswer4 = [];

// Function to prompt user for input
function promptFunc(title) {
  return prompt(title);
}

let startBtn = document.getElementById("strtBtn");
// Start button
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";

  arrayAnswer1.push(promptFunc(arrayQuestion1[0]));
  console.log(arrayAnswer1);
});
// Next button
let nextBtn = document.getElementById("next-btn");
let skipBtn = document.getElementById("skip-btn");

nextBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  next();
});

skipBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  skip();
});
// Function to set questions based on array
function setQues(array) {
  ques1.innerHTML = array[0] + " :";
  ques2.innerHTML = array[1] + " :";
  ques3.innerHTML = array[2] + " :";
  ques4.innerHTML = array[3] + " :";

  if (array.length == 5) {
    ques5.innerHTML = array[4] + " :";
  } else {
    ques5.style.display = "none";
    ans5.style.display = "none";
  }
}

progBar(0);

// Function to update progress bar and questions

function progBar(completed) {
  let prog = document.getElementById("prog");
  let progBarLine = document.getElementById("prog-bar-line");

  if (completed == 0) {
    prog.innerHTML = "Profile Completed 0%";
    progBarLine.style.width = "0%";
    questionNumber.innerHTML = "STEP 1 Perosnal Detials | Question 1/5";
    setQues(arrayQuestion1);
  } else if (completed == 1) {
    prog.innerHTML = "Profile Completed 20%";
    progBarLine.style.width = "25%";
    questionNumber.innerHTML = "STEP 2 Volunteering tasks | Question 1/5";
    setQues(arrayQuestion2);
  } else if (completed == 2) {
    prog.innerHTML = "Profile Completed 40%";
    progBarLine.style.width = "50%";
    questionNumber.innerHTML = "STEP 3 Questions | Question 1/5";
    setQues(arrayQuestion3);
  } else if (completed == 3) {
    prog.innerHTML = "Profile Completed 60%";
    progBarLine.style.width = "75%";
    questionNumber.innerHTML = "STEP 4 Availabilty and content | Question 1/4";
    setQues(arrayQuestion4);
  } else {
    prog.innerHTML = "Profile Completed 100%";
    progBarLine.style.width = "100%";
  }
}

function loop(array1, array2) {
  for (let i = array1.length; i < array2.length; i++) {
    array1.push(promptFunc(array2[i]));
    break;
  }
}
// Function to display answers
function setAns(array) {
  console.log(array[0]);
  if (array[0] != null) {
    ans1.innerText = array[0];
  }
  if (array[1] != null) {
    ans2.innerText = array[1];
  }
  if (array[2] != null) {
    ans3.innerText = array[2];
  }
  if (array[3] != null) {
    ans4.innerText = array[3];
  }
  if (array[4] != null) {
    ans5.innerText = array[4];
  }
}
// Function to empty answer 
function emptyAnswer() {
  ans1.innerHTML = "";
  ans2.innerHTML = "";
  ans3.innerHTML = "";
  ans4.innerHTML = "";
  ans5.innerHTML = "";
}
// Function to display final output
function finaloutloop(arrayQ, arrayA) {
  for (let i = 0; i < arrayA.length; i++) {
    var li = document.createElement("li");
    var quesPara = document.createElement("p");
    quesPara.textContent = arrayQ[i] + ": ";
    var ansPara = document.createElement("p");
    ansPara.textContent = arrayA[i];
    li.appendChild(quesPara);
    li.appendChild(ansPara);

    ul.appendChild(li);
  }
}

function finalOutput() {
  document.querySelector(".output").style.display = "none";
  document.querySelector(".final-out").style.display = "block";

  finaloutloop(arrayQuestion1, arrayAnswer1);

  var li = document.createElement("li");
  var div = document.createElement("div");
  li.appendChild(div);
  ul.appendChild(li);

  finaloutloop(arrayQuestion2, arrayAnswer2);

  var li = document.createElement("li");
  var div = document.createElement("div");
  li.appendChild(div);
  ul.appendChild(li);

  finaloutloop(arrayQuestion3, arrayAnswer3);

  var li = document.createElement("li");
  var div = document.createElement("div");
  li.appendChild(div);
  ul.appendChild(li);

  finaloutloop(arrayQuestion4, arrayAnswer4);
}
// Function to handle next button click
function next() {
  if (arrayAnswer1.length < 5) {
    loop(arrayAnswer1, arrayQuestion1);
    setAns(arrayAnswer1);
    if (arrayAnswer1.length == 5) {
      progBar(1);
      emptyAnswer();
    }
  } else if (arrayAnswer2.length < 5) {
    loop(arrayAnswer2, arrayQuestion2);
    setAns(arrayAnswer2);
    if (arrayAnswer2.length == 5) {
      progBar(2);
      emptyAnswer();
    }
  } else if (arrayAnswer3.length < 5) {
    loop(arrayAnswer3, arrayQuestion3);
    setAns(arrayAnswer3);
    if (arrayAnswer3.length == 5) {
      progBar(3);
      emptyAnswer();
    }
  } else if (arrayAnswer4.length < 4) {
    loop(arrayAnswer4, arrayQuestion4);
    setAns(arrayAnswer4);
    if (arrayAnswer4.length == 4) {
      progBar(4);
      emptyAnswer();
      finalOutput();
    }
  }
}
// Function to handle skip button click
function skip() {
  if (arrayAnswer1.length < 5) {
    arrayAnswer1.push("");
    console.log(arrayAnswer1);
    if (arrayAnswer1.length == 5) {
      progBar(1);
      emptyAnswer();
    }
  } else if (arrayAnswer2.length < 5) {
    arrayAnswer2.push("");
    console.log(arrayAnswer2);
    if (arrayAnswer2.length == 5) {
      progBar(2);
      emptyAnswer();
    }
  } else if (arrayAnswer3.length < 5) {
    arrayAnswer3.push("");
    console.log(arrayAnswer3);
    if (arrayAnswer3.length == 5) {
      progBar(3);
      emptyAnswer();
    }
  } else if (arrayAnswer4.length < 4) {
    arrayAnswer4.push("");
    console.log(arrayAnswer4);
    if (arrayAnswer4.length == 4) {
      progBar(4);
      emptyAnswer();
      finalOutput();
    }
  }
}
