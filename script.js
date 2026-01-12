const view = document.getElementById('view');
const background = document.getElementById('background');
const backview = document.getElementById('backview');
const frontview = document.getElementById('frontview');

function resize() {
    background.style.height = view.offsetHeight + "px";
    backview.style.height = view.offsetHeight + "px";
    backview.style.display = "block";
    frontview.style.height = view.offsetHeight + "px";
    frontview.style.display = "block";
}

window.addEventListener('load', resize);
window.addEventListener('resize', resize);