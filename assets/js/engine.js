const emojis = [
	'🐱',
	'🐱',
	'🦝',
	'🦝',
	'🦊',
	'🦊',
	'🐶',
	'🐶',
	'🐵',
	'🐵',
	'🦁',
	'🦁',
	'🐯',
	'🐯',
	'🐮',
	'🐮',
	];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1));

for (let i = 0; i < emojis.length; i++) {
	let box = document.createElement("div");
	box.className = "item";
	box.onclick = handleClick;
	box.innerHTML = shuffleEmojis[i];
	document.querySelector(".game").appendChild(box);
}



function checkMatch () {
	if (openCards[0].innerHTML === openCards[1].innerHTML) {
		openCards[0].classList.add("boxMatch");
		openCards[1].classList.add("boxMatch");
	}
	else {
		openCards[0].classList.remove("boxOpen");
		openCards[1].classList.remove("boxOpen");
	}

	openCards = [];

	if (document.querySelectorAll(".boxMatch").length === emojis.length) {
		alert("Fim")
	}
}						





function setInitialRotation() {
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 100}ms`;
        item.classList.add('rotate-initial');

        setTimeout(() => {
            item.classList.add('visible'); 
            item.classList.remove('rotate-initial');
        }, 1000); 
    });
}

function handleClick() {
    if (openCards.length < 2 && !this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
        this.classList.add('boxOpen');
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', handleClick);
    });

    setInitialRotation();
});
