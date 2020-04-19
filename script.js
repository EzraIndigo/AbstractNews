var AFFIN_Data = AFFIN;
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
  document.getElementById("headlines").innerHTML = "<h2> News Headlines </h2>";
  for(i = 0; i < topHeadLines.length; i++) {
    if (i == 0) {document.getElementById("headlines").innerHTML += "<ul id = 'firstElem'>"+ topHeadLines[i] +"</ul>";
  } else {
    document.getElementById("headlines").innerHTML += "<ul>"+ topHeadLines[i] +"</ul>";
    }

  }
  setupWord();
}
var txt;
var finalWords = []; //final array
var finalScore = [];
function setupWord() {
  txt = topHeadLines[0];
  var allwords = txt;
  var tokens = allwords.split(/\W+/); //Regex to split up words from setence

  for(i = 0; i < tokens.length; i++) {
    var word = removeIllegalChars(tokens[i]); //clean chars before putting into final array
    finalWords.push(word.toLowerCase());
  }
  console.log(finalWords);
  for (i = 0; i < finalWords.length; i++) {
    console.log("word: "+finalWords[i]);
    var score = getWordScores(finalWords[i]);
    console.log("score: " + score);
    finalScore.push(score);
  }
  
  console.log(finalScore);


}

function removeIllegalChars(word) {
  return word.replace(/[^\w]/g, ""); //Regex to remove illegal Chars
}



function getWordScores(word) { //BROKEN - DOESNT FIND WORD IN SET
  
  var hasWord =  false;
  var index =  AFFIN_Data.indexOf(word);
  for (i = 0; i < AFFIN_Data.length; i++) {
    if (word == AFFIN_Data[i].Word) {
      hasWord = true;
    }
    else { hasWord = false;}
  }
  if (hasWord) {
    var index =  AFFIN_Data.indexOf(word); //FIX
    var rating = AFFIN_Datap[index].Rating;
    return parseInt(rating);
  } else {
    console.log("Word Not Found In AFFIN Data");
    return 0;
  }

}

function setup() {
  var canvasID = document.getElementById("defaultCanvas0");
  var wrapper = document.createElement('div');

  canvasID.parentNode.insertBefore(wrapper, canvasID);
  wrapper.appendChild(canvasID);
  createCanvas(500, 500);
}

function draw() {
    background(210);
}

fetch(url)
  .then(response => response.json())
  .then(gotNews)
