function selectDoor() {
    var image = document.getElementsByClassName("image");
    let random = options[Math.floor(Math.random() * options.length)];
    if (random === "no monster") {
        return window.open("level7.html") && window.close("level6.html");
    }
    else {
        return window.open("monster6.html") && window.close("level6.html");
    }
   
}
let options = ["no monster", "no monster", "yes monster"];