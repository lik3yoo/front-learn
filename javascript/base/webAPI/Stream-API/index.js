const textToMove = document.querySelector("#text-to-move")

const moveButton = document.querySelector("#move-button")
const resetButton = document.querySelector("#reset-button")

const startStream = () => {
	const charactersToMove = textToMove.textContent.split("")
	const isLast = index => length => index === length - 1
	const removeAndEnqueue = (controller, character) => {
		textToMove.innerHTML = textToMove.textContent.replace(character, "")
		controller.enqueue(character)
	}
	return new ReadableStream({
		start(controller) {
			charactersToMove.forEach((character, index) =>
				// Set a timeout,
				setTimeout(
					// With this function that,
					() => {
						removeAndEnqueue(controller, character)

						if (isLast(index)(charactersToMove.length)) {
							controller.close()
						}
					},
					index * 50
				)
			)
		},
	})
}

const receiverStream = new WritableStream({
	write(data) {
		const textNode = document.createTextNode(data)
		document.querySelector("#text-to-move_target").appendChild(textNode)
	},
	close(data) {
		moveButton.disabled = true
		moveButton.innerHTML = "Now <em>I'm</em> lonely :("
		resetButton.style.display = "block"
		console.log("%c STREAM CLOSED WOOO!", "color:#0af;font-size:20px")
	},
})

moveButton.addEventListener("click", () => startStream().pipeTo(receiverStream))
resetButton.addEventListener("click", () => location.reload())
