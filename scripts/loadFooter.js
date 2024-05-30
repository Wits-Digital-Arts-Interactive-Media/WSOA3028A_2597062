document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');

    footer.addEventListener('click', function() {
        alert('You clicked the footer!');
    });
});