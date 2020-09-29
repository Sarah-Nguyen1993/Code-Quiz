//Set up a question bank
questionBank = [
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheseses",
        choice4: "square brackets",
        answer: "quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store ______ .",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to varibales.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "square brackets",
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: "console.log"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: "alerts"
    },
]

//Calling varibales here
var choices = document.querySelector("#choices");
var countDown = document.querySelector("#timer");
var timeInterval;
var currentQuestion = 0;
var total = 40;

$(document).ready(function () {
    //start the quiz here
    quizStart();
    function quizStart() {
        timerInterval = setInterval(function () {
            countDown.textContent = total + " seconds";
            total--;
            //if the timer reaches 0, execute the function endQuiz
            if (total <= 0) {
                total = 0;
                countDown.textContent = total;
                endQuiz();
            }
        }, 1000);
        //Otherwise, display next questions
        setQuestion();
    };

    // Display questions - Execute function setQuestion
    function setQuestion() {
        $("#question").text(questionBank[currentQuestion].question);
        $("#choice1").text(questionBank[currentQuestion].choice1);
        $("#choice2").text(questionBank[currentQuestion].choice2);
        $("#choice3").text(questionBank[currentQuestion].choice3);
        $("#choice4").text(questionBank[currentQuestion].choice4);
    }

    // onclick event for the response  
    // verify if the choice is right or wrong 
    //incrase currentQuestion and verify if there is more, if yes go to setQuestion otherwise go to endQuiz
    $(".choices").click(function () {
        var response = $(this).attr("id");
        var message =  $("#message");
        var choiceClicked = questionBank[currentQuestion][response]
        if (choiceClicked === questionBank[currentQuestion].answer) {
           message.html("<p class='right'>Right!</p>");
        } else {
            message.html("<p class='wrong'>Wrong!</p>");
            total -= 10;
            countDown.textContent = total + " seconds";
        }
        message.html ="";
        currentQuestion++;
        
       
        if (currentQuestion === questionBank.length) {
            endQuiz();
        }
        else {
            setQuestion();
        }
    })

    // function endQuiz starts when time ran out or when all questions have been finished!
    // show the form and grab the initials and save in localStorage
    function endQuiz() {
        clearInterval(timerInterval);
        if (total<=0){
            total = 0;
            countDown.textContent = total;
        }
        
        $(".container").html("<div class = 'end-result'></div>");
        $(".end-result").append("<h3>All Done!</h3>");
        $(".end-result").append("<p>Your final score is: " + total + "</p>");
        $(".end-result").append("<div class ='initial-form'></div>");
        $(".initial-form").append("<label>Enter your initial:</label>");
        $(".initial-form").append("<input id ='initial'></input>");
        $(".initial-form").append("<a href='highScore.html' id ='link'></a>");
        $("#link").append("<button class = 'button' id='submit'>Submit</button>")
    }
    $("#submit").click(function () {
        return window.location.assign('highscore.html')
    })
})






