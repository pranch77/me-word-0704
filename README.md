# 실시간 단어 찾기 게임

Firebase Realtime Database + GitHub + Vercel을 활용한 실시간 멀티플레이 교육용 게임입니다.

## 주요 기능

- 참가자 실시간 입장
- 강사(Admin) 화면
- 주제 선택: 과일, 동물, 나라, 꽃
- 단어 자동 변경: 3초 / 5초 / 10초
- 60초 게임 진행
- 맞는 단어 클릭 +1점
- 틀린 단어 클릭 -1점
- 효과음 지원
- 실시간 순위
- 게임 종료 후 TOP3 발표
- 초기화 기능

## 프로젝트 구조

```text
word-find-game/
├── index.html
├── style.css
├── app.js
├── js/
│   ├── firebase.js
│   ├── admin.js
│   ├── player.js
│   ├── game.js
│   ├── words.js
│   └── sound.js
├── api/
│   └── check-admin.js
├── assets/
└── README.md
```

## 관리자 인증

관리자는 `/admin`으로 접속합니다.

관리자 비밀번호는 코드에 직접 쓰지 않고 Vercel 환경변수에 저장합니다.

```text
ADMIN_PASSWORD=원하는비밀번호
```

## 실행 방법

1. 이 폴더를 GitHub 저장소에 업로드합니다.
2. Vercel에서 GitHub 저장소를 연결합니다.
3. Vercel 환경변수에 `ADMIN_PASSWORD`를 등록합니다.
4. 배포 후 기본 주소는 참가자 화면, `/admin`은 강사 화면으로 사용합니다.

## 다음 개발 단계

1. Firebase 프로젝트 생성
2. Realtime Database 생성
3. Firebase Config 입력
4. 참가자 점수 실시간 저장
5. 강사 설정 실시간 반영
6. 게임 종료 후 순위 표시
