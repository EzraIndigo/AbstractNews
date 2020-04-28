var longword = "";

function retrieve(longword) {
    longword = longword;
    console.log(longword);
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
  
