import Timer from "./classes/timer.js";

const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");

const timer = new Timer(durationInput, startBtn, pauseBtn);
startBtn.addEventListener("click", timer.start);
pauseBtn.addEventListener("click", timer.pause);
