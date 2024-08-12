const tbody = document.getElementsByTagName('tbody')[0];

class LogStreamSink {
	/**
	 * @param {string} name
	 */
	constructor(name) {
		this.name = name;
		this.counter = 0;
	}

	/**
	 * Called when a chunk is written to the log.
	 */
	write(chunk) {
		this.counter += 1;
		console.log('Chunk %d of %s: %o', this.counter, this.name, chunk);

		this.createRow(this.name, this.counter, chunk.constructor.name);
	}

	/**
	 * Called when the stream is closed.
	 */
	close() {
		this.createRow(this.name, this.counter, 'Closed');
	}

	/**
	 * Creates a row in the table.
	 *
	 * @param {string} heading
	 * @param {string} col1
	 * @param {string} col2
	 */
	createRow(heading, col1, col2) {
		const tr = document.createElement('tr');
		tbody.appendChild(tr);
		const th = document.createElement('th');
		th.appendChild(document.createTextNode(heading));
		tr.appendChild(th);
		const tdCounter = document.createElement('td');
		tdCounter.appendChild(document.createTextNode(col1));
		tr.appendChild(tdCounter);
		const tdChunk = document.createElement('td');
		tdChunk.appendChild(document.createTextNode(col2));
		tr.appendChild(tdChunk);
	}
}

function logReadableStream(name, rs) {
	const [rs1, rs2] = rs.tee();

	console.log(rs1);
	console.log(rs2);

	rs2.pipeTo(new WritableStream(new LogStreamSink(name))).catch(console.error);

	return rs1;
}


// Fetch the original image
fetch('../assets/test.png')
	// Retrieve its body as ReadableStream
	.then(response => response.body)
	// Log each fetched Uint8Array chunk
	.then(rs => logReadableStream('Fetch Response Stream', rs))
	// Transform to a PNG chunk stream
	// .then(rs => rs.pipeThrough(new PNGTransformStream()))
	// Log each transformed PNG chunk
	// .then(rs => logReadableStream('PNG Chunk Stream', rs))
