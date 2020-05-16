function calculate(arg) {
    const values = arg.match(/(\d+\.\d+|\d+)|\D/g)

    return values
}

console.log(calculate('50+1'))