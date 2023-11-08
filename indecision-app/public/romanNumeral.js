function solution(number) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let out = '';

    while (number > 0) {
        for (a in roman) {
            if (roman[a] <= number) {
                out += a;
                number -= roman[a];
                break;
            }
        }
    }
    return out;
}

console.log(solution(4050))