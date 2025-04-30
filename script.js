document.getElementById('proxyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }
    document.getElementById('proxyFrame').src = '/proxy?url=' + encodeURIComponent(url);
});
