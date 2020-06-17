export function performNLP(event) {
    event.preventDefault();

    // DOM elements needed
    let url = document.getElementById('url').value;
    if (url == "") {
        alert("Please enter a web address");
        return false;
    } else {
        console.log('::: Form Submitted :::')
        console.log(url);
        postRequest('http://localhost:8080/apiCall', { url })
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