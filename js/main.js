
// collegamenti con il DOM 
const gridDom = document.getElementById("grid");
const btnPlayDom = document.getElementById("btn-play");


for (let i = 1; i <= 100; i++) {
   
    const currentSquare = createSquare();
    
    gridDom.append(currentSquare);
    currentSquare.append(i);

    currentSquare.addEventListener("click" , 
    
        function () {
            currentSquare.classList.toggle("active");
            console.log(i);
        }   
    
    );
}

btnPlayDom.addEventListener("click" , 

    function() {
        gridDom.classList.remove("d-none");
    }

);


// function per la creazione di square
function createSquare () {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");
    return squareElement;
}