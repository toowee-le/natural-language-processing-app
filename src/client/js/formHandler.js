import { preloader } from "./preloader";
import { checkURL } from "./urlChecker";

const resultsSection = document.querySelector('.results-section');

export function performNLP(event) {
    event.preventDefault();

    // DOM elements needed
    let url = document.getElementById('url').value;
    if (url == "") {
        alert("Please enter a URL");
        return false;
    };

    if (checkURL(url)) {
        preloader('show');
        postRequest('https://localhost:8000/apiCall', { url })
        .then(data => {
            updateUI(data);
            preloader('hide');
        });
        clearResults();
    } else {
        alert("Error: Please check the URL is a valid web address and ensure it starts with http:// or https://")
    };
};

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

const updateUI = (data) => {

    const innerHTML = `
        <div class="article block">
            <h3>Article</h3>
            <img class="article-img" src="${data.img}" alt="News Image">
            <p class="article-title">${data.headline}</p>
            <div class="article-info">
                <p class="article-author">${data.writer}</p>
                <p class="divider">|</p>
                <p class="article-date">${data.date}</p>
            </div>
            <p class="article-text">${data.text}</p>
            <button class="article-link"><a href="${data.url}">Read full article</a></button>
    </div>
    <div class="data block">
        <h3>Results</h3>
        <div class="title-block">Polarity</div>
        <p class="polarity">Polarity: <span class="data-value">${data.polarity}</span></p>
        <p class="polarity-confidence">Confidence: <span class="data-value">${data.polarityConfidence}</span></p>
        <div class="title-block">Subjectivity</div>
        <p class="subjectivity">Subjectivity: <span class="data-value">${data.subjectivity}</span></p>
        <p class="subjectivity-confidence">Confidence: <span class="data-value">${data.subjectivityConfidence}</span></p>
    </div>
    `;

    resultsSection.innerHTML = innerHTML;
}

function clearResults() {
    resultsSection.innerHTML = '';
}