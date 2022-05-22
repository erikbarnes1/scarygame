function selectDoor() {
    var image = document.getElementsByClassName("image");
    let random = options[Math.floor(Math.random() * options.length)];
    if (random === "no monster") {
        return window.open("level4.html") && window.close("level3.html");
    }
    else {
        return window.open("monster3.html") && window.close("level3.html");
    }
   
}
let options = ["no monster", "no monster", "yes monster"];