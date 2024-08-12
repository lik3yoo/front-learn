let obj = {
  c: "3",
};
function fn() {
  let obj = {
    a: "1",
  };

  if (true) {
    let obj = {
      b: "2",
    };
  }
  console.log(obj);
}
fn();
console.log(obj);
