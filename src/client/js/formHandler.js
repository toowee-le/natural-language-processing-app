export function performNLP(event) {
    event.preventDefault();

    // DOM elements needed
    let urlInput = document.getElementById('url').value;
    if (urlInput == "") {
        alert("Please enter a web address");
        return false;
    } else {
        console.log('Form Submitted')
        console.log(urlInput);
        postRequest('http://localhost:8080/apiCall', { urlInput })
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
        console.log(data); 
    } catch(err) {
        console.log("Error:", err);
    }
}