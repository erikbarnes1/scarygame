function selectDoor() {
    var image = document.getElementsByClassName("image");
    let random = options[Math.floor(Math.random() * options.length)];
    if (random === "no monster") {
        return window.open("monster7.html") && window.close("level7.html");
    }
    else {
        return window.open("monster7.html") && window.close("level7.html");
    }
   
}
let options = ["no monster"];