let fontSize = 16;
let isVisible = true;

function changeHeading() {
    let text = document.getElementById("inputText").value;
    document.getElementById("heading").innerText = text;
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");

    if (isVisible) {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }

    isVisible = !isVisible;
}

function resetPage() {
    location.reload();
}