// DOM Elements Selection
const quizAppSection = document.querySelector('.qa-section');
const quizQuestionSection = document.querySelector('.qa-questions');
const finalScoreSection = document.querySelector('.qa-finalScore');

const questionTitle = document.querySelector("#question-title");
const questionCount = document.querySelector("#question-count");
const optionsContainer = document.querySelector("#options");
const totalScore = document.querySelector('#scores');
const finalScore = document.querySelector('#finalScore');

// App State Variables
let currentQuestionIndex = 0;
let score = 0;

// Start Quiz Event Listener
document.querySelector('#start-btn').addEventListener('click', () => {
    quizAppSection.classList.add('hidden');
    quizQuestionSection.classList.remove('hidden');
});

// Quiz Questions Dataset
const questions = [
    {
        id: 1,
        title: "Which one is a JavaScript framework?",
        correctAnswer: "Next.js",
        options: ["Tailwind CSS", "JavaScript", "Linux", "Next.js"],
    },
    {
        id: 2,
        title: "Which keyword is used to declare a constant in JavaScript?",
        correctAnswer: "const",
        options: ["var", "let", "const", "static"],
    },
    {
        id: 3,
        title: "Which method is used to add an item to the end of an array?",
        correctAnswer: "push()",
        options: ["pop()", "push()", "shift()", "unshift()"],
    },
    {
        id: 4,
        title: "Which HTML tag is used to create a hyperlink?",
        correctAnswer: "&lt;a&gt;",
        options: ["&lt;link&gt;", "&lt;href&gt;", "&lt;a&gt;", "&lt;url&gt;"],
    },
    {
        id: 5,
        title: "Which CSS property is used to change the text color?",
        correctAnswer: "color",
        options: ["font-color", "text-color", "color", "foreground"],
    },
    {
        id: 6,
        title: "Which React Hook is used to manage state?",
        correctAnswer: "useState",
        options: ["useEffect", "useState", "useRef", "useMemo"],
    },
    {
        id: 7,
        title: "What does CSS stand for?",
        correctAnswer: "Cascading Style Sheets",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets",
        ],
    },
];

// Function to render the active question and its options
function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Update progress indicator and question header
    questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionTitle.textContent = currentQuestion.title;

    // Reset container before appending new options
    optionsContainer.innerHTML = "";

    // Update real-time score display
    totalScore.textContent = `Score: ${score}`;

    // Generate option buttons dynamically
    currentQuestion.options.map((option, index) => {
        const button = document.createElement("button");
        
        button.className = "w-full text-left py-3.5 px-5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 text-zinc-200 text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-between group";
        
        button.innerHTML = `
            <span><span class="text-zinc-500 mr-2 font-semibold">${index + 1}.</span> ${option}</span>
            <span class="w-5 h-5 rounded-full border border-zinc-600 flex items-center justify-center text-xs group-hover:border-zinc-400"></span>
        `;
        
        button.addEventListener("click", () => {
            // Check selected answer correctness
            if (option === currentQuestion.correctAnswer) {
                score++;
            } else {
                score = Math.max(0, score - 1);
            }

            // Determine whether to complete the quiz or load the next question
            if (currentQuestionIndex === questions.length - 1) {
                showFinalScore();
            } else {
                currentQuestionIndex++;
                renderQuestion();
            }
        });

        optionsContainer.append(button);
    });
}

// Function to handle completion screen and final score output
const showFinalScore = () => {
    quizQuestionSection.classList.add('hidden');
    
    if (finalScoreSection) {
        finalScoreSection.classList.remove('hidden');
    }

    if (finalScore) {
        finalScore.textContent = `Your Final Score: ${score} / ${questions.length}`;
    }
};
// Restart Quiz Event Listener (Reloads the page from scratch)
document.querySelector('#restart-btn').addEventListener('click', () => {
    window.location.reload();
});

// Initialize app with the first question
renderQuestion();   