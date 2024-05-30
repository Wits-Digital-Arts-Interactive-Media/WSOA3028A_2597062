function insertNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll('.navbar').forEach(element => {
                element.innerHTML = data;
            });
        })
        .catch(error => console.error('Error loading navbar.html:', error));
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', insertNavbar);