class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    //   this.startButton.addEventListener("click", this.start);
  }

  start = () => {
    console.log("clicou");
    this.tick();
    this.counter = setInterval(this.tick, 1000);
  };
  pause = () => {
    clearInterval(this.counter);
  };
  onDurationChange = () => {};
  tick = () => {
    console.log("tick");
    const timeRemaining = this.timeRemaining;
    this.timeRemaining = timeRemaining - 1;
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}
export default Timer;
