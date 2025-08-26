let copied = [];

async function spamClipboard() {
	const characters = getCharacters();

	for (let i = 0; i < getCopies(); i++) {
		let str = "";

		for (let j = 0; j < getLength(); j++) {
			str += characters[Math.floor(Math.random() * characters.length)];
		}

		console.log("Copying string", str);
		await navigator.clipboard.writeText(str);
		copied.unshift(str);
		updateLogs();
		await new Promise(res => setTimeout(res, getDelay()));
	}
};

function updateLogs() {
	const p = document.querySelector("pre.logs");

	p.textContent = copied.map((entry) => `Copied text "${entry}"`).join("\n");
}

function clearLogs() {
	copied = [];

	updateLogs();
}

function getDelay() {
	const d = document.getElementById("delay");
	return d.value;
}

function getLength() {
	const l = document.getElementById("length");
	return l.value;
}

function getCopies() {
	const c = document.getElementById("copies")
	return c.value;
}

function getCharacters() {
	const c = document.getElementById("characters");
	return c.value;
}
