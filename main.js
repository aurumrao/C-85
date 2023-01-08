var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
Mars_Images = [
    "Nasa-1.jpg", "Nasa-2.jpg", "Nasa-3.jpg", "Nasa-4.jpg"
];
var random_number = Math.floor(Math.random()*4);
console.log(random_number);
rover_width = 100;
rover_height = 90;
background_img = Mars_Images[random_number];
console.log("background_img"+ background_img);
rover_img = "rover.png";
rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (KeyPressed == '38') {
        up();
        console.log("up");
    }
    if (KeyPressed == '40') {
        down();
        console.log("down");
    }
    if (KeyPressed == '37') {
        left();
        console.log("left");
    }
    if (KeyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 10) {
        rover_y = rover_y - 10;
        console.log("x = " + rover_x + "| Y = " + rover_y + ".");
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 590) {
        rover_y = rover_y + 10;
        console.log("x = " + rover_x + "| Y = " + rover_y + ".");
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 10) {
        rover_x = rover_x - 10;
        console.log("x = " + rover_x + "| Y = " + rover_y + ".");
        uploadBackground();
        uploadrover();
    }

}

function right() {
    if (rover_x <= 790) {
        rover_x = rover_x + 10;
        console.log("x = " + rover_x + "| Y = " + rover_y + ".");
        uploadBackground();
        uploadrover();
    }
}