let myBlock;
document.addEventListener("DOMContentLoaded", function (){
    myBlock = document.createElement("div");
    myBlock.textContent = "Hello Bobby";
    myBlock.style.width = "100px";
    myBlock.style.height = "100px";
    myBlock.style.backgroundColor = "orange";
    myBlock.style.color = "white";
    myBlock.style.lineHeight = "100px";
    myBlock.style.textAlign = "center";
    myBlock.style.position = "absolute";
    myBlock.style.top = "100px";
    myBlock.style.left = "150px";
    document.body.appendChild(myBlock);
});

document.addEventListener("keydown", function (d){
    d.preventDefault();
    let arrowKeys = d.keyCode;

    if (arrowKeys === 37){
        goLeft();
    }else if (arrowKeys === 38){
        goUp();
    }else if (arrowKeys === 39){
        goRight();
    } else if (arrowKeys === 40){
        goDown();
    }else if (arrowKeys === 67){
        myBlock.style.backgroundColor = randomColor();
    }
    console.log(d.keyCode);
})

function randomColor (){
return "#"+ Math.random().toString(16).substr(-6)
}

function goLeft (){
    let temp = myBlock.offsetLeft;
    temp -= 50;
    myBlock.style.left = temp + "px";
}
function goRight (){
    let temp = myBlock.offsetLeft;
    temp += 50;
    myBlock.style.left = temp + "px";
}
function goUp (){
    let temp = myBlock.offsetTop;
    temp -= 50;
    myBlock.style.top = temp + "px";
}
function goDown (){
    let temp = myBlock.offsetTop;
    temp += 50;
    myBlock.style.top = temp + "px";
}