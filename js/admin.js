export function renderAdmin(app) {
  app.innerHTML = `
    <main class="container">
      <h1>강사 화면</h1>

      <section id="loginBox" class="card">
        <h2>관리자 입장</h2>
        <input id="adminPassword" type="password" placeholder="비밀번호 입력">
        <button id="adminLoginBtn">입장하기</button>
        <p id="loginMessage"></p>
      </section>

      <section id="adminPanel" class="card hidden">
        <h2>게임 관리</h2>

        <h3>주제 선택</h3>
        <div class="button-group">
          <button data-topic="fruit">과일</button>
          <button data-topic="animal">동물</button>
          <button data-topic="country">나라</button>
          <button data-topic="flower">꽃</button>
        </div>

        <h3>단어 변경 시간</h3>
        <div class="button-group">
          <button data-interval="3">3초</button>
          <button data-interval="5">5초</button>
          <button data-interval="10">10초</button>
        </div>

        <button class="start" id="startBtn">게임 시작</button>
        <button class="reset" id="resetBtn">초기화</button>

        <div id="adminScoreBoard"></div>
      </section>
    </main>
  `;

  const loginBtn = document.querySelector("#adminLoginBtn");
  const passwordInput = document.querySelector("#adminPassword");
  const loginMessage = document.querySelector("#loginMessage");
  const loginBox = document.querySelector("#loginBox");
  const adminPanel = document.querySelector("#adminPanel");

  loginBtn.addEventListener("click", async () => {
    const password = passwordInput.value;

    try {
      const response = await fetch("/api/check-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        loginBox.classList.add("hidden");
        adminPanel.classList.remove("hidden");
      } else {
        loginMessage.textContent = "비밀번호가 맞지 않습니다.";
      }
    } catch (error) {
      loginMessage.textContent = "관리자 확인 중 오류가 발생했습니다.";
    }
  });
}
