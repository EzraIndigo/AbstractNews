

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
 elem.style.color = "rgb(214, 93, 93)";
 setupWord(elem.textContent); //rerun functions below
}



