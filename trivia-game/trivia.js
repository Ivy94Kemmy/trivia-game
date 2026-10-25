
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Store trivia questions as an array of objects.
const questions = [
  {
    question: "Which language runs directly in a web browser?",
    options: ["1. Python", "2. JavaScript", "3. C++", "4. Java"],
    answer: "2"
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    options: ["1. let", "2. var", "3. const", "4. fixed"],
    answer: "3"
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["1. pop()", "2. push()", "3. shift()", "4. map()"],
    answer: "2"
  },
  {
    question: "Which method selects an HTML element?",
    options: [
      "1. querySelector()",
      "2. createElement()",
      "3. push()",
      "4. setTimeout()"
    ],
    answer: "1"
  },
  {
    question: "Which keyword is used to wait for a Promise?",
    options: ["1. wait", "2. defer", "3. async", "4. await"],
    answer: "4"
  }
];

let score = 0;
const results = [];
const TIME_LIMIT = 15;

// Ask the player for input.
function ask(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, resolve);
  });
}

// Display a question and enforce a time limit.
function askWithTimer(question, timeLimit) {
  return new Promise((resolve) => {
    let answered = false;

    const timer = setTimeout(() => {
      if (answered) return;

      answered = true;
      console.log("\n⏰ Time is up!");
      rl.close();
      resolve(null);
    }, timeLimit * 1000);

    rl.question("Your answer (enter 1, 2, 3, or 4): ", (answer) => {
      if (answered) return;

      answered = true;
      clearTimeout(timer);
      resolve(answer.trim());
    });
  });
}

// Run the quiz.
async function startGame() {
  console.log("\n================================");
  console.log("       WELCOME TO TRIVIA!");
  console.log("================================");
  console.log("Test your JavaScript knowledge.");
  console.log(`You have ${TIME_LIMIT} seconds per question.\n`);

  const start = (await ask("Would you like to start? (yes/no): "))
    .trim()
    .toLowerCase();

  if (start !== "yes" && start !== "y") {
    console.log("Thanks for visiting. Goodbye!");
    rl.close();
    return;
  }

  const startTime = Date.now();

  // Use a loop to display questions sequentially.
  for (let i = 0; i < questions.length; i++) {
    const current = questions[i];

    console.log(`\nQuestion ${i + 1} of ${questions.length}`);
    console.log(current.question);

    // Use map() to display the available options.
    current.options.map((option) => console.log(option));

    const answer = await askWithTimer(current, TIME_LIMIT);

    // Stop if the player runs out of time.
    if (answer === null) {
      results.push({
        question: current.question,
        correct: false,
        status: "Timed out"
      });
      break;
    }

    const isCorrect = answer === current.answer;

    if (isCorrect) {
      console.log("✅ Correct! Well done.");
      score++;
    } else {
      console.log(
        `❌ Incorrect. The correct answer was ${current.answer}.`
      );
    }

    results.push({
      question: current.question,
      correct: isCorrect,
      status: isCorrect ? "Correct" : "Incorrect"
    });
  }

  displayResults(startTime);
}

// Display the player's final performance.
function displayResults(startTime) {
  const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

  console.log("\n================================");
  console.log("          QUIZ RESULTS");
  console.log("================================");
  console.log(`Questions answered: ${results.length}`);
  console.log(`Correct answers: ${score}`);
  console.log(`Incorrect or timed-out answers: ${
    results.filter((result) => !result.correct).length
  }`);
  console.log(`Final score: ${score}/${questions.length}`);
  console.log(`Time taken: ${elapsedSeconds} seconds`);

  if (score === questions.length) {
    console.log("Excellent! Perfect score! 🏆");
  } else if (score >= Math.ceil(questions.length / 2)) {
    console.log("Good job! Keep practising. 🎉");
  } else {
    console.log("Keep learning and try again! 💪");
  }

  console.log("\nThank you for playing!");
  rl.close();
}

// Handle unexpected errors.
startGame().catch((error) => {
  console.error("Something went wrong:", error.message);
  rl.close();
});
