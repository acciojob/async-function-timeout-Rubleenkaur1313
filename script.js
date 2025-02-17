document.getElementById('messageForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve values from the input fields
    const message = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    // Call the function to display the message after the delay
    await displayMessageAfterDelay(message, delay);
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessageAfterDelay(message, delay) {
    await delay(delay); // Wait for the specified delay
    document.getElementById('output').textContent = message; // Display the message
}
