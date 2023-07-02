
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
	if(inputBox.value === ''){
		alert("Please add a task..!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = '';
	saveData();
}

listContainer.addEventListener("click", function(e) {
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		if(e.target.classList.contains("checked")){
			createConfetti(e.target);
		}
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
}, false);

function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showData();

function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    confetti.create(undefined, {
        resize: true,
        useWorker: true,
    })({ particleCount: 100, spread: 70, origin: { x: x / window.innerWidth, y: y / window.innerHeight } });
}