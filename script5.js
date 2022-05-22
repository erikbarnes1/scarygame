function selectDoor() {
    var image = document.getElementsByClassName("image");
    let random = options[Math.floor(Math.random() * options.length)];
    if (random === "no monster") {
        return window.open("level6.html") && window.close("level5.html");
    }
    else {
        return window.open("monster5.html") && window.close("level5.html");
    }
   
}
let options = ["no monster", "no monster", "yes monster"];