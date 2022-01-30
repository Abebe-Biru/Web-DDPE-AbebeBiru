function spn() {
    document.getElementById("spn").style.display = "block";
    document.getElementById("btn").innerHTML = "";
}

function spn1() {
    document.getElementById("spn").style.display = "none";
}
/*
DOM #2;
*/
function removeVdAd() {
    var p1 = document.getElementById("vd");
    var video = document.getElementById("video");
    p1.removeChild(video);

    var p2 = document.getElementById("life");
    var img = document.getElementById("life1");
    p2.removeChild(img);
}

function swapDom() {
    var p1 = document.getElementById("vd");
    var img = document.createElement(img);
    img.src = "life1.jpg";
    p1.appendChild(img);
}

function deleteDom() {
    var audio = document.getElementById("audio");
    audio.remove();
}

function addPar() {
    var tdd = document.getElementById("tdd");
    var p = document.createElement("p");
    p.innerText = "This is Multimedia Activity";
    tdd.insertBefore(p, tdd.children[0]);
}