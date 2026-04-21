let texts = {
	it: {
		title: "Associazione Culturale Serba",
		name: "Pontes-Mostovi",
		location: "Trieste, Italia"
	},
	rs: {
		title: "",
		name: "",
		location: ""
	},
	en: {
		title: "",
		name: "",
		location: ""
	}
}

let language_box_links = [
	{hreflang: "it", href: "/", text: "ITALIANO", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/330px-Flag_of_Italy.svg.png"},
	{hreflang: "sr", href: "/rs", text: "СРПСКИ", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/330px-Flag_of_Serbia.svg.png"},
	{hreflang: "en", href: "/en", text: "ENGLISH", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/330px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"}
]

window.onload = function() {
	languageBox();
}

function languageBox() {
	let language_box = $("#language-box");
	language_box.append()


	return;
	language_box_links.forEach(function(el){
		let flag = $("<img>", {
			class: "flag",
			src: el.src
		});
		let button = $("<a>", {
			class: "language",
			rel: "alternate",
			hreflang: el.hreflang,
			href: el.href,
			text: el.text
		});

		button.append(flag)
		language_box.append(button)
	});

}