const { default: Axios } = require("axios");

axios.get("https://lambda-times-api.herokuapp.com/articles").then(response => {
    const articles = response.data.articles;
    console.log(articles);

    let articlesArray = Object.keys(articles).map(a => a);
    console.log(articlesArray);

    const cardsContainer = document.querySelector("div.cards-container");
    
    articlesArray.forEach(language => {
        articles[language].forEach(articleObj => {
            function articleMaker (article) {

                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.addEventListener("click", e => console.log(e.target.innerHTML));
    
                const headline = document.createElement("div");
                headline.classList.add("headline");
                headline.textContent = article.headline;
                cardDiv.appendChild(headline);
    
                const author = document.createElement("div");
                author.classList.add("author");
                cardDiv.appendChild(author);
    
                const imgContainer = document.createElement("div");
                imgContainer.classList.add("img-container");
                author.appendChild(imgContainer);
    
                const img = document.createElement("img");
                img.src = article.authorPhoto;
                imgContainer.appendChild(img);  
    
                return cardDiv
            }} 
            cardsContainer.appendChild(articleMaker(articleObj)))
    })  
    

})
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
