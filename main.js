var canvas = new fabric.Canvas("myCanvas");
blockimagewidth = 30;
blockimageheight = 30;
playerX = 10;
playerY = 10;
var playerObject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        blockimageobject = Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockimageobject);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftkey == true && keypressed == "80") {
        console.log("shift and p pressed togehter");
        blockimagewidth = blockimagewidth + 10;
        blockimageheight = blockimageheight + 10;
        document.getElementById("current_width").innerHTML = blockimagewidth;
        document.getElementById("current_height").innerHTML = blockimageheight;
    }
    if (e.shiftkey == true && keypressed == "77") {
        console.log("shift and  m pressed togehter");
        blockimagewidth = blockimagewidth - 10;
        blockimageheight = blockimageheight - 10;
        document.getElementById("current_width").innerHTML = blockimagewidth;
        document.getElementById("current_height").innerHTML = blockimageheight;
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40')
     {
        down();
        console.log("down");
    }
    if (keypressed == "87")
     {
        new_image('wall.jpg');
        console.log("w");
    }
    if (keypressed == "82") 
    {
        new_image('roof.jpg');
        console.log("r");
    }
    if (keypressed == "84") 
    {
        new_image('trunk.jpg');
        console.log("t");
    }
    if (keypressed == "85")
     {
        new_image('unique.png');
        console.log("u");
    }
    if (keypressed == "89") 
    {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if (keypressed == "67") 
    {
        new_image("cloud.jpg");
        console.log("c");
    }
    if (keypressed == "68")
     {
        new_image('dark_green.png');
        console.log("d");
    }
    if (keypressed == "71") 
    {
        new_image('ground.png');
        console.log("g");
    }
    if (keypressed == "76") 
    {
        new_image('light_green.png');
        console.log("l");
    }
}
function up(){
    if (playerY>=0){
        playerY=playerY-blockimageheight;
        console.log("blockimageheight = "+blockimageheight);
        console.log("when up arrow key is pressed,x="+playerX+",y="+playerY);
        canvas.remove(playerObject);
        player_update();
    }
}
function down(){
    if (playerY<=500){
        playerY=playerY+blockimageheight;
        console.log("blockimageheight = "+blockimageheight);
        console.log("when down arrow key is pressed,x="+playerX+",y="+playerY);
        canvas.remove(playerObject);
        player_update();
    }
}
function left(){
    if (playerX>=0){
        playerX=playerX-blockimagewidth;
        console.log("blockimagewidth = "+blockimagewidth);
        console.log("when left arrow key is pressed,x="+playerX+",y="+playerY);
        canvas.remove(playerObject);
        player_update();
    }
}
function right(){
    if (playerX>=0){
        playerX=playerX+blockimagewidth;
        console.log("blockimagewidth = "+blockimagewidth);
        console.log("when right  arrow key is pressed,x="+playerX+",y="+playerY);
        canvas.remove(playerObject);
        player_update();
    }
}
