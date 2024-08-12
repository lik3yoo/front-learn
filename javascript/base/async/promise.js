const p = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("1");
  // }, 3000);
});

setInterval(() => {
  console.log(p);
}, 1000);
