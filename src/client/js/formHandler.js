export function handleSubmit(event) {
    event.preventDefault();

    // DOM elements needed
    let urlInput = document.getElementById('url').value;
    //Client.checkForName(formText);

    console.log(urlInput);
    console.log("Form Submitted");

    fetch('/apiCall', { 
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ urlInput })
     })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
};