for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i, "var");
  }, i * 1000);
}

for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i, "let");
  }, i * 1000);
}
