export function performNLP(event) {
    event.preventDefault();

    // DOM elements needed
    let url = document.getElementById('url').value;
    if (url == "") {
        alert("Please enter a web address");
        return false;
    } else {
        postRequest('http://localhost:8080/apiCall', { url })
        .then(data => {
            updateUI(data);
            console.log(data);
        });
    }
}

// POST request to the server with the submitted URL
export const postRequest = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const data = await res.json();
        return data;
    } catch(err) {
        console.log("Error:", err);
    }
}

const updateUI = () => {
    const resultsSection = document.querySelector('.results-section');
}