window.onload = function() {

    function draw() {
        let canvas = document.getElementById("racecar");
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, 500, 650);
        ctx.clearRect(30, 0, 10, 650);
        ctx.fillStyle = "gray";
        ctx.fillRect(30, 0, 10, 650);

        ctx.clearRect(40, 0, 10, 650);
        ctx.fillStyle = "white";
        ctx.fillRect(40, 0, 10, 650);

        ctx.clearRect(50, 0, 420, 650);
        ctx.fillStyle = "gray";
        ctx.fillRect(50, 0, 420, 650);

        ctx.clearRect(450, 0, 10, 650);
        ctx.fillStyle = "white";
        ctx.fillRect(450, 0, 10, 650);


        ctx.fillStyle = "white";
        ctx.clearRect(250, 0, 10, 5);
        ctx.fillRect(250, 0, 10, 5);
        ctx.clearRect(250, 10, 10, 5);
        ctx.fillRect(250, 10, 10, 5);
        ctx.clearRect(250, 20, 10, 5);
        ctx.fillRect(250, 20, 10, 5);
        ctx.clearRect(250, 30, 10, 5);
        ctx.fillRect(250, 30, 10, 5);
        ctx.clearRect(250, 40, 10, 5);
        ctx.fillRect(250, 40, 10, 5);
        ctx.clearRect(250, 50, 10, 5);
        ctx.fillRect(250, 50, 10, 5);
        ctx.clearRect(250, 60, 10, 5);
        ctx.fillRect(250, 60, 10, 5);
        ctx.clearRect(250, 70, 10, 5);
        ctx.fillRect(250, 70, 10, 5);
        ctx.clearRect(250, 80, 10, 5);
        ctx.fillRect(250, 80, 10, 5);
        ctx.clearRect(250, 90, 10, 5);
        ctx.fillRect(250, 90, 10, 5);
        ctx.clearRect(250, 100, 10, 5);
        ctx.fillRect(250, 100, 10, 5);
        ctx.clearRect(250, 110, 10, 5);
        ctx.fillRect(250, 110, 10, 5);
        ctx.clearRect(250, 120, 10, 5);
        ctx.fillRect(250, 120, 10, 5);
        ctx.clearRect(250, 130, 10, 5);
        ctx.fillRect(250, 130, 10, 5);
        ctx.clearRect(250, 140, 10, 5);
        ctx.fillRect(250, 140, 10, 5);
        ctx.clearRect(250, 150, 10, 5);
        ctx.clearRect(250, 150, 10, 5);

    }



    draw();

    document.getElementById("start-button").onclick = function() {
        startGame();
    };




    function startGame() {

    }


}