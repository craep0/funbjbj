document.getElementById('proxyForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;

    if (!url) {
        alert('Please enter a valid URL');
        return;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text(); // Use .json() if the API returns JSON
        document.getElementById('output').textContent = data;
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
});
