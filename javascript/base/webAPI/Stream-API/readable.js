const image = document.getElementById("image")

fetch("./assets/test.png")
  .then((res) => res.body)
  .then((body) => {
    console.log(body)
    const reader = body.getReader()
    return new ReadableStream({
      start(controller) {
        return pump()
        function pump() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              controller.close()
              return
            }
            controller.enqueue(value)
            return pump()
          })
        }
      },
    })
  })
  .then((stream) => {
    return new Response(stream)
  })
  .then((res) => {
    return res.blob()
  })
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => {
    console.log(url)
    image.src = url
  })
