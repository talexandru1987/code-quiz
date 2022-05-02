//get the table element
const documentTable = document.getElementById("high-score-table");

const onLoad = () => {
  console.log("high score page rendered");

  //get the high score object
  const storeItems = JSON.parse(localStorage.getItem("highscore"));
  console.log(storeItems);
  console.log(storeItems[1]["name"]);

  for (let i = 0; i < storeItems.length; i += 1) {
    console.log(i);
    //create the tr element
    let trElement = document.createElement("tr");
    // add class attribute
    trElement.setAttribute("class", "high-score-no");
    // append section to main
    documentTable.append(trElement);

    //create the name td
    let nameTd = document.createElement("td");
    //set the text
    nameTd.textContent = storeItems[i]["name"];
    // append section to main
    trElement.append(nameTd);

    //create the name td
    let answersTd = document.createElement("td");
    //set the text
    answersTd.textContent = storeItems[i]["answers"];
    // append section to main
    trElement.append(answersTd);

    //create the name td
    let questionsTd = document.createElement("td");
    //set the text
    questionsTd.textContent = storeItems[i]["questions"];
    // append section to main
    trElement.append(questionsTd);

    //create the name td
    let timeTd = document.createElement("td");
    //set the text
    timeTd.textContent = storeItems[i]["time"];
    // append section to main
    trElement.append(timeTd);
  }
};

// add document on load event listener
window.addEventListener("load", onLoad);
