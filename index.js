const display = document.querySelector(".numbers");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const saveBtn = document.querySelector(".save-btn");
const historyList = document.querySelector(".history-list");
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
const timer = () => {
	miliseconds++;
	if (miliseconds === 100) {
		seconds++;
		miliseconds = 0;
	}
	if (seconds === 60) {
		minutes++;
		seconds = 0;
	}
	if (minutes === 60) {
		hours++;
		minutes = 0;
	}
	displayNumbers();
};
const resetTimer = () => {
	miliseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	displayNumbers();
};
const displayNumbers = () => {
	display.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${
		seconds < 10 ? "0" + seconds : seconds
	}:${miliseconds < 10 ? "0" + miliseconds : miliseconds}`;
};
const saveDisplay = () => {
	const saveNumbers = (display.textContent = `${hours < 10 ? "0" + hours : hours}:${
		minutes < 10 ? "0" + minutes : minutes
	}:${seconds < 10 ? "0" + seconds : seconds}:${miliseconds < 10 ? "0" + miliseconds : miliseconds}`);
	const newLi = document.createElement("li");
	newLi.textContent = saveNumbers.toString();
	historyList.appendChild(newLi);
};
const startStop = (e) => {
	if (e.target.textContent === "Start") {
		e.target.textContent = "Stop";
		return (timerIndex = setInterval(timer, 10));
	}
	if (e.target.textContent === "Stop") {
		e.target.textContent = "Start";
		return clearInterval(timerIndex);
	}
};

startBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", resetTimer);
saveBtn.addEventListener("click", saveDisplay);
displayNumbers();
