import calculate from "./calculate";

export default function (origin){
    const operators = ["+", "-", "/", "*", "."];
    const last = origin.match(/.$/)[0]

    if(operators.includes(last)){
        return origin
    }
    return calculate(origin)
}