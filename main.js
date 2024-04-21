var typed = new Typed(".about", {
	strings: ["Programozó", "Frontend fejlesztő", "Informatikus"],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true,
	showCursor: true,
});

$(".lang-bar").on("click", ".handle", (event) => {
	var switcher = document.getElementsByClassName("lang-bar")[0];
	if (switcher.style.right !== "0px") {
		switcher.style.right = "0px";
	} else {
		switcher.style.right = "-150px";
	}
});
$(".lang-body").on("click", "#languageSwitcher", (event) => {
	var name = document.getElementById("name");
	var description = document.getElementById("description");
	if ($("#languageSwitcher").is(":checked")) {
		//ANGOL VERZIÓ
		console.log("Checkbox is checked");
		name.textContent = "Réka Hajdú";
		description.textContent = "I graduated in February of 2024 from... ";
	} else {
		//MAGYAR VERZÓ
		console.log("Checkbox is not checked");
		name.textContent = "Hajdú Réka";
	}
});
