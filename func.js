let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let arrayBtn = [];


for (var i = 1; i < 7; i++) {
	arrayBtn.push(document.getElementById(`btn${i}`));
}


arrayBtn[0].addEventListener("click", () => {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	} else {
		tg.MainButton.setText("You choice 1!");
		item = "1";
		tg.MainButton.show();
	}
})


Telegram.WebApp.onEvent("mainButtonClicked", () => {
	tg.sendData(item);
});


const userCard = document.getElementById("usercard")
let p = document.createElement("p");
p.innerHTML = `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`;

userCard.appendChild(p);