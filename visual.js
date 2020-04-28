var longword = "";
var finalScore = [];
var finalWords = [];
var colSet = [];
var sentiment;

//scope issues means this needs to be the constructor with data passed from main.js
function retrieve(longword, finalScore, finalWords, colSet, sentiment) {
    longword = longword; //Selected headline
    finalWords = finalWords; //Array of words from headline
    finalScore = finalScore; //Array of Score of each word from AFFIN
    colSet = colSet; //Array of color match on each word 
    sentiment = sentiment; //sentiment object library from main.js 

    console.log(longword);
    console.log(finalWords);
    console.log(finalScore);
    console.log(colSet);
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
  
