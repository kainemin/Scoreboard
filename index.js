let scoreH = 0;
let scoreG = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

homeScore.textContent = scoreH;
guestScore.textContent = scoreG;

function add1PointH () {
    let result = (scoreH += 1);
    homeScore.innerText = result;
}

function add1PointG () {
    let result = (scoreG += 1);
    guestScore.innerText = result;
}

function add2PointH () {
    let result = (scoreH += 2);
    homeScore.innerText = result;
}

function add2PointG () {
    let result = (scoreG += 2);
    guestScore.innerText = result;
}

function add3PointH () {
    let result = (scoreH += 3);
    homeScore.innerText = result;
}

function add3PointG () {
    let result = (scoreG += 3);
    guestScore.innerText = result;
}

function scoreReset () {
    scoreH = 0;
    scoreG = 0;
    homeScore.innerText = scoreH;
    guestScore.innerText = scoreG;
}