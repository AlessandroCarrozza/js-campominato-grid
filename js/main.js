
// collegamento al DOM di container-square
const gridDom = document.getElementById("grid");



for (let i = 1; i <= 100; i++) {
   
    const currentSquare = createSquare();
    
    gridDom.append(currentSquare);
    currentSquare.append(i);
}




// function per la creazione di square
function createSquare () {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");
    return squareElement;
}