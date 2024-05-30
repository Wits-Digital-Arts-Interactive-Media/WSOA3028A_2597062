// Function to load an external HTML file into elements with a specified class name
function loadNavbar() {
    // Use fetch to get the content of navbar.html
    fetch('/navbar.html')
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Return the text content of the response
            return response.text();
        })
        .then(data => {
            // Get all elements with the class name "navbar"
            var navbars = document.getElementsByClassName('navbar');
            // Set the innerHTML of each navbar element to the fetched content
            for (var i = 0; i < navbars.length; i++) {
                navbars[i].innerHTML = data;
            }
        })
        .catch(error => {
            // Log any errors to the console
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the loadNavbar function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadNavbar);