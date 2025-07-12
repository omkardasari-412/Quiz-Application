const questions=[
    {
        question:"HTML stands for?",
        answers:[
            {text:"Hypertext Machine Language", correct: false},
            {text:"Hypertext Markup Language", correct: true},
            {text:"Hypertext and links Markup Language", correct:false},
            {text:"None of these", correct:false},
        ]
    },
    {
        question:"The Property in CSS used to change the background color of an element is ",
        answers: [
            {text:"bgcolor", correct:false},
            {text:"color", correct:false},
            {text:"background-color", correct:true},
            {text:"All of the above", correct:false},
        ]
    },
    {
        question:"The CSS property used to control the element's font-size is",
        answers: [
            {text:"text-style", correct:false},
            {text:"text-size", correct:false},
            {text:"font-size", correct:true},
            {text:"None of the above", correct:false},
        ]
    },
    {
        question:"Which type of JavaScript language is",
        answers: [
            {text:"Object-Oriented", correct:false},
            {text:"Object Based", correct:true},
            {text:"Assembly Language", correct:false},
            {text:"High Level", correct:false},
        ]
    },
    {
        question:"In the JavaScript, which one of the following is not considered as an error",
        answers: [
            {text:"Syntax error", correct:false},
            {text:"Missing of semicolons", correct:false},
            {text:"Division by zero", correct:true},
            {text:"Missing of Bracket", correct:false},
        ]
    }
        
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
} 
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();