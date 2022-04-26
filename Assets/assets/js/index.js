// global declarations
const questions = [];
let questionIndex = 0;
let timerValue = 10 * 6; //CHANGE THE HARDCODED 6!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let quizComplete = false;

// target the html elements
const startButton = document.getElementById("start-btn");
const main = document.getElementById("main");
const contentSection = document.getElementById("main-content");

const onLoad = () => {
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {};

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

const validateAnswer = () => {
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
  console.log("render time section");
  // use HTML as guide and build in JS

  // create section
  const section = document.createElement("section");
  // add class attribute
  section.setAttribute("class", "timer-section");
  main.append(section);

  // create h2
  const h2 = document.createElement("h2");
  // add content to h2
  h2.textContent = "Timer";
  //append to section
  section.append(h2);

  // create div element
  const timerDiv = document.createElement("div");
  // add class attribute
  timerDiv.setAttribute("class", "timer");
  //append to section
  section.append(timerDiv);

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
  console.log("render question section");
  // use HTML as guide and build in JS
  // append section to main
  // add click event listener on #question-section
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
  contentSection.remove();

  // start timer
  startTimer();

  // render timer section
  renderTimerSection();

  // render question section
  renderQuestionSection();
};

// add event listeners
startButton.addEventListener("click", startQuiz);
// add document on load event listener
// add start button click event listener
