const characters = "abcdefghijklmnopqrstuvwxyz";

const copied = [];

async function spamClipboard() {
	for (let i = 0; i < 10; i++) {
		let str = "";

		for (let j = 0; j < 10; j++) {
			str += characters[Math.floor(Math.random() * characters.length)];
		}

		console.log("Copying string", str);
		await navigator.clipboard.writeText(str);
		copied.push(str);
		updateLogs();
		await new Promise(res => setTimeout(res, 15));
	}
};

function updateLogs() {
	const p = document.querySelector("p.logs");

	p.innerHTML = copied.map((entry) => `Copied text "${entry}"`).join("<br />");
}
