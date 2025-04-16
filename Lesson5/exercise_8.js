// Define the payload first
const payload = {
    ticker: 'AAPL',  // Correct ticker symbol for Apple Inc.
    name: 'Apple Inc',
    price: 171.48
};

// Make the POST request
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json', // Correct header capitalization
    },
    body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error posting data:", error));