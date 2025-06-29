const questions = [
    {
        question: "বিশ্ব ব্রেইল দিবস কবে পালন করা হয়?",
        options: ["জানুয়ারি 4", "জানুয়ারি 9", "জানুয়ারি 12", "জানুয়ারি 15"],
        answer: "জানুয়ারি 4"
    },
    {
        question: "জাতীয় যুব দিবস (স্বামী বিবেকানন্দের জন্মদিন) কবে পালিত হয়?",
        options: ["জানুয়ারি 10", "জানুয়ারি 12", "জানুয়ারি 15", "জানুয়ারি 23"],
        answer: "জানুয়ারি 12"
    },
    {
        question: "ভারতীয় সেনা দিবস কবে পালন করা হয়?",
        options: ["জানুয়ারি 11", "জানুয়ারি 14", "জানুয়ারি 15", "জানুয়ারি 26"],
        answer: "জানুয়ারি 15"
    },
    {
        question: "জাতীয় ভোটার দিবস কবে পালন করা হয়?",
        options: ["জানুয়ারি 24", "জানুয়ারি 25", "জানুয়ারি 26", "জানুয়ারি 30"],
        answer: "জানুয়ারি 25"
    },
    {
        question: "শহীদ দিবস (মহাত্মা গান্ধীর মৃত্যুবার্ষিকী) কবে পালন করা হয়?",
        options: ["জানুয়ারি 27", "জানুয়ারি 28", "জানুয়ারি 29", "জানুয়ারি 30"],
        answer: "জানুয়ারি 30"
    },
    {
        question: "বিশ্ব জলাভূমি দিবস (World Wetlands Day) কবে পালন করা হয়?",
        options: ["ফেব্রুয়ারি 1", "ফেব্রুয়ারি 2", "ফেব্রুয়ারি 4", "ফেব্রুয়ারি 5"],
        answer: "ফেব্রুয়ারি 2"
    },
    {
        question: "বিশ্ব ক্যান্সার দিবস কবে পালন করা হয়?",
        options: ["ফেব্রুয়ারি 4", "ফেব্রুয়ারি 7", "ফেব্রুয়ারি 9", "ফেব্রুয়ারি 12"],
        answer: "ফেব্রুয়ারি 4"
    },
    {
        question: "আন্তর্জাতিক মাতৃভাষা দিবস কবে পালন করা হয়?",
        options: ["ফেব্রুয়ারি 18", "ফেব্রুয়ারি 21", "ফেব্রুয়ারি 24", "ফেব্রুয়ারি 28"],
        answer: "ফেব্রুয়ারি 21"
    },
    {
        question: "জাতীয় বিজ্ঞান দিবস কবে পালন করা হয়?",
        options: ["ফেব্রুয়ারি 26", "ফেব্রুয়ারি 27", "ফেব্রুয়ারি 28", "ফেব্রুয়ারি 29"],
        answer: "ফেব্রুয়ারি 28"
    },
    {
        question: "বিশ্ব বন্যপ্রাণী দিবস কবে পালন করা হয়?",
        options: ["মার্চ 1", "মার্চ 3", "মার্চ 5", "মার্চ 8"],
        answer: "মার্চ 3"
    },
    {
        question: "আন্তর্জাতিক নারী দিবস কবে পালন করা হয়?",
        options: ["মার্চ 6", "মার্চ 8", "মার্চ 10", "মার্চ 12"],
        answer: "মার্চ 8"
    },
    {
        question: "বিশ্ব জল দিবস কবে পালন করা হয়?",
        options: ["মার্চ 20", "মার্চ 21", "মার্চ 22", "মার্চ 23"],
        answer: "মার্চ 22"
    },
    {
        question: "বিশ্ব আবহাওয়া দিবস কবে পালন করা হয়?",
        options: ["মার্চ 21", "মার্চ 22", "মার্চ 23", "মার্চ 24"],
        answer: "মার্চ 23"
    },
    {
        question: "বিশ্ব যক্ষ্মা দিবস (World TB Day) কবে পালন করা হয়?",
        options: ["মার্চ 23", "মার্চ 24", "মার্চ 25", "মার্চ 27"],
        answer: "মার্চ 24"
    },
    {
        question: "বিশ্ব স্বাস্থ্য দিবস কবে পালন করা হয়?",
        options: ["এপ্রিল 6", "এপ্রিল 7", "এপ্রিল 9", "এপ্রিল 10"],
        answer: "এপ্রিল 7"
    },
    {
        question: "জাফরান দিবস (World Homeopathy Day) কবে পালন করা হয়?",
        options: ["এপ্রিল 8", "এপ্রিল 9", "এপ্রিল 10", "এপ্রিল 11"],
        answer: "এপ্রিল 10"
    },
    {
        question: "জালিয়ানওয়ালাবাগ গণহত্যা স্মৃতি দিবস কবে পালন করা হয়?",
        options: ["এপ্রিল 10", "এপ্রিল 11", "এপ্রিল 12", "এপ্রিল 13"],
        answer: "এপ্রিল 13"
    },
    {
        question: "বিশ্ব ঐতিহ্য দিবস (World Heritage Day) কবে পালন করা হয়?",
        options: ["এপ্রিল 15", "এপ্রিল 18", "এপ্রিল 20", "এপ্রিল 22"],
        answer: "এপ্রিল 18"
    },
    {
        question: "পৃথিবী দিবস (Earth Day) কবে পালন করা হয়?",
        options: ["এপ্রিল 20", "এপ্রিল 21", "এপ্রিল 22", "এপ্রিল 23"],
        answer: "এপ্রিল 22"
    },
    {
        question: "বিশ্ব বই এবং কপিরাইট দিবস কবে পালন করা হয়?",
        options: ["এপ্রিল 21", "এপ্রিল 22", "এপ্রিল 23", "এপ্রিল 24"],
        answer: "এপ্রিল 23"
    },
    {
        question: "জাতীয় পঞ্চায়েতি রাজ দিবস কবে পালন করা হয়?",
        options: ["এপ্রিল 22", "এপ্রিল 23", "এপ্রিল 24", "এপ্রিল 25"],
        answer: "এপ্রিল 24"
    },
    {
        question: "বিশ্ব ম্যালেরিয়া দিবস কবে পালন করা হয়?",
        options: ["এপ্রিল 24", "এপ্রিল 25", "এপ্রিল 26", "এপ্রিল 27"],
        answer: "এপ্রিল 25"
    },
    {
        question: "বিশ্ব মেধা সম্পত্তি দিবস (World Intellectual Property Day) কবে পালন করা হয়?",
        options: ["এপ্রিল 25", "এপ্রিল 26", "এপ্রিল 27", "এপ্রিল 28"],
        answer: "এপ্রিল 26"
    },
    {
        question: "আন্তর্জাতি নৃত্য দিবস (International Dance Day) কবে পালন করা হয়?",
        options: ["এপ্রিল 28", "এপ্রিল 29", "এপ্রিল 30", "মে 1"],
        answer: "এপ্রিল 29"
    },
    {
        question: "আন্তর্জাতিক শ্রমিক দিবস (International Workers' Day / May Day) কবে পালন করা হয়?",
        options: ["এপ্রিল 30", "মে 1", "মে 2", "মে 3"],
        answer: "মে 1"
    }
];
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let selectedOption = null;
let answeredQuestions = new Array(questions.length).fill(false);
let questionTimerInterval;
const questionTimeLimit = 30;
let questionTimeLeft;
let userName = ''; // ব্যবহারকারীর নাম সংরক্ষণের জন্য ভেরিয়েবল

// DOM Elements
const nameInputScreen = document.getElementById('nameInputScreen');
const userNameInput = document.getElementById('userNameInput');
const proceedToStartScreenButton = document.getElementById('proceedToStartScreenButton');
const nameInputMessage = document.getElementById('nameInputMessage');

const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');

const totalQuestionsInfo = document.getElementById('totalQuestionsInfo');
const fullMarksInfo = document.getElementById('fullMarksInfo');
const timeLimitInfo = document.getElementById('timeLimitInfo');

const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const scoreDisplayElem = document.getElementById('scoreDisplay');
const questionIndexDisplayElem = document.getElementById('questionIndexDisplay');

const questionTextBox = document.getElementById('questionTextBox');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const submitButton = document.getElementById('submitButton');

const questionTimerTextElem = document.getElementById('questionTimer');
const progressRingBar = document.querySelector('.progress-ring-bar');
const circumference = 2 * Math.PI * 35;
progressRingBar.style.strokeDasharray = circumference;
progressRingBar.style.strokeDashoffset = circumference;

const rankListElem = document.getElementById('rankList');

// Set initial info on start screen
totalQuestionsInfo.textContent = questions.length;
fullMarksInfo.textContent = questions.length;
timeLimitInfo.textContent = Math.ceil(questions.length * questionTimeLimit / 60);

// --- Event Listeners ---
proceedToStartScreenButton.addEventListener('click', handleNameInputAndShowStartScreen);
startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', handleNextQuestion);
skipButton.addEventListener('click', handleSkipQuestion);
submitButton.addEventListener('click', handleSubmitQuiz);


// --- Name Input and Screen Flow ---
function handleNameInputAndShowStartScreen() {
    const inputName = userNameInput.value.trim();
    if (inputName === '') {
        nameInputMessage.textContent = "আপনার নাম লিখুন কুইজ শুরু করার জন্য।";
        return;
    }
    userName = inputName; // ব্যবহারকারীর নাম সংরক্ষণ করুন
    nameInputMessage.textContent = ''; // মেসেজ মুছে ফেলুন

    nameInputScreen.classList.remove('active');
    startScreen.classList.add('active'); // নাম ইনপুট করার পর startScreen দেখান
}


function startQuiz() { // startScreen থেকে কুইজ শুরু করার ফাংশন
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    resetQuizState(); // কুইজ স্টেট রিসেট করুন কুইজ শুরু করার আগে
    loadQuestion();
    scoreDisplayElem.textContent = score;
}

function resetQuizState() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    skippedCount = 0;
    selectedOption = null;
    answeredQuestions = new Array(questions.length).fill(false);
    clearInterval(questionTimerInterval); // নিশ্চিত করুন কোনো টাইমার চলছে না
}


function updateQuestionTimerDisplay() {
    questionTimerTextElem.textContent = questionTimeLeft;

    const offset = circumference - (questionTimeLeft / questionTimeLimit) * circumference;
    progressRingBar.style.strokeDashoffset = offset;

    // Change color based on time left
    if (questionTimeLeft <= 10) {
        progressRingBar.style.stroke = '#FF6347';
    } else if (questionTimeLeft <= 20) {
        progressRingBar.style.stroke = '#FFD700';
    } else {
        progressRingBar.style.stroke = '#28a745';
    }
}

function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimeLeft = questionTimeLimit;
    updateQuestionTimerDisplay();
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            // Only proceed if the question hasn't been answered yet
            if (!answeredQuestions[currentQuestionIndex]) {
                handleTimeUp();
            }
        }
    }, 1000);
}


function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        handleSubmitQuiz();
        return;
    }
    clearInterval(questionTimerInterval);
    startQuestionTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionIndexDisplayElem.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    questionTextBox.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    feedbackMessage.textContent = '';
    feedbackMessage.style.color = 'transparent';
    selectedOption = null;

    nextButton.style.display = 'none';
    skipButton.style.display = 'inline-block';
    submitButton.style.display = 'none';

    if (currentQuestionIndex === questions.length - 1) {
        submitButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        skipButton.style.display = 'none';
    }

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });

    enableOptions();
}


function selectOption(selectedButton, selectedAnswer) {
    if (answeredQuestions[currentQuestionIndex]) return; // Already answered, do nothing

    clearInterval(questionTimerInterval); // Stop the timer as soon as an option is selected

    disableOptions(); // Disable options to prevent multiple clicks

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    selectedButton.classList.add('selected');

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score += 1;
        correctCount++;
        feedbackMessage.textContent = 'সঠিক উত্তর!';
        feedbackMessage.style.color = '#28a745';
    } else {
        selectedButton.classList.add('wrong');
        score -= 0.33;
        wrongCount++;
        feedbackMessage.textContent = `ভুল উত্তর। সঠিক উত্তর: ${correctAnswer}`;
        feedbackMessage.style.color = '#dc3545';

        // Highlight the correct answer if the selected one was wrong
        Array.from(optionsContainer.children).forEach(optionBtn => {
            if (optionBtn.textContent === correctAnswer) {
                optionBtn.classList.add('correct');
            }
        });
    }

    scoreDisplayElem.textContent = score.toFixed(2);
    answeredQuestions[currentQuestionIndex] = true; // Mark as answered

    // Show appropriate buttons
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function handleTimeUp() {
    // This check is crucial for preventing double-skips or skips after an answer
    if (answeredQuestions[currentQuestionIndex]) return;

    skippedCount++;
    answeredQuestions[currentQuestionIndex] = true; // Mark as answered/skipped

    showAnswer(); // Show the correct answer
    disableOptions(); // Disable options

    // Automatically move to the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000); // 2 seconds delay
}

function showAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    Array.from(optionsContainer.children).forEach(optionBtn => {
        optionBtn.style.pointerEvents = 'none'; // Ensure no further clicks
        if (optionBtn.textContent === correctAnswer) {
            optionBtn.classList.add('correct'); // Highlight correct answer
        }
    });
    feedbackMessage.textContent = `সঠিক উত্তর: ${correctAnswer}`;
    feedbackMessage.style.color = '#ffc107'; // Yellow/Orange color for skipped answer

    // Ensure buttons are correctly displayed after showing answer
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function disableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

function enableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.classList.remove('selected', 'correct', 'wrong');
    });
}


function handleNextQuestion() {
    // If user clicks Next without selecting an option, treat as skipped
    if (!answeredQuestions[currentQuestionIndex]) {
        clearInterval(questionTimerInterval); // Stop timer
        skippedCount++;
        answeredQuestions[currentQuestionIndex] = true;
        showAnswer(); // Show answer for skipped question
        disableOptions(); // Disable options
        // Wait briefly before moving to next question for skipped questions
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1000); // Shorter delay for manual skip
    } else {
        // If already answered, just move to next
        currentQuestionIndex++;
        loadQuestion();
    }
}

function handleSkipQuestion() {
    // This is essentially the same as handleTimeUp, but triggered by button click
    if (!answeredQuestions[currentQuestionIndex]) {
        clearInterval(questionTimerInterval);
        skippedCount++;
        answeredQuestions[currentQuestionIndex] = true;

        showAnswer();
        disableOptions();

        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1000); // Shorter delay for manual skip
    }
}


function handleSubmitQuiz() {
    clearInterval(questionTimerInterval); // Stop any running timer
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    document.getElementById('finalTotalQuestions').textContent = questions.length;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
    document.getElementById('skippedQuestions').textContent = skippedCount;
    document.getElementById('finalScore').textContent = score.toFixed(2);
    document.getElementById('finalFullMarks').textContent = questions.length;

    // Firebase-এ ফলাফল সেভ করুন এবং র‍্যাঙ্কিং লোড করুন
    saveQuizResult();
    displayRankings();
}

// Firebase-এ ফলাফল সেভ করুন
function saveQuizResult() {
    // নিশ্চিত করুন ব্যবহারকারীর নাম আছে
    if (!userName) {
        console.error("ব্যবহারকারীর নাম পাওয়া যায়নি। ফলাফল সেভ করা যাবে না।");
        alert("আপনার নাম ছাড়া ফলাফল সেভ করা যাবে না।");
        return;
    }

    // Firebase-এর 'quizResults' পাথে এবং QUIZ_ID এর অধীনে ডেটা পুশ করুন
    // খেয়াল রাখবেন QUIZ_ID কে অবশ্যই index.html এ সংজ্ঞায়িত করতে হবে।
    database.ref('quizResults/' + QUIZ_ID).push({
        name: userName, // কুইজের শুরুতে নেওয়া নাম
        score: score.toFixed(2), // স্কোর দশমিক সংখ্যা হিসেবে সেভ করুন
        correct: correctCount,
        wrong: wrongCount,
        skipped: skippedCount,
        totalQuestions: questions.length,
        timestamp: new Date().toISOString() // কখন কুইজ দেওয়া হয়েছে
    })
    .then(() => {
        console.log("ফলাফল সফলভাবে Firebase-এ সেভ হয়েছে!");
    })
    .catch((error) => {
        console.error("ফলাফল সেভ করতে সমস্যা হয়েছে:", error);
        alert("ফলাফল সেভ করতে সমস্যা হয়েছে।");
    });
}

// Firebase থেকে র‍্যাঙ্কিং লোড এবং প্রদর্শন করুন (প্রতি ব্যবহারকারীর সর্বোচ্চ স্কোর)
function displayRankings() {
    rankListElem.innerHTML = '<li>র‍্যাঙ্কিং লোড হচ্ছে...</li>';

    // Firebase-এর 'quizResults/QUIZ_ID' পাথে থেকে ডেটা লোড করুন
    database.ref('quizResults/' + QUIZ_ID).once('value', (snapshot) => {
        const userHighestScores = {}; // প্রতিটি ব্যবহারকারীর সর্বোচ্চ স্কোর সংরক্ষণের জন্য

        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            // Undefined বা invalid নাম এন্ট্রি বাদ দিন
            if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
                // Optionally log to see bad data
                // console.warn("Invalid name found in Firebase data:", data);
                return; // Skip this entry
            }
            // Invalid স্কোর এন্ট্রি বাদ দিন
            const userScore = parseFloat(data.score);
            if (isNaN(userScore)) {
                // Optionally log to see bad data
                // console.warn("Invalid score found for user:", data.name, data.score);
                return; // Skip this entry
            }
            
            const userName = data.name;

            // যদি এই ব্যবহারকারী প্রথমবারের মতো আসে অথবা বর্তমান স্কোর পূর্ববর্তী সর্বোচ্চ স্কোরের চেয়ে বেশি হয়
            if (!userHighestScores[userName] || userScore > userHighestScores[userName].score) {
                userHighestScores[userName] = {
                    name: userName,
                    score: userScore
                };
            }
        });

        // userHighestScores অবজেক্ট থেকে অ্যারে তৈরি করুন
        const rankings = Object.values(userHighestScores);

        // স্কোর অনুযায়ী ডিসেন্ডিং অর্ডারে সর্ট করুন
        rankings.sort((a, b) => b.score - a.score);

        rankListElem.innerHTML = '';
        if (rankings.length === 0) {
            rankListElem.innerHTML = '<li>এখনো কোনো র‍্যাঙ্কিং নেই।</li>';
        } else {
            rankings.forEach((entry, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${index + 1}. ${entry.name} - স্কোর: ${entry.score.toFixed(2)}`;
                rankListElem.appendChild(listItem);
            });
        }
    })
    .catch((error) => {
        console.error("র‍্যাঙ্কিং লোড করতে সমস্যা হয়েছে:", error);
        rankListElem.innerHTML = '<li>র‍্যাঙ্কিং লোড করা যায়নি।</li>';
    });
}
