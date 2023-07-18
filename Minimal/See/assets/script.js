document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball() {
    let eye = document.querySelector('.eye');
    let eyeball = document.querySelector('.eyeball');

    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);


    let radian = Math.atan2(event.pageX - x, event.pageY - y);

    let rot = (radian * (180 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate(" + rot + "deg)";

    eyeball.addEventListener("mouseover", function () {
        eyeball.style.left = "50%";
    })
    eyeball.addEventListener("mouseout", function () {
        eyeball.style.left = "36%";
    })
}