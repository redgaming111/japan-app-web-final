const levelSelect = document.getElementById("level");
const categorySelect = document.getElementById("category");
const startBtn = document.getElementById("startFlashcard");

const flashcard = document.getElementById("flashcard");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");

const prevBtn = document.getElementById("prevCard");
const nextBtn = document.getElementById("nextCard");
const controls = document.getElementById("controls");
const counter = document.getElementById("cardCounter");

let cards = [];
let index = 0;

/* ===== HỌC THEO LEVEL ===== */
startBtn.onclick = () => {
  const level = levelSelect.value;
  const category = categorySelect.value;

  if (!level || !category) {
    alert("Vui lòng chọn đầy đủ cấp độ và nội dung");
    return;
  }

  if (!data[level] || !data[level][category]) {
    alert("Chưa có dữ liệu cho mục này");
    return;
  }

  cards = data[level][category];
  index = 0;

  flashcard.classList.remove("hidden");
  controls.classList.remove("hidden");

  showCard();
};

/* ===== HỌC THEO TỪ ĐÃ ⭐ ===== */
const starBtn = document.getElementById("startStarFlashcard");

function getSavedWords() {
  return JSON.parse(localStorage.getItem("savedWords")) || [];
}

if (starBtn) {
  starBtn.onclick = () => {
    const saved = getSavedWords();

    if (saved.length === 0) {
      alert("Bạn chưa đánh dấu từ nào ⭐");
      return;
    }

    cards = saved;
    index = 0;

    flashcard.classList.remove("hidden");
    controls.classList.remove("hidden");

    showCard();
  };
}

/* ===== HIỂN THỊ THẺ ===== */
function showCard() {
  const item = cards[index];
  if (!item) return;

  cardFront.textContent = item[0];
  cardBack.innerHTML = `${item[1]}<br>${item[2]}`;

  flashcard.classList.remove("flip");

  if (counter) {
    counter.textContent = `${index + 1} / ${cards.length}`;
  }
}

/* ===== LẬT THẺ ===== */
flashcard.onclick = () => {
  flashcard.classList.toggle("flip");
};

/* ===== ĐIỀU HƯỚNG ===== */
nextBtn.onclick = () => {
  if (index < cards.length - 1) {
    index++;
    showCard();
  }
};

prevBtn.onclick = () => {
  if (index > 0) {
    index--;
    showCard();
  }
};
