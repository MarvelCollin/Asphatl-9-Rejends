const cards = document.querySelectorAll(".card");
const prevButton = document.querySelector(".button-section .btn:first-child");
const nextButton = document.querySelector(".button-section .btn:last-child");

let currentIndex = 0;

function showCurrentCard() {
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.display = "block";
      card.classList.add("active");
    } else {
      card.style.display = "none";
      card.classList.remove("active");
    }
  });

  const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;
  cards[prevIndex].style.display = "block";
  cards[nextIndex].style.display = "block";
  const info = document.getElementById('info');
  info.innerHTML = (currentIndex + 1) + '/' + cards.length;
}

function showNextCard() {
  currentIndex++;
  if (currentIndex > cards.length - 1) {
    currentIndex = 0;
  }
  showCurrentCard();
}

function showPrevCard() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }
  showCurrentCard();
}

showCurrentCard();

prevButton.addEventListener("click", () => {
  showPrevCard();
});
nextButton.addEventListener("click", () => {
  showNextCard();
});


