var longword = "";
var finalScore = [];
var finalWords = [];
var colSet = [];
var sentiment;
let bgCol = "#FCFCFC";
var start = false;

const negativeCols = ["#ad0707", "#782e2e", "#78552e", "#4a461f", "#3c422f", "#334236", "#1b2e29", "#2c262e", "#363636", "#0a0a0a"];
const positiveCols = ["#e66a40", "#e6af40",  "#e4e67a", "#c4e67a", "#a3e371", "#9aedae", "#9aeddc", "#9ad0ed", "#a19aed", "#ca9aed", "#fa9dc7" ];

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

    if (score < 0) {
        bgCol = negativeCols[Math.floor(Math.random()*negativeCols.length)];

    }
    else if (score > 0) {
        bgCol = positiveCols[Math.floor(Math.random()*positiveCols.length)];


    }
    else if (score == 0) {
        bgCol = "#FCFCFC";

    }
   // createParts(finalWords);
   var wholeScore = sentiment.classify(longword);
   shapeStarter(finalWords, finalScore, wholeScore, colSet);
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
var scores;
var allShapes = [];

function shapeStarter(finalWords, finalScore, wholeScore) {
    allShapes = [];
    scores = finalScore;
    sentence = finalWords;
    wholeScore = wholeScore;
 
    for(i = 0; i < sentence.length; i++) {

        if (wholeScore < 0) {

       allShapes.push(
           new ShapeNegative(
               random(10, 450), 
               random(10, 450), 
               random(10, 450), 
               random(10, 450), 
               random(10, 450), 
               random(10, 450),
               negativeCols[Math.floor(Math.random()*negativeCols.length)]
               ));
           }
           else if (wholeScore > 0) {
            allShapes.push(
                new ShapePositive(
                    random(10, 450), 
                    random(10, 450), 
                    random(10, 450), 
                    random(10, 450), 
                    random(10, 450), 
                    random(10, 450),
                    positiveCols[Math.floor(Math.random()*positiveCols.length)]
                    ));
           }
           else{
            
            var ncol = "";
            if (i % 2) {
                  ncol = "#cfc8ce";  
            }
            else {  ncol = "#dbb172";
        }
            allShapes.push(
                new ShapeNeut(
                    random(10, 450), 
                    random(50, 350), 
                    random(50, 350), 
                    random(100, 450), 
                    random(100, 450), 
                    random(100, 650),
                    
                    ncol));
                }
                
           }

          
    
  //  console.log(allShapes);
   if(finalWords.length > 0) { start = true; }
    if (flag == false) { start = false;}



}






function ShapeNegative(x1, x2, x3, y1, y2, y3, col) {
this.x1 = x1; 
this.x2 = x2;
this.x3 = x3;
this.y1 = y1;
this.y2 = y2;
this.y3 = y3;
this.col = col;


    this.show = function() {
        strokeWeight(random(3, 5));
        stroke(col);
        noFill();
        beginShape();
        vertex(x1, y1);
        vertex(y1, x2);
        vertex(x2, y2);
        vertex(y2, x3);
        vertex(x3, y3);
        endShape();
    };
}

function ShapePositive(x1, x2, x3, y1, y2, y3, col) {
this.x1 = x1; 
this.x2 = x2;
this.x3 = x3;
this.y1 = y1;
this.y2 = y2;
this.y3 = y3;
this.col = col;
      this.show = function() {
        strokeWeight(random(5, 10));
        stroke(col);
        noFill();
        beginShape();
        curveVertex(x1, y1);
        curveVertex(y1, x2);
        curveVertex(x2, y2);
        curveVertex(y2, x3);
        curveVertex(x3, y3);
        endShape();
      }
}

function ShapeNeut(x1, x2, x3, y1, y2, y3, col) {
    this.x1 = x1; 
    this.x2 = x2;
    this.x3 = x3;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
    this.col = col;

    this.show = function() {   
    strokeWeight(5);
        stroke(col);
        noFill();
        beginShape();
        curveVertex(x1, y1);
        curveVertex(y1, x2);
        curveVertex(y2, x3);
        curveVertex(x3, y3);
        endShape();
    }
}






function draw() {
    background(bgCol);
    if (start) {
        
        
        for(i = 0; i < sentence.length; i++) {
            allShapes[i].show();
        }

        

    }


}






  function processData() {
      let vectors = {};
      for (let i = 0; i < finalWords.length; i++) {
          let word = finalWords[i];
      }
  }