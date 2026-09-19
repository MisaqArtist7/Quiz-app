const quizAppSection = document.querySelector('.qa-section');
const startBtn = document.querySelector('#start-btn').addEventListener('click', (event) => {
    quizAppSection.classList.add('hidden');
})

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
        correctAnswer: "<a>",
        options: ["<link>", "<href>", "<a>", "<url>"],
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

const questionTitle = document.querySelector("#question-title");
const questionCount = document.querySelector("#question-count");
const optionsContainer = document.querySelector("#options");

const currentQuestion = questions[0];

questionCount.textContent = `1 of ${questions.length}`;

questionTitle.textContent = currentQuestion.title;



let currentQuestionIndex = 0;

function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionCount.textContent = `${currentQuestionIndex + 1} of ${questions.length}`;
    questionTitle.textContent = currentQuestion.title;

    optionsContainer.innerHTML = "";

    currentQuestion.options.map((option) => {
        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", () => {
            if (option === currentQuestion.correctAnswer) {
                currentQuestionIndex++;
                renderQuestion();
            }
        });

        optionsContainer.append(button);
    });
}

renderQuestion();
