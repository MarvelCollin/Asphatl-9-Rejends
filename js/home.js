document.addEventListener("DOMContentLoaded", function() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('includedContent').innerHTML = html;
        })
        .catch(error => console.error('Error fetching included content:', error));
});