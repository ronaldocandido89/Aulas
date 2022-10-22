let gammer = "X";

function winner() {
    let elements = document.getElementById("tabuleiro").children;
    if(
        elements[0].innerText === elements[1].innerText &&
        elements[1].innerText === elements[2].innerText &&
        elements[0].innerText.length !== 0        
        ) {
        elements[0].style="background-color: red;";
        elements[1].style="background-color: red;";
        elements[2].style="background-color: red;";
    }
    let x = 1;
}

function mark(element) {
    if (element.innerText.length === 0) {
   element.innerText = gammer;
   winner();
   if (gammer === "X") {
    gammer = "O";
   } else {
    gammer = "X";
   }
}
} 