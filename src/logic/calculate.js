function calculate(arg) {
    const values = arg.match(/(\d+\.\d+|\d+)|\D/g)
    const operators = ["*", "/", "+", "-"]

    const result = values.reduce((acc, val, ind, arr) => {
        let back;
        if (ind > 0) {

            acc = arr[ind - 1] + acc;
            back = arr[ind + 1];

        }
        console.log(acc)
        console.log(back)
        switch (val) {
            case "+":
                return acc = (acc + back);
            case "-":
                return acc = (acc - back);
            case "/":
                return acc = (acc / back);
            case "*":
                return acc = (acc * back);
            default:
                return acc;
        }

    }, 0)

    console.log(result)
    return values
}

console.log(calculate('50+1'))