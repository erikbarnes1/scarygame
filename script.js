function selectDoor() {
    var image = document.getElementsByClassName("image");
    let random = options[Math.floor(Math.random() * options.length)];
    if (random === "no monster") {
        return window.open("level2.html") && window.close("level1.html");
    }
    else {
        return window.open("monster.html") && window.close("level1.html");
    }
   
}
let options = ["no monster", "no monster", "yes monster"];