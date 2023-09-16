
document.getElementById('myImage').addEventListener("mouseover", function () {
    document.getElementById('myImage').style.backgroundImage = "url(images/0.gif)";
});

document.addEventListener("mousemove", function (event) {
    if (event.target !== document.getElementById('myImage')) {
        var cursorX = event.clientX;
        var cursorY = event.clientY;

        var angle = (Math.atan2(cursorY - window.innerHeight / 2, cursorX - window.innerWidth / 2) * 180 / Math.PI) + 22.5;

        if (angle < 0) {
            angle += 360;
        }

        var imageIndex = Math.floor(angle / 45 + 1);
        document.getElementById('myImage').style.backgroundImage = "url(images/" + imageIndex + ".png)";
    }
});   
