let currentPage = 1;
const pageSize = 20; // mỗi trang 20 dòng


const levelSelect = document.getElementById("level");
const categorySelect = document.getElementById("category");
const contentTable = document.getElementById("content");
const searchInput = document.getElementById("search");

let currentList = [];

function renderTable(list){
  contentTable.innerHTML = "";

  if(list.length === 0){
    contentTable.innerHTML =
      "<tr><td colspan='4'>Không có dữ liệu</td></tr>";
    return;
  }

  const saved = getSavedWords();

  const start = (currentPage - 1) * pageSize;
  const pageData = list.slice(start, start + pageSize);

  pageData.forEach(item => {
    const key = item[0];
    const starred = saved.some(w => w[0] === key);

    contentTable.innerHTML += `
      <tr>
        <td>
          <button class="star-btn" data-word="${key}">
            ${starred ? "⭐" : "☆"}
          </button>
        </td>
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td>${item[2]}</td>
      </tr>
    `;
  });


const totalPages = Math.ceil(list.length / pageSize);

document.getElementById("pageInfo").innerText =
  `Trang ${currentPage}`;

document.getElementById("totalPage").innerText =
  totalPages;

document.getElementById("pageInput").value = currentPage;

  bindStarEvents(list);
}


function render(){
  const l = levelSelect.value;
  const c = categorySelect.value;
  searchInput.value = "";

  if(!l || !c || !data[l] || !data[l][c]){
    contentTable.innerHTML = "";
    return;
  }

  currentPage = 1;
  currentList = data[l][c];
  renderTable(currentList);
}

searchInput.oninput = () => {
  currentPage = 1;
  const k = searchInput.value.toLowerCase();
  renderTable(
    currentList.filter(i =>
      i.join(" ").toLowerCase().includes(k)
    )
  );
};
levelSelect.onchange = render;
categorySelect.onchange = render;



const helpBtn = document.getElementById("helpBtn");
const helpModal = document.getElementById("helpModal");
const closeHelp = document.getElementById("closeHelp");

helpBtn.onclick = () => {
  helpModal.style.display = "flex";
};

closeHelp.onclick = () => {
  helpModal.style.display = "none";
};

helpModal.onclick = (e) => {
  if (e.target === helpModal) {
    helpModal.style.display = "none";
  }
};


function getSavedWords(){
  return JSON.parse(localStorage.getItem("savedWords")) || [];
}

function saveWords(list){
  localStorage.setItem("savedWords", JSON.stringify(list));
}

function bindStarEvents(currentList){
  document.querySelectorAll(".star-btn").forEach(btn => {
    btn.onclick = () => {
      const word = btn.dataset.word;
      let saved = getSavedWords();

      const item = currentList.find(i => i[0] === word);

      if(saved.some(w => w[0] === word)){
        saved = saved.filter(w => w[0] !== word);
      } else {
        saved.push(item);
      }

      saveWords(saved);
      renderTable(currentList);
    };
  });
}


const jlptBtn = document.getElementById("jlptBtn");

jlptBtn.onclick = () => {
  window.location.href = "jlpt.html";
};


document.getElementById("prevPage").onclick = () => {
  if(currentPage > 1){
    currentPage--;
    renderTable(currentList);
  }
};

document.getElementById("nextPage").onclick = () => {
  const maxPage = Math.ceil(currentList.length / pageSize);
  if(currentPage < maxPage){
    currentPage++;
    renderTable(currentList);
  }
};


const pageInput = document.getElementById("pageInput");

pageInput.onchange = () => {
  const maxPage = Math.ceil(currentList.length / pageSize);
  let p = parseInt(pageInput.value);

  if (isNaN(p)) return;

  if (p < 1) p = 1;
  if (p > maxPage) p = maxPage;

  currentPage = p;
  renderTable(currentList);
};




document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("musicBtn");
  const modal = document.getElementById("musicModal");
  const closeBtn = document.getElementById("closeMusic");
  const stopBtn = document.getElementById("stopMusic");
  const music = document.getElementById("bgMusic");
  const items = document.querySelectorAll(".music-item");

  if (!music) return;

  // mở modal
  musicBtn.onclick = () => {
    modal.style.display = "flex";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // stop nhạc
  stopBtn.onclick = () => {
    music.pause();
    music.currentTime = 0;
    items.forEach(i => i.classList.remove("active"));
    localStorage.setItem("musicPlaying", "false");
  };

  // chọn bài
  items.forEach(item => {
    item.onclick = () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      music.src = item.dataset.src;
      music.volume = 0.5;
      music.play();

      localStorage.setItem("musicSrc", music.src);
      localStorage.setItem("musicPlaying", "true");
    };
  });

  // ⭐ KHÔI PHỤC NHẠC KHI LOAD TRANG
  const savedSrc = localStorage.getItem("musicSrc");
  const playing = localStorage.getItem("musicPlaying");

  if (savedSrc && playing === "true") {
    music.src = savedSrc;
    music.volume = 0.5;
    music.play().catch(() => {});
  }

  // nút flashcard
  const flashBtn = document.getElementById("flashcardBtn");
  if (flashBtn) {
    flashBtn.onclick = () => {
      window.location.href = "flashcard.html";
    };
  }
});
