var TICKER;
var TICKDUR: number;

function setup() {
    TICKDUR = 50;
}

function tick() {
    
}

function main() {
    setup();
    TICKER = setInterval(tick, TICKDUR);
}

window.addEventListener("load", (e) => {
    main();
});