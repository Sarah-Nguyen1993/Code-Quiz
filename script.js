var startQuizBtn = document.querySelector("#button");
var question = document.querySelector(".question");
var choices = document.querySelector("#choices");
var countDown = document.querySelector("#timer");
var introduction = document.querySelector("#introduction");

startQuizBtn.addEventListener("click", quizStart);

function quizStart(){
    var total = 50;
    var timerInterval = setInterval(function(){
    countDown.textContent = total + " seconds";
    total--;
},1000);
    document.querySelector("#introduction").style.display="none";
    setQuestion();
};

function setQuestion(){
    document.querySelector("#question1").style.display="block";
    choices.addEventListener("click", function(event){
        console.log("ok")
        if (event.target.matches(".right")){
            var result= document.createElement("p");
            result.textContent = "Right!";
        }
        else{
            var result= document.createElement("p");
            result.textContent = "Wrong!";
        }
        result.style.fontStyle="italic"
            question.append(result);       
    })
}

  
