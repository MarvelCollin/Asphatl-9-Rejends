const classS = [
    {
        imgUrl: "../assets/cars/A/",
        title: "Aston Martin Vulcan",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor, numquam omnis possimus eveniet amet saepe molestias, quod nihil unde libero officiis illum odio enim! Doloremque accusantium et sequi sit."
    },
    {
        imgUrl: "../assets/cars/A/Ferrari-J50.webp",
        title: "Ferrari J50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor, numquam omnis possimus eveniet amet saepe molestias, quod nihil unde libero officiis illum odio enim! Doloremque accusantium et sequi sit."
    },
    {
        imgUrl: "../assets/cars/A/Nissan-GT-R-Nismo.webp",
        title: "Nissan GT R Nismo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor, numquam omnis possimus eveniet amet saepe molestias, quod nihil unde libero officiis illum odio enim! Doloremque accusantium et sequi sit."
    },
    {
        imgUrl: "../assets/cars/A/Nio-EP9.webp",
        title: "Nio EP9",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor, numquam omnis possimus eveniet amet saepe molestias, quod nihil unde libero officiis illum odio enim! Doloremque accusantium et sequi sit."
    }
];


const classA = [
    {
        imgUrl: "../assets/cars/A/Aston-Martin-Vulcan.webp",
        title: "Aston Martin Vulcan",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor, numquam omnis possimus eveniet amet saepe molestias, quod nihil unde libero officiis illum odio enim! Doloremque accusantium et sequi sit."
    },
    {
        imgUrl: "../assets/cars/A/Ferrari-J50.webp",
        title: "Ferrari J50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor, numquam omnis possimus eveniet amet saepe molestias, quod nihil unde libero officiis illum odio enim! Doloremque accusantium et sequi sit."
    },
    {
        imgUrl: "../assets/cars/A/Nissan-GT-R-Nismo.webp",
        title: "Nissan GT R Nismo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor, numquam omnis possimus eveniet amet saepe molestias, quod nihil unde libero officiis illum odio enim! Doloremque accusantium et sequi sit."
    },
    {
        imgUrl: "../assets/cars/A/Nio-EP9.webp",
        title: "Nio EP9",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor, numquam omnis possimus eveniet amet saepe molestias, quod nihil unde libero officiis illum odio enim! Doloremque accusantium et sequi sit."
    }
];





const cards = document.querySelectorAll(".card");
const prevButton = document.querySelector(".button-section .btn:first-child");
const nextButton = document.querySelector(".button-section .btn:last-child");

let currentIndex = 1;

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


