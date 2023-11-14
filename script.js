
var questions = [
    {
        Question: "What are Web APIs?",

        answers: [
            { text: "Application Programs Interconnect" , correct: false },
            { text: "Apple Pie Intergrations" , correct: false },
            { text: "Application Programming Interface" , correct: true},
            { text: "API" , correct: false},
        ]
    },
    {
        Question: 'What is the difference between setAtrribute and getAttribute',

        answers: [
            { text: "setAttribute pulls the variable" , correct: false},
            { text: "getAttribute pulls the variable" , correct: true},
            { text: "setAttribute and getAttribute do the same thing" , correct: false},
            { text: "getAttribute allows you to make changes in style, fonts, images, etc." , corect: false},
        ]
    
    }
];


var questionEl = document.getElementById(".question");
var answerBtnEl = document.getElementById(".ansr-btn");
var startBtnEl = document.getElementById(".start-btn");
var timerEl = document.getElementByIdr(".timer");

var currentQuest = 0;
var score = 0;

//shows highScores
function inti(){
    showHighscore();
}

//start quiz funciton
function startQuiz(){
    currentQuest = 0;
    score = 0;
    timerCount = 60;
    startBtnEl.innerHTML = "Start";
    showQuestion();
    startTimer();
};   

//function to show the current question
function showQuestion(){
    var currentQuestion = questions[currentQuest];
    var questionNo = currentQuest + 1;
    questionEl.innerHTML = questionNo + "." + currentQuestion.Question;

//display answers
    currentQuestion.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('.ansr-btn');
        answerBtnEl.appendChild(button);      
        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectedAnswer);
    }
    );
};

function selectedAnswer(e){
    var selectedbtn = e.target;
    var iscorrect = selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
    } else{
        selectedbtn.classList.add("incorrect");
    }
};

//starts timer
function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        
        if(timerCount >= 0) {
            if(iscorrect && timerCount > 0){
                clearInterval(timer);
            }
        
    }
//if time runs out
    if (timerCount === 0) {
        clearInterval(timer);
        showHighscore();
    };
}, 1000);
}


//call the function
startQuiz();

inti();

startBtnEl.addEventListener("click" , startQuiz);


