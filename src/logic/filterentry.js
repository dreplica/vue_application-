export default function(origin, arg) {
  const last_operator = origin.match(/\D$/);
  const origin_to_array = origin.split("")
  const last_number = origin.match(/\d+/g);
  const length_of_lastNumber = last_number.length;
  const check_dot = last_number[length_of_lastNumber - 1];

  const operators = ["+", "-", "/", "*"];

  if (origin === "0" && arg === "0") {
    return "0";
  }

  for (let operator of operators) {
    if (operator === last_operator && arg === operator) {
      console.log("theres already an operator");
      return origin;
    }
  }

  if (check_dot.match(/\./)) {
    console.log("theres already a dot there");
    return origin;
  }

  if(arg === 'C'){
      origin_to_array.pop();
      return origin_to_array.join("")
  }

}
