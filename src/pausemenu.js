function pauseMenu() {
    if (paused == true) {
        push();
        rectMode(CENTER);
        fill(51, 128);
        rect(0, 0, width, height);
        pop();

        push();
        rectMode(CORNERS);
        fill(51);
        rect(200, 200, -200, -200);
        pop();


        push();
        translate(0, -120);
        rectMode(CORNERS);
        fill(51);
        rect(-175, -50, 175, 50);
        pop();

        push();
        translate(0, -100);
        textFont(inconsolatafont);
        textAlign(CENTER);
        textSize(70);
        text("RESUME", 0, 0);
        pop();

        push();
        translate(0, 0);
        rectMode(CORNERS);
        fill(51);
        rect(-175, -50, 175, 50);
        pop();

        push();
        translate(0, 20);
        textFont(inconsolatafont);
        textAlign(CENTER);
        textSize(70);
        text("MAIN MENU", 0, 0);
        pop();

        push();
        translate(0, 120);
        rectMode(CORNERS);
        fill(51);
        rect(-175, -50, 175, 50);
        pop();

        push();
        translate(0, 140);
        textFont(inconsolatafont);
        textAlign(CENTER);
        textSize(70);
        text("SETTINGS", 0, 0);
        pop();
    }
}
function pausedButtons() {
    let screenX = map(mouseX, 0, width, -width / 2, width / 2);
    let screenY = map(mouseY, 0, height, -height / 2, height / 2);
    if (paused == true && !inMainMenu) {
        if (screenX >= -175 && screenX <= 175 && screenY >= -170 && screenY <= -70) {
            paused = false;
        }
    }
    if (paused == true && !inMainMenu) {
        if (screenX >= -175 && screenX <= 175 && screenY >= -50 && screenY <= 50) {
            inMainMenu = true;
            paused = false;
        }
    }
    if (paused == true && !inMainMenu) {
        if (screenX >= -175 && screenX <= 175 && screenY >= 70 && screenY <= 170) {
            console.log("not done yet");
            // TODO:
        }
    }
}