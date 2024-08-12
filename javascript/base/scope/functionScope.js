var obj = {
  c: "3",
};
function fn() {
  var obj = {
    a: "1",
  };

  if (true) {
    var obj = {
      b: "2",
    };
  }
  console.log(obj);
}
fn();
console.log(obj);
