document.addEventListener("mousemove", function (event) {
    var cursorX = event.clientX;
    var cursorY = event.clientY;

    var angle = (Math.atan2(cursorY - window.innerHeight / 2, cursorX - window.innerWidth / 2) * 180 / Math.PI) + 22.5;

    if (angle < 0) {
        angle += 360;
    }

    var imageIndex = Math.floor(angle / 45 + 1);

    var images = document.querySelectorAll(".image");
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }
    images[imageIndex].classList.add("active");

    var person = document.querySelector(".person");
    person.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});