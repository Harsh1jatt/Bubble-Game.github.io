let score = 0;
let time = 60;
let hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function runTimer() {
    let timeinit = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#time").textContent = time;
            if(time<10){
                document.querySelector("#time").textContent = `0${time}`
            }
        }
        else {
            clearInterval(timeinit);
            document.querySelector(".bottom").innerHTML = `<h1>Game Over! <br>Score: ${score}</h1>`
        }
    }, 1000);
}

function genBubble() {
    let clutter = "";
    for (let i = 0; i < 120; i++) {
        let rand = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rand}</div>`
    }
    document.querySelector(".bottom").innerHTML = clutter;
}

function hit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = `0${hitrn}`;

}

document.querySelector(".bottom").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);

    if(clickedNum === hitrn){
        increaseScore()
        genBubble()
        hit()
    }
})
hit()
runTimer()
genBubble()
// increaseScore()