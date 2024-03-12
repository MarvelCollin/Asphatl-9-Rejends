document.addEventListener("DOMContentLoaded", function() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            // Insert the HTML content into the specified element
            document.getElementById('includedContent').innerHTML = html;
        })
        .catch(error => console.error('Error fetching included content:', error));
});