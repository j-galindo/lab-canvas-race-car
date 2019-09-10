window.onload = function() {
    function boardgame() {
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
    boardgame();

    // testing the car object
    let car = {
        x: 225,
        y: 500,
        moveLeft: function() { this.x -= 25 },
        moveRight: function() { this.x += 25 }
    }

    function drawCar(car) {
        var canvas = document.getElementById('road');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        imgScale = 1 / 2;
        img.onload = function() {
            ctx.drawImage(img, car.x, car.y, 100 * imgScale, 100);
        };
        img.src = './images/car.png';
    }

    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {

    }


}