document.addEventListener("DOMContentLoaded", function() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('includedContent').innerHTML = html;
        })
        .catch(error => console.error('Error fetching included content:', error));
});

document.addEventListener("mousemove", function(e) {
    const jumbotron = document.querySelector("#jumbotron");
    const container = document.querySelector(".moving");
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    const jumbotronRect = jumbotron.getBoundingClientRect();
    const offsetX = (mouseX - (jumbotronRect.left + jumbotronRect.width / 2)) / 10;
    const offsetY = (mouseY - (jumbotronRect.top + jumbotronRect.height / 2)) / 10;
    container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
