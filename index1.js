const quizData = [
    {
        question: "How are you?",
        a: "Fine",
        b: "Good",
        c: "Feeling Not Good",
        d: "Awesome",
        correct: "a"
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        a: "Node",
        b: "Vue",
        c: "React",
        d: "Cassandra",
        correct: "d"
    },
    {
        question: "How to stop an interval timer in JavaScript?",
        a: "clearInterval",
        b: "clearTimer",
        c: "IntervalOver",
        d: "Cassandra",
        correct: "a"
    },
    {
        question: "Which type of JavaScript language is?",
        a: "Object Oriented",
        b: "Object based",
        c: "Procedural",
        d: "None of the above",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const totalNumberOfQuestions = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLabels = document.querySelectorAll(".answer-label");
const nextQuestionBtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitQuiz = document.getElementById("submit");
const resultEl= document.getElementById("result");
const scoreEl = document.getElementById("score");

let currentQtn = 0;
let answered = 0;

const loadQuiz = () => {
    countQuestion.innerHTML = `${currentQtn + 1}`;
    totalNumberOfQuestions.innerHTML = quizData.length;
    questionNumber.innerHTML = `${currentQtn + 1}`;
    questionTitle.innerHTML = quizData[currentQtn].question;
    answerLabels[0].innerHTML = quizData[currentQtn].a;
    answerLabels[1].innerHTML = quizData[currentQtn].b;
    answerLabels[2].innerHTML = quizData[currentQtn].c;
    answerLabels[3].innerHTML = quizData[currentQtn].d;

    reset();

    if (currentQtn === quizData.length - 1) {
        nextQuestionBtn.style.display = "none";
        submitQuiz.style.display = "block";
    } else {
        nextQuestionBtn.style.display = "block";
        submitQuiz.style.display = "none";
    }
}

const reset = () => {
    allInputs.forEach((input) => {
        input.checked = false;
    });
}

nextQuestionBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQtn].correct) {
            answered++;
        }
        currentQtn++;
        if (currentQtn < quizData.length) {
            loadQuiz();
        }
    }
});

submitQuiz.addEventListener("click",()=>{
    let answer= getSelected();
    if(answer === quizData[currentQtn].correct){
        answered++;
    };
    currentQtn++;
    if(getSelected()){
quiz.style.display="none";
resultEl.style.display ="block";
scoreEl.innerHTML=`Questions Answered Correctly ${answered} / ${quizData.length}`;

    }
})



const getSelected = () => {
    let selectedAnswer;
    allInputs.forEach((input) => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });
    return selectedAnswer;
}

loadQuiz();
