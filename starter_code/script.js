function draw() {
    let canvas = document.getElementById('racecar');
    let ctx = canvas.getContext('2d');

    ctx.fillRect(300, 300, 100, 100);

}

draw()



window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };



    function startGame() {

    }
};