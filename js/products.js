const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.button-section .btn:first-child');
const nextButton = document.querySelector('.button-section .btn:last-child');

let currentIndex = 0;
const intervalTime = 11000;
let carouselInterval;


function showCurrentCard() {
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.style.display = 'block';
            card.classList.remove('shadow');
            if(index === currentIndex - 1 || index === currentIndex + 1){
            }
        } else {
            if(index === currentIndex - 1 || index === currentIndex + 1){
                if(index - 1 < 0){
                    card[card.length - 1].classList.add('shadow');
                    card[card.length - 1].style.display = 'block';
                } else if (index + 1 > card.length - 1){
                    card[0].classList.add('shadow');
                    card[0].style.display = 'block';
                } else {
                    card[index].classList.add('shadow');
                    card[index].style.display = 'block';
                }
            } else {
                card.style.display = 'none';
            }
        }
    });
}

showCurrentCard()

function showNextCard() {
    currentIndex++;
    if (currentIndex >= cards.length - 1) {
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

function startCarousel() {
    carouselInterval = setInterval(showNextCard, intervalTime);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

prevButton.addEventListener('click', () => {
    stopCarousel();
    showPrevCard();
});
nextButton.addEventListener('click', () => {
    stopCarousel();
    showNextCard();
});

startCarousel();
