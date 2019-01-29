// first step : 
let color : string = "green";
let squareSizeNum : number = 20;

// width and height properties of the square div
let squareSize: string = `${squareSizeNum} px`;

let butt = document.createElement('button');
let div = document.createElement('div');


butt.textContent= "change color";
document.body.appendChild(butt);
document.body.appendChild(div);
