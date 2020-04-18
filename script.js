var api_key = "8364efe72c45415ca3d8a56cadb815f4";
//URL api from google
var url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=' + api_key;

var topHeadLines = [];

const gotNews = (newsData) => {
  newsData.articles.forEach((article) => {
  topHeadLines.push(article.title);
  })
  displayNewsHeadlines()
}
                          

function displayNewsHeadlines() {
  for( i = 0; i < topHeadLines.length; i++) {
    console.log(topHeadLines[i]);
  }

}

function preload() {
  //arrange the data
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
    background(210);
}

fetch(url)
  .then(response => response.json())
  .then(gotNews)
