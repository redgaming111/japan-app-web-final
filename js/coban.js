function showKana(type) {
  const hira = document.getElementById("hira");
  const kata = document.getElementById("kata");

  hira.style.display = "none";
  kata.style.display = "none";

  document.getElementById(type).style.display = "block";
}

function goBack() {
  window.location.href = "index.html";}

function goFlashcard() {
  window.location.href = "cobanflashcard.html";}