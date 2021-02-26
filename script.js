const container = document.querySelector(".container");
const button = document.querySelector(".button");

for (let index = 0; index < 256; index++) {
	const randomDiv = document.createElement("div");

	container.appendChild(randomDiv);
}
draw();
button.addEventListener("click", grabNum);

function grabNum() {
	let userIn = prompt("Enter Number", 0);
	if (userIn >= 100 || userIn <= 0) {
		alert("enter greater than 0 or less than 100 dingus");
	} else {
		container.innerHTML = "";
		container.style.gridTemplate = `repeat(${userIn}, 1fr)/ repeat(${userIn}, 1fr)`;

		for (let index = 0; index < userIn * userIn; index++) {
			const randomDiv = document.createElement("div");
			container.appendChild(randomDiv);
		}
		draw();
	}
}

function draw() {
	const newDiv = container.querySelectorAll("div");
	newDiv.forEach((div) => {
		div.addEventListener("mouseover", () => {
			div.style.backgroundColor = "black";
		});
	});
}
