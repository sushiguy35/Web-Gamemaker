document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const fileSrc = urlParams.get('src');
    const outputElement = document.getElementById('output');

    if (fileSrc) {
        fetch(fileSrc)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                outputElement.textContent = data;
            })
            .catch(error => {
                outputElement.textContent = 'Error loading file: ' + error.message;
                console.error('Error:', error);
            });
    } else {
        outputElement.textContent = 'No "src" parameter found in the URL.';
    }
});