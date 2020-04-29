var longword = "";
var finalScore = [];
var finalWords = [];
var colSet = [];
var sentiment;
let bgCol = "#FCFCFC";
var start = false;

const positiveCols = ["#ad0707", "#782e2e", "#78552e", "#4a461f", "#3c422f", "#334236", "#1b2e29", "#2c262e", "#363636", "#0a0a0a"];
const negativeCols = ["#e66a40", "#e6af40",  "#e4e67a", "#c4e67a", "#a3e371", "#9aedae", "#9aeddc", "#9ad0ed", "#a19aed", "#ca9aed", "#fa9dc7" ];

//scope issues means this needs to be the constructor with data passed from main.js
function retrieve(longword, finalScore, finalWords, colSet, sentiment) {
    longword = longword; //Selected headline
    finalWords = finalWords; //Array of words from headline
    finalScore = finalScore; //Array of Score of each word from AFFIN
    colSet = colSet; //Array of color match on each word 
    sentiment = sentiment; //sentiment object library from main.js 
    var score = 0;
    for(i = 0; i < finalScore.length; i++) {
        score = score + finalScore[i];
      }

    if (score > 0) {
        bgCol = negativeCols[Math.floor(Math.random()*negativeCols.length)];

    }
    else if (score < 0) {
        bgCol = positiveCols[Math.floor(Math.random()*positiveCols.length)];


    }
    else if (score == 0) {
        bgCol = "#FCFCFC";

    }
   // createParts(finalWords);
   shapeStarter(finalWords);
}



var particles = [];

function setup() {
    createCanvas(500, 500);
    var canvasID = document.getElementById("defaultCanvas0");
    var wrapper = document.createElement('div');
    wrapper.id = "canvasWrapper";
    canvasID.parentNode.insertBefore(wrapper, canvasID);
    wrapper.appendChild(canvasID);
    

  }

  /**  
  function createParts(sentenceLength) {
    for(i = 0; i < sentenceLength.length; i++) {
        var posX = Math.floor(Math.random() * (250 - -250 +1)) + -250;
        var posY = Math.floor(Math.random() * (250 - -250 +1)) + -250;
        particles.push(new Particle(posX, posY, posY-posX, posX-posY, 8));
    }
    start = true;
    console.log("true")
  }
  
  function draw() {
    background(bgCol);
    
    if (start) {
        
        for (k = 0; k < particles.length; k++) {
            particles[k].show();
            particles[k].update();
        }
        
    

    }

  }
*/

flag = true;
var sentence;
function shapeStarter(finalWords) {
    sentence = finalWords;
   if(finalWords.length > 0) { start = true; }
    if (flag == false) { start = false;}
}


function draw() {
    background(bgCol);
    if (start) {
        for (let i = 0; i < sentence.length; i++) {
            stroke(255);
            noFill();
            beginShape();
            curveVertex(150, 250);
            curveVertex(250, 250);
            curveVertex(150, 450);
            curveVertex(350, 150);
            curveVertex(150, 250);
            endShape();
        }
       // start = false;
    }


}


  function processData() {
      let vectors = {};
      for (let i = 0; i < finalWords.length; i++) {
          let word = finalWords[i];
      }
  }