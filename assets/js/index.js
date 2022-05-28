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

//timeout variable
let myTimeout;

//time interval function variable
let timeInterval;
//dynamic variables
let questionIndex = 0;
let timerValue = 10 * questionsList.length;
let quizComplete = false;
let correctAnswers = 0;

// target the html elements
const startButton = document.getElementById("start-btn");
const main = document.getElementById("main");
const contentSection = document.getElementById("main-content");
const highScore = document.getElementById("high-score");

//local storage variables
let storeAnswers = [];

const onLoad = () => {
  // initialize local storage
  // check if high scores exists in LS
  // if false then set high scores to empty array in LS
  if (!localStorage.getItem("highscore")) {
    localStorage.setItem("highscore", JSON.stringify(storeAnswers));
  }
};

const removeStartSection = () => {
  //remove the start content section
  contentSection.remove();
};

const removeQuestionSection = () => {
  //target the section element
  const questionSection = document.getElementById("question-content");
  //remove the section containing the question
  questionSection.remove();
};

const startTimer = () => {
  // declare function to execute every 1 sec
  timeInterval = setInterval(function () {
    // decrement timer value
    timerValue -= 1;

    const timeValue = document.getElementById("time-span");
    timeValue.textContent = timerValue;

    // if quizComplete is true then stop timer

    // check if timer reaches 0
    if (timerValue === 0) {
      //stop timer
      clearInterval(timeInterval);
      //render game over
      myTimeout = setTimeout(renderGameOver, 500);
    }
    // if true render game over
  }, 1000); // setInterval of 1000ms (1s)
};

const validateAnswer = (event) => {
  //get the event target
  const target = event.target;
  // get answer clicked from user and get id
  const userAnswer = target.id;
  //target the result p
  const resultAnswer = document.getElementById("decision-result");
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // check if id exists
  if (userAnswer) {
    correctAnswers += 1;
    renderAlert("Well Done!", true);
  } else {
    renderAlert("Wrong Answer!", false);
  }

  //target the element containing the event listener
  const eventSection = document.getElementById("options");
  //stop the event listener for the question
  eventSection.removeEventListener("click", validateAnswer);

  // if question is not last question then increment question index and render next question
  questionIndex += 1;
  //if not last question
  if (questionIndex < questionsList.length) {
    // set timeout for 500ms and then go to next question
    myTimeout = setTimeout(renderQuestionSection, 500);
  }

  // if question is last question set quizComplete to true and then render form
  if (questionIndex === questionsList.length) {
    //stop timer
    clearInterval(timeInterval);
    //render game over
    myTimeout = setTimeout(renderGameOver, 500);
  }
};

const handleFormSubmit = (event) => {
  //stop the default form submit
  event.preventDefault();

  //get the name from the form
  let userName = document.getElementById("full-name").value;

  if (userName === "") {
    alert("Username is blank. Thus the score was not saved!");
  } else {
    const scoreObject = {
      name: userName,
      answers: correctAnswers,
      questions: questionsList.length,
      time: 10 * questionsList.length - timerValue,
    };

    //get the high score object
    const storeItems = JSON.parse(localStorage.getItem("highscore"));
    //add a new object
    storeItems.unshift(scoreObject);

    //save in local storage
    localStorage.setItem("highscore", JSON.stringify(storeItems));
  }

  //navigate to the high scores page
  window.location.replace("./highscore.html");
};

const renderTimerSection = () => {
  // create timerSection
  const timerSection = document.createElement("section");
  // add class attribute
  timerSection.setAttribute("class", "timer-section");
  // add id attribute
  timerSection.setAttribute("id", "timer-section");
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

  //target the options section
  const optionsSection = document.getElementById("options");
  //add question event listener
  optionsSection.addEventListener("click", validateAnswer);
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
  removeQuestionSection();

  // create question section
  const responseSection = document.createElement("section");
  // add class attribute
  responseSection.setAttribute("class", "game-over");
  // add id attribute
  responseSection.setAttribute("id", "question-content");
  // append section to main
  main.append(responseSection);
  // create the response div
  const responseDiv = document.createElement("div");
  // add the attribute
  responseDiv.setAttribute("class", "game-over-response");
  //append to document
  responseSection.append(responseDiv);
  //create p element
  const responseP = document.createElement("p");
  //add the question value
  responseP.textContent = "GAME OVER!";
  //append to doc
  responseDiv.append(responseP);
  //create next page button
  const responseButton = document.createElement("button");
  //add the question value
  responseButton.textContent = "Continue to Form!";
  // add event listener
  responseButton.addEventListener("click", renderForm);
  //append to doc
  responseDiv.append(responseButton);
};

const renderAlert = (message, status) => {
  // create the decision div
  const decisionDiv = document.createElement("div");
  // add the attribute
  decisionDiv.setAttribute("class", "question-section-decision");

  //create p element
  const decisionP = document.createElement("p");
  // add the attribute
  decisionP.setAttribute("id", "decision-result");

  //generate text
  decisionP.textContent = message;
  if (status) {
    //change text color
    decisionP.style.color = "#70e000";
  } else {
    //change text color
    decisionP.style.color = "#d00000";
    //decrement time value
    timerValue -= 5;
  }
  //append to document
  decisionDiv.append(decisionP);

  // append div to #question-content
  const qSection = document.getElementById("question-content");
  //append to document
  qSection.append(decisionDiv);

  // append div to #question-section
};

const renderForm = () => {
  //remove content section
  removeQuestionSection();
  //target the timer section
  const timerSection = document.getElementById("timer-section");
  //remove the element from doc
  timerSection.remove();
  // use HTML as guide and build in JS
  // create form section
  const formSection = document.createElement("section");
  // add class attribute
  formSection.setAttribute("class", "form-section");
  // append section to main
  main.append(formSection);

  // create form
  const aForm = document.createElement("form");
  // add attribute
  aForm.setAttribute("action", "submit");
  //append to section
  formSection.append(aForm);

  //create score text div
  const scoreDiv = document.createElement("div");
  // add class attribute
  scoreDiv.setAttribute("class", "form-section-score");
  //the time in which the questions were completed
  const recordTime = 10 * questionsList.length - timerValue;
  // set the text content
  scoreDiv.textContent = `You managed to score ${correctAnswers} answers in ${recordTime} seconds. Please enter your full name bellow to add your score to the high score list! `;
  //append to form
  aForm.append(scoreDiv);

  //create input div
  const inputDiv = document.createElement("div");
  // add class attribute
  inputDiv.setAttribute("class", "form-section-input");
  //append div
  aForm.append(inputDiv);

  //create div for input field
  const inputContainerDiv = document.createElement("div");
  // add class attribute
  inputContainerDiv.setAttribute("class", "form-section-input-container");
  //append div
  inputDiv.append(inputContainerDiv);

  //create the input label
  const inputLabel = document.createElement("label");
  // add class attribute
  inputLabel.setAttribute("for", "name");
  //set text
  inputLabel.textContent = "Name";
  //append div
  inputContainerDiv.append(inputLabel);

  //create the input
  const inputBox = document.createElement("input");
  // add class attributes
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("name", "name");
  inputBox.setAttribute("id", "full-name");
  //append div
  inputContainerDiv.append(inputBox);

  //create submit button div
  const submitDiv = document.createElement("div");
  // add class attribute
  submitDiv.setAttribute("class", "submit");
  //append div
  inputDiv.append(submitDiv);

  //create a element
  const submitAnchor = document.createElement("a");
  //add attribute
  submitAnchor.setAttribute("href", "./highscore.html");
  //append a
  submitDiv.append(submitAnchor);

  //create the submit button
  const submitButton = document.createElement("input");
  // add class attributes
  submitButton.setAttribute("id", "submit-btn");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  //append button
  submitAnchor.append(submitButton);

  //create the form answer div
  const submitAnswerDiv = document.createElement("div");
  //append to doc
  inputDiv.append(submitAnswerDiv);

  //create the p element
  const formSubmitP = document.createElement("p");
  // add class attributes
  formSubmitP.setAttribute("class", "submit-result");
  formSubmitP.setAttribute("id", "submit-result");
  //append to doc
  submitAnswerDiv.append(formSubmitP);

  // append section to main
  // add submit event handler to form
  const submit = document.getElementById("submit-btn");
  // add start button click event listener
  submit.addEventListener("click", handleFormSubmit);
};

const highScoresSection = () => {
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
};

// add document on load event listener
window.addEventListener("load", onLoad);
// add start button click event listener
startButton.addEventListener("click", startQuiz);
