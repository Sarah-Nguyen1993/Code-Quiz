//declare variables
var goBack = $("#go-back")
var clear= $("#clear")
var highScores = JSON.parse(localStorage.getItem("highScores"))
if (highScores !== null){
    for (var i = 0; i <highScores.length; i++){
        var liEl = document.createElement("li");
        liEl.textContent = highScores[i].name + ": " + highScores[i].score;
        liEl.setAttribute("id", "high-score-list")
        $("#high-scores").append(liEl)
        
    }
}

//event listener to go back to the main page
goBack.click(function(){
    window.location.replace("index.html")
})

//event listener to clear out high scores
clear.click(function(){
    localStorage.clear();
    location.reload();
})

    