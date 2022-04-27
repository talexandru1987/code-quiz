// global declarations
const questions = {
  question1: {
    question: "Which of the following is a data type in javascript?",
    options: ["string", "div", "function", "actor"],
    answer: "string",
  },
  question2: {
    question: "Which of the following is an html element?",
    options: ["string", "div", "functions", "const"],
    answer: "div",
  },
  question3: {
    question: "Which of the following is used to declare aan id in CSS?",
    options: ["~", ".", "id:", "#"],
    answer: ".",
  },
};

//create the questions list
const questionsList = Object.keys(questions);

//dynamic variables
let questionIndex = 0;
let timerValue = 10 * questionsList.length;
let quizComplete = false;

// target the html elements
const startButton = document.getElementById("start-btn");
const main = document.getElementById("main");
const contentSection = document.getElementById("main-content");
const questionSection = document.getElementById("question-content");
const optionsSection = document.getElementById("options");

const onLoad = () => {
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {
  //remove the start content section
  contentSection.remove();
};

const removeQuestionSection = () => {
  //remove the section containing the question
  questionSection.remove();
};

const startTimer = () => {
  console.log("start timer");

  // declare function to execute every 1 sec
  const timeInterval = setInterval(function () {
    // decrement timer value
    timerValue -= 1;

    const timeValue = document.getElementById("time-span");
    timeValue.textContent = timerValue;

    console.log(timerValue);
    // if quizComplete is true then stop timer

    // check if timer reaches 0
    if (timerValue === 0) {
      clearInterval(timeInterval);
    }
    // if true render game over
  }, 1000); // setInterval of 1000ms (1s)
};

const validateAnswer = (event) => {
  console.log("test");
  //get the event target
  const target = event.target;
  console.log(target);
  // get current target element (is the element the event handler attached to)
  const currentTarget = event.currentTarget;
  console.log(currentTarget);
  // get answer clicked from user
  // get the correct answer for question
  // compare the 2 answers
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // create timerSection
  const timerSection = document.createElement("section");
  // add class attribute
  timerSection.setAttribute("class", "timer-section");
  main.append(timerSection);

  // create h2
  const h2 = document.createElement("h2");
  // add content to h2
  h2.textContent = "Timer";
  //append to timerSection
  timerSection.append(h2);

  // create div element
  const timerDiv = document.createElement("div");
  // add class attribute
  timerDiv.setAttribute("class", "timer");
  //append to timerSection
  timerSection.append(timerDiv);

  // create p element
  const paragraph = document.createElement("p");
  // add the text content
  paragraph.textContent = "Time remaining: ";
  //append to div
  timerDiv.append(paragraph);

  //create span
  const span = document.createElement("span");
  //add span attribute
  span.setAttribute("id", "time-span");
  // add the text content
  span.textContent = timerValue;
  //append to div
  paragraph.append(span);
};

const renderQuestionSection = () => {
  //delete previous question
  if (questionIndex > 0) {
    removeQuestionSection();
  }

  // create question section
  const questionSection = document.createElement("section");
  // add class attribute
  questionSection.setAttribute("class", "question-section");
  // add id attribute
  questionSection.setAttribute("id", "question-content");
  // append section to main
  main.append(questionSection);
  // create the question div
  const questionDiv = document.createElement("div");
  // add the attribute
  questionDiv.setAttribute("class", "question-section-question");
  //append to document
  questionSection.append(questionDiv);

  //create p element
  const questionP = document.createElement("p");
  //add the question value
  questionP.textContent = questions[questionsList[questionIndex]]["question"];
  //append to doc
  questionDiv.append(questionP);
  //create ul element
  const ul = document.createElement("ul");
  //set ul attribute
  ul.setAttribute("class", "quest-section-options");
  //set ul id attribute
  ul.setAttribute("id", "options");
  //append to document
  questionSection.append(ul);

  //create a var to target the object
  let targetObjectOptions = questions[questionsList[questionIndex]];

  //append question and render to document
  for (let i = 0; i < targetObjectOptions["options"].length; i += 1) {
    //create li element
    const li = document.createElement("li");
    //set li text
    li.textContent = targetObjectOptions["options"][i];
    //check if the correct answer
    if (targetObjectOptions["options"][i] === targetObjectOptions["answer"]) {
      li.setAttribute("id", "well-done");
    }
    //append to doc
    ul.append(li);
  }

  // create the decision div
  const decisionDiv = document.createElement("div");
  // add the attribute
  decisionDiv.setAttribute("class", "question-section-decision");
  //append to document
  questionSection.append(decisionDiv);

  //create p element
  const decisionP = document.createElement("p");
  //sett the p text
  decisionP.textContent = "Wrong!"; /// hardcoded replace with variable!!!!!!!!!!!
  //append to document
  decisionDiv.append(decisionP);

  //increment the index
  questionIndex += 1;
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  // remove start section
  removeStartSection();

  // start timer
  startTimer();

  // render timer section
  renderTimerSection();

  // render question section
  renderQuestionSection();

  //add question event listener
  optionsSection.addEventListener("click", console.log("Hello"));
};

// add document on load event listener
window.addEventListener("load", onLoad);
// add start button click event listener
startButton.addEventListener("click", startQuiz);
