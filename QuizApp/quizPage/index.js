const questions = [
  {
    question: "What is the capital of India?",
    options: {
      a: "Mumbai",
      b: "Delhi",
      c: "Kolkata",
      d: "Chennai",
    },
    answer: "b"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      a: "Earth",
      b: "Venus",
      c: "Mars",
      d: "Jupiter",
    },
    answer: "c"
  },
  {
    question: "What is 5 + 3?",
    options: {
      a: "5",
      b: "8",
      c: "10",
      d: "6",
    },
    answer: "b"
  },
  {
    question: "Which language is used for web development?",
    options: {
      a: "Python",
      b: "C++",
      c: "JavaScript",
      d: "Java",
    },
    answer: "c"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: {
      a: "Tiger",
      b: "Elephant",
      c: "Lion",
      d: "Bear",
    },
    answer: "c"
  }
];


document.addEventListener("DOMContentLoaded", () => {
  console.log("Data add");
  document.getElementById("question").innerText = questions[0].question;
  document.getElementById("option1").innerText = questions[0].options["a"];
  document.getElementById("option2").innerText = questions[0].options["b"];
  document.getElementById("option3").innerText = questions[0].options["c"];
  document.getElementById("option4").innerText = questions[0].options["d"];
});