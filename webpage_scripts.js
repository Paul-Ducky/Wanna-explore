function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

let deadline1 = new Date("Jan 13, 2021 17:00:00").getTime();
let x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline1 - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("countdown1").innerHTML = days + "d "
        + hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("countdown1").innerHTML = "No longer Available";
    }
}, 1000);

let deadline2 = new Date("Jan 14, 2021 17:00:00").getTime();
let y = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline2 - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("countdown2").innerHTML = days + "d "
        + hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(y);
        document.getElementById("countdown2").innerHTML = "No longer Available";
    }
}, 1000);

let deadline3 = new Date("Jan 21, 2021 17:00:00").getTime();
let z = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline3 - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("countdown3").innerHTML = days + "d "
        + hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(z);
        document.getElementById("countdown3").innerHTML = "No longer Available";
    }
}, 1000);

