var AFFIN_Data = AFFIN;
var api_key = "8364efe72c45415ca3d8a56cadb815f4";
//URL api from google
var url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=' + api_key;

var topHeadLines = [];
var listLoad = false;

const gotNews = (newsData) => {
  newsData.articles.forEach((article) => {
  topHeadLines.push(article.title);
  })
  
  displayNewsHeadlines()
}





function displayNewsHeadlines() {
  document.getElementById("headlines").innerHTML = "<h2> News Headlines </h2>";
  for(i = 0; i < topHeadLines.length-3; i++) {
    document.getElementById("headlines").innerHTML += "<ul id = list onClick='reload(event)' class = 'news'>"+ topHeadLines[i] +"</ul>";
    document.getElementById("list").style.color = "rgb(214, 93, 93)";
  }
  document.getElementById("headlines").innerHTML += "<ul id = 'result' class = 'news'>Semantic Score: </ul>";
  document.getElementById("headlines").innerHTML += "<ul id = 'result-semantic'>Loading...</ul>";

  setupWord(topHeadLines[0]);
  listLoad = true;

}

function reload(e) {
  //-------handle list UI Color onclick
 var listElems =  document.getElementsByClassName("news");
 for (k = 0; k < listElems.length; k++) {
   if (listElems[k].style.color == "rgb(214, 93, 93)") {
    listElems[k].style.color = "black";
   }
 }
 //------------------------------------
 var elem = e.target || e.srcElement;
 console.log(elem);
 elem.style.color = "rgb(214, 93, 93)";
 setupWord(elem.textContent); //rerun functions below
}

//var txt;
var finalWords = []; //final array
var finalScore = [];

function setupWord(txt) {
  finalWords =[];
  finalScore =[]
  console.log(AFFIN.length);
//txt = topHeadLines[0];
  var allwords = txt;
  var tokens = allwords.split(/\W+/); //Regex to split up words from setence

  for(i = 0; i < tokens.length; i++) {
    var word = removeIllegalChars(tokens[i]); //clean chars before putting into final array
    finalWords.push(word.toLowerCase());
  }

  for (k = 0; k < finalWords.length; k++) {
    var currentWord = finalWords[k];
    console.log("word: " + currentWord);
    var score = getWordScores(currentWord);
    console.log("score: " + score);
    finalScore.push(score);
  }
  
  displayScore(finalScore);


}

function removeIllegalChars(word) {
  return word.replace(/[^\w]/g, ""); //Regex to remove illegal Chars
}



function getWordScores(word) { 
  var rating;
  for(i = 0; i < AFFIN_Data.length; i++) {
    if (word == AFFIN_Data[i].Word) {
      st = AFFIN_Data[i].Rating;
      rating = parseInt(st);
      return rating;
    }

    if (i == AFFIN_Data.length-1) {
      return 0;
    }
  } ///////////////////LOOK INTO WHAT TO DO IF NO WORD MATCH IS FOUND IN AFFIN
}


var semantic_range_set = [
{
    "Score": -5,
    "StringScore": "Extremely Negative"
},
  {
    "Score": -4,
    "StringScore": "Very Negative"
},
{
    "Score": -3,
    "StringScore": "Negative"
},
{
    "Score": -2,
    "StringScore": "Fairly Negative"
},
{
    "Score": -1,
    "StringScore": "Slightly Negative"
},

{
  "Score": 0,
  "StringScore": "Neutral"
},
{
  "Score": 1,
  "StringScore": "Slightly Positive"
}, 
{ 
  "Score": 2,
  "StringScore": "Fairly Positive"

}, 
{
  "Score": 3,
  "StringScore": "Positive"
},
{
  "Score": 4,
  "StringScore": "Very Positive"
},
{
  "Score": 5,
  "StringScore": "Super Positive"
},
{
  "Score": 6,
  "StringScore": "Undoubtly Positive"
}

];

function displayScore(finalScore) {
  var score = 0;
  console.log(finalScore);
  for(i = 0; i < finalScore.length; i++) {
    score = score + finalScore[i];
  }
  var StringScore;
  for (k = 0; k < semantic_range_set.length; k++) {
    if (score == semantic_range_set[k].Score){
      document.getElementById("result-semantic").innerHTML = semantic_range_set[k].StringScore + "(" + score + ")"
    }
    if (score > 6) {
      document.getElementById("result-semantic").innerHTML = "Very Positive!(+6)";
    }
    if (score < -6) {
      document.getElementById("result-semantic").innerHTML = "Very Negative!(-6)";
    }
  }
  //document.getElementById("result-semantic").innerHTML = score;
}

function displayWordBreakdown() {

}




function setup() {

  createCanvas(500, 500);
  var canvasID = document.getElementById("defaultCanvas0");
  var wrapper = document.createElement('div');
  wrapper.id = "canvasWrapper";

  canvasID.parentNode.insertBefore(wrapper, canvasID);
  wrapper.appendChild(canvasID);


}

function draw() {
    background(230);
}

fetch(url)
  .then(response => response.json())
  .then(gotNews)

