function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm2() {
    document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
}

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
