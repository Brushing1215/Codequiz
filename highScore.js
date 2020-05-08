var scores = localStorage.getItem("highscore")
var mainEl = document.getElementById("main")
var ulEl = document.getElementById("ul")
if(scores === null){
    mainEl.textContent = "No highscores!!"
}else{

    scores = JSON.parse(scores)
    scores = scores.sort(function(a, b){return b.score - a.score });
    for (let i = 0; i < scores.length; i++) {
        var newLi  = document.createElement("li")
        newLi.textContent= scores[i].intials+ "  "+scores[i].score
        ulEl.appendChild(newLi)
    }
}