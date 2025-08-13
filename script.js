const characters = "abcdefghijklmnopqrstuvwxyz";

async function spamClipboard() {
	for (let i = 0; i < 10; i++) {
		let str = "";

		for (let j = 0; j < 10; j++) {
			str += characters[Math.floor(Math.random() * characters.length)];
		}

		console.log("Copying string", str);
		await navigator.clipboard.writeText(str);
		await new Promise(res => setTimeout(res, 15));
	}
};
