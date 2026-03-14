function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

window.onload = function () {

    let video = document.getElementById("bgVideo");

    if (video) {
        video.playbackRate = 0.5;
    }

}


/* BACK TO TOP BUTTON */

let mybutton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}