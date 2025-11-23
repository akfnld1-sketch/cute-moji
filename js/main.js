// ==========================================
// 0. 데이터 정의
// ==========================================

// 대분류
const MAJOR_OPTIONS = [
  { value: "animal", label: "동물" },
  { value: "human", label: "사람" },
  { value: "etc", label: "아이콘 / 심볼" },
];

// 소분류
const SUB_OPTIONS = {
  animal: [
    { value: "dog", label: "강아지" },
    { value: "cat", label: "고양이" },
    { value: "rabbit", label: "토끼" },
    { value: "bear", label: "곰" },
    { value: "tiger", label: "호랑이" },
    { value: "panda", label: "판다" },
    { value: "hedgehog", label: "고슴도치" },
    { value: "hamster", label: "햄스터" },
    { value: "fox", label: "여우" },
    { value: "bird", label: "새" },
  ],
  human: [
    { value: "officeMan", label: "직장인 남자" },
    { value: "officeWoman", label: "직장인 여자" },
    { value: "student", label: "학생" },
    { value: "child", label: "아이" },
    { value: "seniorMan", label: "시니어 남성" },
    { value: "seniorWoman", label: "시니어 여성" },
    { value: "couple", label: "커플" },
    { value: "friend", label: "친구" },
  ],
  etc: [
    { value: "heartIcon", label: "하트 아이콘" },
    { value: "bubbleIcon", label: "말풍선 아이콘" },
    { value: "symbolIcon", label: "심볼 아이콘" },
    { value: "chatSticker", label: "이모지 스티커" },
  ],
};

// 세분화: 소분류별 10종 (외형/설명 중심)
const DETAIL_BY_SUB = {
  // ---------------- 동물 ----------------
  dog: [
    "작고 복슬복슬한 흰색 말티즈 강아지",
    "곱슬곱슬한 갈색 푸들 강아지",
    "노란색 털의 귀여운 리트리버 강아지",
    "작은 체구의 갈색 치와와 강아지",
    "짧은 다리에 둥근 엉덩이를 가진 웰시 코기 강아지",
    "둥근 검은 점무늬가 있는 달마시안 강아지",
    "검은 털에 갈색 포인트가 있는 도베르만 느낌의 작은 강아지",
    "삼색 털(갈색·흰색·검정)을 가진 비글 강아지",
    "둥근 얼굴과 꼬리를 가진 시바견 스타일 강아지",
    "파스텔 색 목걸이를 찬 작은 믹스견 강아지",
  ],
  cat: [
    "새하얀 털의 단모 흰 고양이",
    "검은 털에 황금색 눈을 가진 블랙 고양이",
    "주황색과 흰색이 섞인 치즈 고양이",
    "검은색·주황색·흰색이 섞인 삼색 고양이",
    "푸른빛이 도는 회색 러시안블루 스타일 고양이",
    "얼굴과 발끝만 어두운 샴 고양이",
    "통통한 몸매의 하얀 장모 고양이",
    "귀가 살짝 접힌 스코티시 폴드 스타일 고양이",
    "귀가 크고 몸이 날씬한 동양풍 고양이",
    "목에 작은 방울 목걸이를 찬 고양이",
  ],
  rabbit: [
    "긴 귀를 가진 흰색 토끼",
    "갈색 귀와 꼬리를 가진 흰색 토끼",
    "온몸이 연한 갈색인 토끼",
    "검은 반점이 군데군데 있는 흰 토끼",
    "귀가 한쪽만 살짝 접힌 토끼",
    "둥근 몸매의 통통한 토끼",
    "목에 작은 리본이 달린 토끼",
    "파스텔 핑크 귀 안쪽이 강조된 토끼",
    "꼬리가 특히 동그란 솜털 같은 토끼",
    "양말을 신은 것처럼 발끝만 다른 색인 토끼",
  ],
  bear: [
    "연갈색 털을 가진 곰돌이 캐릭터",
    "짙은 갈색 털의 포근한 곰돌이 캐릭터",
    "밝은 베이지색 털의 작은 곰돌이",
    "목에 작은 리본을 매고 있는 곰돌이",
    "동글동글한 귀가 강조된 곰돌이",
    "배 부분만 색이 다른 곰돌이",
    "털이 보송보송한 장난감 인형 느낌의 곰돌이",
    "목도리를 두르고 있는 곰돌이",
    "파스텔 톤 털 색을 가진 곰돌이",
    "가슴에 작은 하트 마크가 있는 곰돌이",
  ],
  tiger: [
    "주황색 바탕에 검은 줄무늬를 가진 호랑이",
    "살짝 통통한 몸매의 귀여운 호랑이",
    "연한 갈색 몸에 옅은 줄무늬가 있는 호랑이",
    "작은 귀와 큰 눈을 가진 아기 호랑이",
    "파스텔 주황색 몸에 부드러운 줄무늬가 그려진 호랑이",
    "가슴 부분이 하얀 털로 덮인 호랑이",
    "꼬리 끝이 둥글게 말린 호랑이",
    "이마에 작은 무늬가 있는 호랑이",
    "목에 작은 스카프를 두른 호랑이",
    "발바닥이 특히 동그랗게 표현된 호랑이",
  ],
  panda: [
    "기본 흑백 무늬의 귀여운 판다",
    "눈 주변의 반달 모양 무늬가 또렷한 판다",
    "통통한 배를 가진 판다",
    "작은 귀가 동그랗게 올라간 판다",
    "다리가 짧고 동글한 어린 판다",
    "목에 작은 잎사귀 장식을 단 판다",
    "연한 회색이 섞인 부드러운 톤의 판다",
    "배 부분이 하트 모양으로 밝게 표현된 판다",
    "작은 꼬리가 강조된 판다",
    "귀 한쪽에 작은 리본이 달린 판다",
  ],
  hedgehog: [
    "짧은 가시와 동그란 얼굴을 가진 고슴도치",
    "등 쪽 가시가 진한 갈색인 고슴도치",
    "가시 끝이 연한 색으로 강조된 고슴도치",
    "몸통은 밝은 베이지, 가시는 어두운 갈색인 고슴도치",
    "눈이 크고 둥근 고슴도치",
    "작은 앞발과 동그란 코를 가진 고슴도치",
    "가시가 부드러운 솜털처럼 표현된 고슴도치",
    "목에 작은 종 모양 장식을 단 고슴도치",
    "파스텔 톤으로 전체가 표현된 고슴도치",
    "배가 살짝 나온 통통한 고슴도치",
  ],
  hamster: [
    "둥근 몸에 흰색과 연갈색이 섞인 햄스터",
    "볼이 살짝 통통한 노란 햄스터",
    "얼굴만 하얗고 몸은 갈색인 햄스터",
    "목에 작은 리본이 달린 햄스터",
    "손이 작고 발이 짧은 귀여운 햄스터",
    "귀가 크고 둥근 아기 햄스터",
    "눈이 살짝 큰 스타일의 햄스터",
    "파스텔 톤으로 칠해진 부드러운 색감의 햄스터",
    "배 부분만 흰색으로 강조된 햄스터",
    "작은 꼬리가 강조된 햄스터",
  ],
  fox: [
    "주황색 몸과 하얀 배를 가진 여우",
    "귀와 꼬리 끝이 검은색으로 강조된 여우",
    "길쭉한 꼬리가 부드럽게 표현된 여우",
    "연한 갈색 몸에 하얀 얼굴을 가진 여우",
    "파스텔 오렌지 톤의 귀여운 여우",
    "귀가 살짝 큰 아기 여우",
    "눈이 크고 동그란 여우",
    "목에 작은 스카프를 두른 여우",
    "꼬리를 몸 옆으로 둥글게 말고 있는 여우",
    "눈썹이 살짝 진하게 표현된 여우",
  ],
  bird: [
    "작고 동그란 몸을 가진 노란 새",
    "연한 파란색 몸에 하얀 배를 가진 새",
    "초록색 몸과 노란 부리를 가진 새",
    "몸통은 흰색, 날개와 머리는 파란색인 새",
    "분홍빛이 도는 파스텔 새",
    "부리와 발이 주황색인 작은 새",
    "깃털이 살짝 부풀어 있는 둥근 새",
    "머리에 작은 깃털 장식이 있는 새",
    "꼬리가 짧고 귀여운 스타일의 새",
    "날개가 살짝 크게 그려진 새",
  ],

  // ---------------- 사람 ----------------
  officeMan: [
    "단정한 흰 셔츠와 넥타이를 맨 직장인 남성",
    "파란 셔츠와 검은 슬랙스를 입은 직장인 남성",
    "회색 정장을 입은 직장인 남성",
    "목에 사원증을 걸고 있는 직장인 남성",
    "조끼와 셔츠를 함께 입은 직장인 남성",
    "카디건과 셔츠를 레이어드한 직장인 남성",
    "노트북을 들고 있는 직장인 남성",
    "셔츠 소매를 걷어 올린 직장인 남성",
    "가방 끈을 한쪽 어깨에 건 직장인 남성",
    "안경을 쓴 직장인 남성",
  ],
  officeWoman: [
    "블라우스와 슬랙스를 입은 직장인 여성",
    "자켓과 스커트를 입은 직장인 여성",
    "카디건 위에 사원증을 맨 직장인 여성",
    "머리를 하나로 묶은 직장인 여성",
    "하프업 헤어스타일의 직장인 여성",
    "노트북을 안고 있는 직장인 여성",
    "한 손에 다이어리를 든 직장인 여성",
    "셔츠와 조끼를 입은 직장인 여성",
    "크로스백을 매고 있는 직장인 여성",
    "안경을 쓴 직장인 여성",
  ],
  student: [
    "단정한 교복을 입은 남학생 모범생",
    "헐렁한 교복 상의와 운동화를 신은 남학생",
    "앞머리가 가지런한 여학생 모범생",
    "헤어핀과 느슨한 넥타이를 한 여학생",
    "초등학교 남자아이 교복 스타일 학생",
    "초등학교 여자아이 교복 스타일 학생",
    "체육복 상하의를 입은 남학생",
    "체육복 상하의를 입은 여학생",
    "후드티와 청바지를 입은 남학생",
    "오버핏 니트와 스커트를 입은 여학생",
  ],
  child: [
    "티셔츠와 반바지를 입은 어린이",
    "멜빵바지를 입은 어린이",
    "별 무늬 티셔츠를 입은 어린이",
    "줄무늬 상의를 입은 어린이",
    "동물 귀가 달린 후드티를 입은 어린이",
    "짧은 바지와 운동화를 신은 어린이",
    "원피스를 입은 어린이",
    "모자를 쓰고 있는 어린이",
    "목에 작은 가방을 멘 어린이",
    "파스텔 톤 옷을 입은 어린이",
  ],
  seniorMan: [
    "짧은 회색 머리와 온화한 인상의 시니어 남성",
    "머리가 약간 벗겨졌지만 부드러운 인상의 시니어 남성",
    "얇은 안경을 쓴 시니어 남성",
    "카라 있는 니트를 입은 시니어 남성",
    "조끼와 셔츠를 함께 입은 시니어 남성",
    "목에 머플러를 두른 시니어 남성",
    "카디건과 셔츠를 입은 시니어 남성",
    "모자를 쓴 시니어 남성",
    "지팡이를 가볍게 짚은 시니어 남성",
    "체크 셔츠를 입은 시니어 남성",
  ],
  seniorWoman: [
    "짧은 회색 머리를 한 시니어 여성",
    "머리를 자연스럽게 말아 올린 시니어 여성",
    "동그란 안경을 쓴 시니어 여성",
    "니트 가디건을 입은 시니어 여성",
    "꽃무늬 블라우스를 입은 시니어 여성",
    "목에 스카프를 두른 시니어 여성",
    "앞치마를 맨 시니어 여성",
    "머리띠를 한 시니어 여성",
    "원피스를 입은 시니어 여성",
    "카디건과 치마를 입은 시니어 여성",
  ],
  couple: [
    "티셔츠와 바지를 맞춰 입은 커플",
    "후드티 커플룩을 입은 남녀 커플",
    "스트라이프 셔츠를 맞춰 입은 커플",
    "한 명은 바지, 한 명은 스커트를 입은 커플",
    "파스텔 톤 상의를 맞춰 입은 커플",
    "자켓을 함께 입은 커플",
    "캐주얼한 청바지 커플룩을 한 커플",
    "모자를 나란히 쓴 커플",
    "목도리를 함께 두른 커플",
    "하트를 가운데 두고 서 있는 커플",
  ],
  friend: [
    "티셔츠와 청바지를 입은 친구 두 명",
    "후드티를 입은 친구 두 명",
    "각자 다른 색 셔츠를 입은 친구들",
    "모자를 쓴 친구 두 명",
    "가벼운 가방을 멘 친구들",
    "운동복을 입은 친구들",
    "한 명은 안경, 한 명은 모자를 쓴 친구들",
    "파스텔 톤 옷을 입은 친구들",
    "체크 셔츠를 입은 친구들",
    "반바지를 입은 여름 분위기의 친구들",
  ],

  // ---------------- 아이콘 / 심볼 ----------------
  heartIcon: [
    "기본 붉은색 하트 아이콘",
    "연분홍색 파스텔 하트 아이콘",
    "선으로만 그려진 테두리 하트 아이콘",
    "두 개가 겹쳐진 하트 아이콘",
    "작은 하트 여러 개가 모여 있는 아이콘",
    "리본이 달린 하트 아이콘",
    "중앙에 하트 모양이 파인 원형 아이콘",
    "그라데이션이 들어간 하트 아이콘",
    "살짝 기울어진 하트 아이콘",
    "둥근 그림자 처리가 된 입체 하트 아이콘",
  ],
  bubbleIcon: [
    "둥근 말풍선 형태의 기본 아이콘",
    "아래쪽에 작은 꼬리가 달린 말풍선 아이콘",
    "둥근 모서리를 가진 네모형 말풍선 아이콘",
    "겹쳐진 두 개의 말풍선 아이콘",
    "하트 모양이 살짝 섞인 말풍선 아이콘",
    "점선 테두리로 그려진 말풍선 아이콘",
    "두꺼운 테두리의 말풍선 아이콘",
    "작은 말풍선이 여러 개 모여 있는 아이콘",
    "말풍선 안이 살짝 그라데이션 처리된 아이콘",
    "말풍선 뒤에 음영이 들어간 입체 아이콘",
  ],
  symbolIcon: [
    "둥근 별 하나가 중앙에 있는 심볼 아이콘",
    "작은 별 세 개가 모여 있는 심볼 아이콘",
    "굵은 느낌표 아이콘",
    "굵은 물음표 아이콘",
    "오른쪽을 가리키는 화살표 아이콘",
    "위쪽을 가리키는 화살표 아이콘",
    "반짝이는 효과선 심볼 아이콘",
    "동그라미 안에 느낌표가 들어간 경고 심볼",
    "동그라미 안에 체크 표시가 있는 확인 심볼",
    "별과 하트가 함께 들어간 장식 심볼",
  ],
  chatSticker: [
    "둥근 노란색 이모지 얼굴 기본 아이콘",
    "연한 파스텔 톤의 둥근 이모지 아이콘",
    "눈이 크고 동그란 이모지 얼굴",
    "살짝 기울어진 얼굴 모양 이모지",
    "입이 작은 점으로 표현된 심플 이모지",
    "눈이 반달 모양인 이모지 기본 얼굴",
    "테두리가 살짝 두꺼운 이모지 아이콘",
    "얼굴 아래에 작은 그림자가 있는 이모지",
    "파스텔핑크 얼굴의 이모지",
    "얼굴 테두리가 그라데이션 처리된 이모지",
  ],
};

// 상황 카테고리
const SITUATION_CATEGORY_OPTIONS = [
  { value: "basicEmotion", label: "기본감정 리액션" },
  { value: "daily", label: "일상생활" },
  { value: "work", label: "직장생활" },
  { value: "reaction", label: "채팅 리액션" },
  { value: "safety", label: "안전사고 / 경보" },
  { value: "health", label: "건강 · 병원" },
  { value: "season", label: "계절 · 날씨" },
  { value: "random", label: "랜덤 믹스" },
];

// 상황 문장 풀
const SITUATION_POOL = {
  basicEmotion: [
    "깜짝 놀라 눈이 동그래진 장면",
    "눈물 글썽이며 서러운 표정의 장면",
    "입꼬리를 올리고 조용히 미소 짓는 장면",
    "볼이 빨개질 정도로 부끄러운 장면",
    "화가 나서 뿔이 난 듯한 표정의 장면",
    "기운 없이 축 처진 슬픈 장면",
    "두 손 번쩍 들고 기뻐하는 장면",
    "머쓱하게 뒷머리를 긁적이는 장면",
    "하트를 날리며 사랑을 표현하는 장면",
  ],
  daily: [
    "아침에 눈 비비며 일어나는 장면",
    "커피를 들고 잠을 깨우는 장면",
    "소파에 기대어 쉬고 있는 장면",
    "장바구니를 들고 장을 보는 장면",
    "휴대폰을 보며 멍하게 있는 장면",
    "밥을 맛있게 먹는 장면",
    "빨래를 널거나 개는 장면",
    "집에서 TV를 보며 웃는 장면",
    "버스를 놓쳐 당황하는 장면",
  ],
  work: [
    "회의 중 노트북을 보며 고민하는 장면",
    "보고서를 들고 머리를 감싸쥐는 장면",
    "책상 위에 서류가 잔뜩 쌓인 장면",
    "퇴근 시간에 시계를 보며 기뻐하는 장면",
    "지각할까 봐 서둘러 뛰는 장면",
    "상사에게 보고하며 긴장하는 장면",
    "출근길에 졸린 눈으로 하품하는 장면",
    "동료에게 응원하는 제스처를 보내는 장면",
    "야근하며 졸음을 참는 장면",
  ],
  reaction: [
    "박수 치며 폭풍 칭찬하는 리액션",
    "엄지척을 크게 올리는 리액션",
    "눈이 반짝이며 감탄하는 리액션",
    "턱을 괴고 심심해하는 리액션",
    "어이없다는 듯 정색하는 리액션",
    "배꼽 잡고 크게 웃는 리액션",
    "놀라서 몸이 움찔하는 리액션",
    "머리를 부여잡고 현타가 온 리액션",
    "하트를 연달아 날리는 리액션",
  ],
  safety: [
    "바닥이 미끄러우니 조심하라는 제스처를 하는 장면",
    "불조심 경고를 손짓으로 알리는 장면",
    "머리에 안전모를 쓰고 주의 표지판을 가리키는 장면",
    "손바닥을 내밀며 ‘멈춰’라고 표현하는 장면",
    "차량에 조심하라는 경고 동작을 하는 장면",
    "계단 조심하라는 손짓을 하는 장면",
    "위험 지역을 가리키며 걱정하는 장면",
    "감전 주의 표시를 알려주는 장면",
    "안전벨트를 매라고 안내하는 장면",
  ],
  health: [
    "감기에 걸려 목도리를 하고 콧물을 흘리는 장면",
    "열이 나서 이마에 손을 올리는 장면",
    "약을 먹으며 인상을 찌푸리는 장면",
    "병원 진료를 기다리며 긴장하는 장면",
    "두통으로 머리를 감싸쥐는 장면",
    "허리를 붙잡고 아파하는 장면",
    "마스크를 쓰고 기침하는 장면",
    "건강검진 결과를 보고 안도하는 장면",
    "운동 후 숨을 몰아쉬는 장면",
  ],
  season: [
    "봄바람을 맞으며 꽃잎이 흩날리는 장면",
    "여름 더위에 부채질하는 장면",
    "가을 낙엽이 떨어지는 길을 걷는 장면",
    "겨울 눈이 펑펑 내리는 장면",
    "우산을 쓰고 비를 맞는 장면",
    "무지개가 뜬 하늘 아래 서 있는 장면",
    "바닷가에서 파도를 바라보는 장면",
    "눈사람과 함께 서 있는 장면",
    "강한 비바람을 피해 우산으로 몸을 가리는 장면",
  ],
};

const MANUAL_HIDE_KEY = "eg_manual_hidden";

// DOM
const majorSelect = document.getElementById("major-select");
const subSelect = document.getElementById("sub-select");
const detailSelect = document.getElementById("detail-select");
const situationCategorySelect = document.getElementById(
  "situation-category-select"
);

const generateBtn = document.getElementById("generate-prompts-btn");
const regenerateBtn = document.getElementById("regenerate-random-btn");
const promptList = document.getElementById("prompt-list");

// 설명서
const manualSection = document.getElementById("manual-section");
const manualToggleBtn = document.getElementById("manual-toggle-btn");
const manualBody = document.getElementById("manual-body");
const manualHideCheckbox = document.getElementById("manual-hide-checkbox");
const manualHideSaveBtn = document.getElementById("manual-hide-save-btn");

// 초기화
function initMajorOptions() {
  MAJOR_OPTIONS.forEach((opt) => {
    const el = document.createElement("option");
    el.value = opt.value;
    el.textContent = opt.label;
    majorSelect.appendChild(el);
  });
}

function initSituationCategories() {
  SITUATION_CATEGORY_OPTIONS.forEach((opt) => {
    const el = document.createElement("option");
    el.value = opt.value;
    el.textContent = opt.label;
    situationCategorySelect.appendChild(el);
  });
}

function initManualHideState() {
  const hidden = localStorage.getItem(MANUAL_HIDE_KEY) === "true";
  if (hidden && manualSection) {
    manualSection.style.display = "none";
  } else if (manualSection) {
    manualSection.style.display = "block";
  }
}

// 서브/세분화 옵션
function populateSubOptions(majorValue) {
  subSelect.innerHTML = "";
  detailSelect.innerHTML = "";

  if (!majorValue || !SUB_OPTIONS[majorValue]) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "먼저 대분류를 선택하세요";
    subSelect.appendChild(opt);

    const optDetail = document.createElement("option");
    optDetail.value = "";
    optDetail.textContent = "먼저 소분류를 선택하세요";
    detailSelect.appendChild(optDetail);
    return;
  }

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "소분류를 선택하세요";
  subSelect.appendChild(placeholder);

  SUB_OPTIONS[majorValue].forEach((opt) => {
    const el = document.createElement("option");
    el.value = opt.value;
    el.textContent = opt.label;
    subSelect.appendChild(el);
  });

  const optDetail = document.createElement("option");
  optDetail.value = "";
  optDetail.textContent = "먼저 소분류를 선택하세요";
  detailSelect.appendChild(optDetail);
}

function populateDetailOptions(subValue) {
  detailSelect.innerHTML = "";

  if (!subValue) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "먼저 소분류를 선택하세요";
    detailSelect.appendChild(opt);
    return;
  }

  const detailList = DETAIL_BY_SUB[subValue];
  if (!detailList) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "세분화 정보가 없습니다";
    detailSelect.appendChild(opt);
    return;
  }

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "세분화 캐릭터 10종 중 하나를 선택하세요";
  detailSelect.appendChild(placeholder);

  detailList.forEach((label, idx) => {
    const el = document.createElement("option");
    el.value = `detail_${idx + 1}`;
    el.textContent = label;
    detailSelect.appendChild(el);
  });
}

function getSituationPool(categoryValue) {
  if (categoryValue === "random") {
    let all = [];
    Object.values(SITUATION_POOL).forEach((arr) => {
      all = all.concat(arr);
    });
    return all;
  }
  return SITUATION_POOL[categoryValue] || [];
}

function pickRandomFromArray(arr, count) {
  const result = [];
  const used = new Set();
  if (arr.length === 0) return result;

  while (result.length < count && used.size < arr.length) {
    const idx = Math.floor(Math.random() * arr.length);
    if (used.has(idx)) continue;
    used.add(idx);
    result.push(arr[idx]);
  }
  while (result.length < count) {
    const idx = Math.floor(Math.random() * arr.length);
    result.push(arr[idx]);
  }
  return result;
}

function getSelectedLabel(selectEl) {
  if (!selectEl) return "";
  const idx = selectEl.selectedIndex;
  if (idx < 0) return "";
  return selectEl.options[idx].textContent || "";
}

function getCharacterDescription(detailLabel, majorValue) {
  if (majorValue === "etc") {
    return `${detailLabel} 스타일의 심플한 아이콘/심볼을 메인 이미지로 사용`;
  }
  return `${detailLabel} 캐릭터를 메인 캐릭터로 사용`;
}

const STYLE_TEXT =
  "카카오톡 이모티콘 제출을 염두에 둔 스타일, super cute chibi character, big plush-like head, small body, big expressive eyes, simple clean line art, soft pastel color palette, smooth shading, mobile messenger sticker style, no text, no speech bubble, extremely cute and appealing";

function generatePrompts() {
  const majorValue = majorSelect.value;
  const subValue = subSelect.value;
  const detailValue = detailSelect.value;
  const situationCategoryValue = situationCategorySelect.value;

  if (!majorValue || !subValue || !detailValue) {
    alert("대분류, 소분류, 세분화를 모두 선택해주세요.");
    return;
  }

  if (!situationCategoryValue) {
    alert("상황 카테고리를 선택해주세요.");
    return;
  }

  const majorLabel = getSelectedLabel(majorSelect);
  const subLabel = getSelectedLabel(subSelect);
  const detailLabel = getSelectedLabel(detailSelect);
  const situationCategoryLabel = getSelectedLabel(situationCategorySelect);

  const pool = getSituationPool(situationCategoryValue);
  if (!pool || pool.length === 0) {
    alert("선택한 상황 카테고리에 등록된 상황이 없습니다.");
    return;
  }

  const characterDesc = getCharacterDescription(detailLabel, majorValue);
  const situations = pickRandomFromArray(pool, 9);

  promptList.innerHTML = "";

  situations.forEach((situation, idx) => {
    const item = document.createElement("div");
    item.className = "prompt-item";

    const title = document.createElement("div");
    title.className = "prompt-title";
    title.textContent = `(${idx + 1}번) ${situation} 이모티콘용 프롬프트`;

    const meta = document.createElement("div");
    meta.className = "prompt-meta";
    meta.textContent = `캐릭터: [${majorLabel} > ${subLabel} > ${detailLabel}] · 상황 카테고리: [${situationCategoryLabel}]`;

    const text = document.createElement("div");
    text.className = "prompt-text";

    const promptHtml = `
      - 캐릭터: ${characterDesc}<br>
      - 스타일: ${STYLE_TEXT}<br>
      - 표정/포즈: "${detailLabel}"의 외형을 유지한 상태에서, ${situation} 상황이 한눈에 보이도록 자연스럽게 표현<br>
      - 상황/컨셉: ${situationCategoryLabel} 카테고리 안에서, ${situation} 장면을 귀엽고 앙증맞은 이모티콘으로 보여주는 장면<br>
      - 레이아웃: 정면 또는 약간 3/4 시점, 화면 중앙에 단일 캐릭터(또는 아이콘)가 크게 보이도록 구성, 테두리 여백을 충분히 확보<br>
      - 배경: 깨끗한 흰색 또는 아주 연한 단색 배경, 불필요한 오브젝트 없이 캐릭터/아이콘에만 시선이 가도록 구성<br>
      - 출력 형식: PNG, transparent background, high resolution, 1024x1024 또는 768x768 정사각형 비율
    `;

    text.innerHTML = promptHtml;

    item.appendChild(title);
    item.appendChild(meta);
    item.appendChild(text);
    promptList.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMajorOptions();
  initSituationCategories();
  initManualHideState();

  majorSelect.addEventListener("change", (e) => {
    populateSubOptions(e.target.value);
  });

  subSelect.addEventListener("change", (e) => {
    populateDetailOptions(e.target.value);
  });

  generateBtn.addEventListener("click", generatePrompts);
  regenerateBtn.addEventListener("click", generatePrompts);

  if (manualToggleBtn && manualBody) {
    manualToggleBtn.addEventListener("click", () => {
      manualBody.classList.toggle("open");
    });
  }

  if (manualHideSaveBtn && manualHideCheckbox) {
    manualHideSaveBtn.addEventListener("click", () => {
      const hide = manualHideCheckbox.checked;
      localStorage.setItem(MANUAL_HIDE_KEY, hide ? "true" : "false");
      if (hide && manualSection) {
        manualSection.style.display = "none";
      } else if (manualSection) {
        manualSection.style.display = "block";
      }
    });
  }
});
