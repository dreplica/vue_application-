export default function(origin, arg) {
  if (origin.length === 0 && arg !== "C") {
    return arg.toString();
  }

  if (origin.length < 1 && arg === "C") {
    return "";
  }

  const last_operator = origin.match(/.$/)[0];
  const first_operator = origin[0];
  const origin_to_array = origin.split("");
  const check_current_element_for_dot = origin.match(/\d+\.$/g);
  const last_number_with_dot = origin.match(/\d+\.\d+$/g);

  const operators = ["+", "-", "/", "*", "."];

  const checking_num = operators.includes(last_operator);
  const checking_arg = operators.includes(arg);
  const check_first_value = operators.includes(first_operator);

  if ((checking_num && checking_arg) || (check_first_value && checking_arg)) {
    console.log("go away");
    return origin;
  }

  if (origin === "0" && arg === "0") {
    return "0";
  }

  if ((check_current_element_for_dot || last_number_with_dot) && arg === ".") {
    console.log("theres already a dot there");
    return origin;
  }

  if (arg === "C" && origin.length) {
    origin_to_array.pop();
    if (origin.length) {
      return origin_to_array.join("");
    }
    return "0";
  }

  return (origin += arg);
}
