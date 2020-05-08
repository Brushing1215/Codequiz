var startButtonEl = document.getElementById("startButton");
var titleEl = document.getElementById("title");
var mainEl = document.getElementById("main");
var timerEl = document.getElementById("timer");
var timer;
var count = 0;
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var secondsLeft = 60;
function local (){
    console.log('nothing')
    var userIntials = document.getElementById("userIntials").value
    console.log(userIntials)
    var highScoreArray = localStorage.getItem("highscore")
    
    if(highScoreArray === null){
        highScoreArray =[]
    }else{
        highScoreArray = JSON.parse(highScoreArray)
    }
    var theirScore = {
        intials : userIntials,
        score: secondsLeft
    }
    console.log(typeof highScoreArray)
    highScoreArray.push(theirScore)

    localStorage.setItem("highscore", JSON.stringify(highScoreArray))
    location.replace('./highScore.html')
}
function endGame(){
    clearInterval(timer)
    titleEl.textContent= "Game Over!"
    mainEl.textContent=""
    var newDiv1 = document.createElement("div")
    newDiv1.textContent = "Your score is: " + secondsLeft
    mainEl.appendChild(newDiv1)
    var newDiv2 = document.createElement("div") 
    newDiv2.textContent = "Please add your intials to the highscore page"
    var newInput = document.createElement("input") 
    newInput.id ="userIntials";
    var newButton = document.createElement("button")
    newButton.textContent = "submit"
    newButton.onclick = local 
    newDiv2.appendChild(newInput)
    newDiv2.appendChild(newButton)
    mainEl.appendChild(newDiv2)
}

function startTimer() {
  timerEl.textContent = "Time: " + secondsLeft;
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
        endGame()
    }
  }, 1000);
}
function checker(event) {
    var value = event.target.value
    if(value === questions[count].answer ){
        console.log('correct answer')
    }else{
        secondsLeft = secondsLeft - 10
    }
    count++
    if(count < questions.length){
        nextQuestion()
    }else{
        endGame()
    }
}
function nextQuestion() {
  titleEl.textContent = questions[count].title;
  mainEl.innerHTML=""
  for (var i = 0; i < questions[count].choices.length; i++) {
    var newButton = document.createElement("button");
    newButton.textContent = questions[count].choices[i];
    newButton.setAttribute("value", questions[count].choices[i])
    newButton.onclick = checker
    var newDiv= document.createElement("div")
    newDiv.appendChild(newButton)
    newDiv.setAttribute("class", "mb-2")
    mainEl.appendChild(newDiv)
  }
}

startButtonEl.addEventListener("click", function () {
  startTimer();
  nextQuestion();
});
