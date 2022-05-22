function selectDoor() {
    var image = document.getElementsByClassName("image");
    let random = options[Math.floor(Math.random() * options.length)];
    if (random === "no monster") {
        return window.open("level5.html") && window.close("level4.html");
    }
    else {
        return window.open("monster4.html") && window.close("level4.html");
    }
   
}
let options = ["no monster", "no monster", "yes monster"];