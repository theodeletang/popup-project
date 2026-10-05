const startBtn = document.getElementById("startBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const closeX = document.getElementById("closeX");

function openPopup() {
  overlay.hidden = false;
  closeBtn.focus();
}

function closePopup() {
  overlay.hidden = true;
  startBtn.focus();
}

startBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeX.addEventListener("click", closePopup);

// Close when clicking outside the popup
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePopup();
});

// Close with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.hidden) closePopup();
});
