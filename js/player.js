import { wordData } from "./words.js";

export function renderPlayer(app) {
  app.innerHTML = `
    <main class="container">
      <h1>실시간 단어 찾기 게임</h1>

      <section id="joinBox" class="card">
        <input id="playerName" placeholder="이름을 입력하세요">
        <button id="joinBtn">참가하기</button>
      </section>

      <section id="gameBox" class="card hidden">
        <h2>현재 주제: <span id="topic">대기 중</span></h2>
        <h2>남은 시간: <span id="timeLeft">60</span>초</h2>
        <h2>내 점수: <span id="score">0</span>점</h2>

        <div id="wordBoard" class="word-board"></div>
        <div id="rankingBox" class="ranking"></div>
      </section>
    </main>
  `;

  const joinBtn = document.querySelector("#joinBtn");
  const joinBox = document.querySelector("#joinBox");
  const gameBox = document.querySelector("#gameBox");
  const wordBoard = document.querySelector("#wordBoard");

  joinBtn.addEventListener("click", () => {
    joinBox.classList.add("hidden");
    gameBox.classList.remove("hidden");

    const sampleWords = [
      ...wordData.fruit.words.slice(0, 9),
      ...wordData.animal.words.slice(0, 9),
      ...wordData.country.words.slice(0, 9),
      ...wordData.flower.words.slice(0, 9)
    ].sort(() => Math.random() - 0.5);

    wordBoard.innerHTML = sampleWords
      .map(word => `<button>${word}</button>`)
      .join("");
  });
}
