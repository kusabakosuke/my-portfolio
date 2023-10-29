const quizText = document.getElementById("quiz-text");
const marjongButton = document.getElementById("marjong");
const keibaButton = document.getElementById("keiba");
const pachinkoButton = document.getElementById("pachinko");
const nextQuizButton = document.getElementById("next-quiz");
const fbImage = document.getElementById("fb-image");
const feedBack = document.getElementById("feedback");
// クイズの内容
const quiz = {
  text: "草場の趣味は何でしょう!!",
  choices: [
    {
      text: "麻雀",
      feedBack: "正解！草場はどれだけ忙しくても週一で麻雀を打ちます",
      image: "images/marjong.jpeg",
      alt: "麻雀の写真",
    },
    {
      text: "競馬",
      feedBack: "正解！毎週競馬をしてます！押し馬はダノンベルーガです",
      image: "images/keiba.jpeg",
      alt: "競馬の写真",
    },
    {
      text: "パチンコ",
      feedBack: "残念！これは不正解。なぜかパチンコだけはしません。",
      image: "images/pachinko.jpeg",
      alt: "パチンコの写真",
    },
  ],
};

// クイズの骨格づくり
const reloadQuiz = function () {
  quizText.textContent = "Q" + quiz.text;
  marjongButton.textContent = quiz.choices[0].text;
  keibaButton.textContent = quiz.choices[1].text;
  pachinkoButton.textContent = quiz.choices[2].text;
};
// 各ボタンを押した時の動作
const choose = function (choiceNumber) {
  feedBack.textContent = quiz.choices[choiceNumber].feedBack;
  fbImage.src = quiz.choices[choiceNumber].image;
  fbImage.alt = quiz.choices[choiceNumber].alt;
};

marjongButton.onclick = function () {
  choose(0);
};
keibaButton.onclick = function () {
  choose(1);
};
pachinkoButton.onclick = function () {
  choose(2);
};
reloadQuiz();
