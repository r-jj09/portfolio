var typed = new Typed(".about", {
	strings: ["Programozó", "Frontend fejlesztő", "Informatikus"],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true,
	showCursor: true,
});

// var handle = document.getElementsByClassName("handle");

$(".lang-bar").on("click", ".handle", (event) => {
	var switcher = document.getElementsByClassName("lang-bar")[0];
	if (switcher.style.right !== "0px") {
		switcher.style.right = "0px";
	} else {
		switcher.style.right = "-150px";
	}
});
