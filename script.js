document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value, 10);
    const outputDiv = document.getElementById("output");
    
    if (!text || isNaN(delay) || delay < 0) {
        outputDiv.textContent = "Please enter valid text and a positive delay.";
        return;
    }

    outputDiv.textContent = "Waiting...";
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    outputDiv.textContent = text;
});
