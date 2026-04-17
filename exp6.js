document.getElementById("changeText").addEventListener("click", function () {
    let text = document.getElementById("inputText").value;
    document.getElementById("heading").innerText = text;
});


document.getElementById("bgColor").addEventListener("click", function () {
    document.body.style.backgroundColor = 
        "#" + Math.floor(Math.random()*16777215).toString(16);
});


let size = 20;
document.getElementById("increaseFont").addEventListener("click", function () {
    size += 2;
    document.getElementById("heading").style.fontSize = size + "px";
});


let visible = true;
document.getElementById("togglePara").addEventListener("click", function () {
    let para = document.getElementById("para");

    if (visible) {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }

    visible = !visible;
});