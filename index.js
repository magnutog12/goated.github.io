window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading-overlay').style.display = 'none';
    }, 4000);

    var i = 0;
    var txt = "goated memes 2025 goated memes 2025 goated memes 2025";
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("d").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
