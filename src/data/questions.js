const questions = [
  {
    id: 1,
    question: "첫 출근 날, 팀장이 회식 자리를 주도하라고 한다면?",
    options: [
      { text: "사람 잘 보셨네! 능숙하게 분위기를 이끈다", type: "ceo" },
      { text: "하핫;; 어색함을 풀기 위해 오디오를 꽉 채운다", type: "comic" },
      { text: "팀 분위기를 파악 후 즐거운 회식자리 만들기 검색", type: "genius" },
    ],
  },
  {
    id: 2,
    question: "친구가 갑자기 깜짝 여행을 제안한다면?",
    options: [
      { text: "바로 OK! 어떤 여행이라도 자신있어", type: "passion" },
      { text: "잠깐! 깜짝 여행도 계획부터 꼼꼼하게", type: "realist" },
      { text: "즉흥적인 여행도 가끔은 좋은 추억", type: "romantic" },
    ],
  },
  {
    id: 3,
    question: "단체 프로젝트에서 리더가 사라졌다! 당신의 반응은?",
    options: [
      { text: "나를 따르라! 주도권을 잡는다", type: "ceo" },
      { text: "팀 분위기를 살리며 최대한 협력한다", type: "warmHero" },
      { text: "당면한 문제 철저하게 파악, 그리고 해결", type: "genius" }, 
    ],
  },
  {
    id: 4,
    question: "중요한 마감이 내일인데 준비가 덜 됐다면?",
    options: [
      { text: "오늘 잠은 내일! 밤새워서라도 끝내버린다", type: "passion" }, 
      { text: "다 못가져 감! 리스크를 분석하고 대비책 마련", type: "realist" },
      { text: "유머 한 스푼, 팀의 긴장을 풀며 아이디어를 함께 모은다", type: "comic" },
    ],
  },
  {
    id: 5,
    question: "연인과 다툴 때 나는?",
    options: [
      { text: "공과 사는 확실히! 논리적으로 하나 하나 반박한다", type: "realist" },
      { text: "왜 그래에에~~ 화해 분위기 위해 애교", type: "comic" },
      { text: "나의 감정을 솔직하게 표현! 네 마음은 어때?", type: "romantic" },
    ],
  },
  {
    id: 6,
    question: "직장에서 선배가 무리한 부탁을 한다면?",
    options: [
      { text: "죄송합니다! 정중하게 거절", type: "tsundere" },
      { text: "저런저런... 어쩔 수 없이 들어준다", type: "warmHero" },
      { text: "맡겨만 주십쇼! 제가 해보겠습니다", type: "passion" },
    ],
  },
  {
    id: 7,
    question: "휴일에 나는?",
    options: [
      { text: "남들 놀 때 목표 설정 후 자기계발", type: "ceo" },
      { text: "신작 뜬거 없나? 영화나 드라마 몰아보기", type: "romantic" },
      { text: "머리가 복잡해! 차분히 집안 정리하며 쉬기", type: "realist" },
    ],
  },
  {
    id: 8,
    question: "갈등 상황에서 나는?",
    options: [
      { text: "왜들 그래? 이리와봐! 중재자 역할", type: "warmHero" },
      { text: "또 시작이군... 에효~ 차라리 피한다", type: "tsundere" },
      { text: "저들의 문제는 뭘까? 논리적 분석, 해결방안 제시", type: "genius" },
    ],
  },
  {
    id: 9,
    question: "당신의 감성 포인트는?",
    options: [
      { text: "재치있는 말 솜씨, 유쾌한 분위기", type: "comic" },
      { text: "섬세한 감정선, 따뜻하고 인간적인 장면", type: "romantic" },
      { text: "불타는 도전 정신과 불굴의 의지", type: "passion" },
    ],
  },
  {
    id: 10,
    question: "사랑을 표현할 때 나는?",
    options: [
      { text: "화끈하게 직진 고백", type: "passion" },
      { text: "작은 행동으로 은근히 표현", type: "warmHero" },
      { text: "툭 던지는 말로 표현", type: "tsundere" },
    ],
  },
  {
    id: 11,
    question: "직장에서 신입사원이 실수했다면?",
    options: [
      { text: "잘하고 있어! 차분히 가르치며 격려", type: "warmHero" },
      { text: "왜 이걸 못하지? 분석해서 해결책 찾기", type: "genius" },
      { text: "괜찮아! 다 그런거지~ 오늘 퇴근 못하는 거지? ^^", type: "comic" },
    ],
  },
  {
    id: 12,
    question: "중요한 선택 앞에서 나는?",
    options: [
      { text: "논리와 데이터 기반", type: "realist" },
      { text: "마음이 끌리는 대로", type: "romantic" },
      { text: "일단 실행하고 본다", type: "ceo" },
    ],
  },
  {
    id: 13,
    question: "누군가 나를 놀릴 때 나는?",
    options: [
      { text: "내가 좀 그런사람이지! 능글맞게 유머로 응수", type: "comic" },
      { text: "(중이 제 머리 못 깎지) 차분히 받아 넘김", type: "warmHero" },
      { text: "뭐래? 툭 던지는 뼈있는 한마디로 마무리", type: "tsundere" },
    ],
  },
  {
    id: 14,
    question: "연애 초기, 나는?",
    options: [
      { text: "심장 잘 챙겨라! 서프라이즈 이벤트 준비", type: "romantic" },
      { text: "이거 좋아한다는거 기억해! 상대을 따뜻하고 세심하게 챙김", type: "warmHero" },
      { text: "오다 주웠다! 내 페이스를 유지하며 선 긋기", type: "tsundere" },
    ],
  },
  {
    id: 15,
    question: "팀에서 내가 맡는 역할은?",
    options: [
      { text: "조직을 이끄는 리더", type: "ceo" },
      { text: "분위기를 띄우는 엔터테이너", type: "comic" },
      { text: "불타는 열정으로 팀에 에너지 제공", type: "passion" },
    ],
  },
  {
    id: 16,
    question: "내가 중요하게 생각하는 가치는?",
    options: [
      { text: "삶의 안정과 현실적 균형", type: "realist" },
      { text: "사람들과의 애정과 감정의 깊이", type: "romantic" },
      { text: "자기 계발을 통한 성장과 도전", type: "passion" },
    ],
  },
];

export default questions;
