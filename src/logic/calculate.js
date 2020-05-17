export default function calculate(arg) {
  const values = arg.match(/(\d+\.\d+|\d+)|\D/g);

  const result = values.reduce((acc, val, ind, arr) => {
    let back = Number(arr[ind + 1]);
    switch (val) {
      case "+":
        return (acc = acc + back);
      case "-":
        return (acc = acc - back);
      case "/":
        return (acc = acc / back);
      case "*":
        return (acc = acc * back);
      default:
        return acc;
    }
  }, values[0]);

  return result.toString();
}

console.log(calculate("50+1"));
