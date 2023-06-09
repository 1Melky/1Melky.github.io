


alert("Welkom");
let age = prompt("Hoe oud ben je")
if (age>=18) {
    alert("je moet gokken of het volgende nummer hoger of lager gaat worden dan het vorige nummer en als je correct ben dan krijg je een punt als je het incorrect hebt dan reset je score");
    alert("succes");

    
}
else{
    alert("JE MAG NIET SPELLEN!");
    for (let i = 10; i > 0; i++) {
        console.log("JE MAG NIET SPELLEN!",i);
    }
}
const current_elem = document.getElementById("current");
const btns = document.getElementsByClassName("btn");
const result_elem = document.getElementById("result");
const score_elem = document.getElementById("score");

let last_number = 0;
let current_number = getRandomInt();
let score = 0;

current_elem.innerText = current_number;

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		PlayGame(this.dataset.value);
	});
}

function PlayGame (choice) {
	last_number = current_number;
	current_number = getRandomInt();
	current_elem.innerText = current_number;
	
	let comparison;
	
	if (last_number < current_number) {
		comparison = "higher";
	} else if (last_number > current_number) {
		comparison = "lower";
	} else {
		comparison = "match";
	}

	if (choice == comparison) {
		score++;
		score_elem.innerText = score;
		result_elem.innerText = "Correct";
		result_elem.classList.add("correct");
		result_elem.classList.remove("hide");

		setTimeout(function () {
			result_elem.classList.remove("correct");
			result_elem.classList.add("hide");
		}, 750);
	} else if (comparison == "match") {
		result_elem.innerText = "Match";
		result_elem.classList.remove("hide");

		setTimeout(function () {
			result_elem.classList.add("hide");
		}, 750);
	} else {
		result_elem.innerText = "Incorrect";
		result_elem.classList.add("incorrect");
		result_elem.classList.remove("hide");

		score = 0;
		score_elem.innerText = score;

		setTimeout(function () {
			result_elem.classList.remove("incorrect");
			result_elem.classList.add("hide");
		}, 750);
	}
}

function getRandomInt () {
	return Math.floor((Math.random() * 10));
}

