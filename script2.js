function selectDoor() {
    var image = document.getElementsByClassName("image");
    let random = options[Math.floor(Math.random() * options.length)];
    if (random === "no monster") {
        return window.open("level3.html") && window.close("level2.html");
    }
    else {
        return window.open("monster2.html") && window.close("level2.html");
    }
   
}
let options = ["no monster", "no monster", "no monster", "yes monster"];