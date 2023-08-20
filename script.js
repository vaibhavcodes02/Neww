document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    // Perform client-side validation here if needed

    fetch('process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        // Handle the response from the server
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
