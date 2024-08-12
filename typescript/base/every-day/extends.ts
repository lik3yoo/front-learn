interface Base {
  name: string;
  type: string
}
interface Checked extends Base {
  age: number;
}

const check: Checked = {
  name: "name", 
}