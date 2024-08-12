type column = {
  name: string;
  type: string;
};
type columnWithChecked = column & {
  checked: boolean;
};

const columns: columnWithChecked[] = [
  { name: "name", type: "string", checked: true },
  { name: "age", type: "number", checked: false },
];
