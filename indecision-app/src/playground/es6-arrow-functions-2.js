const add = (a, b, ...rest) => {
    let c = a + b;
    rest.forEach((item) => {
        c += item;
    })
    return c;
}
console.log(add(55, 1, 2, 5, 7, 2, 5));

const makePastTense = (string) => string.endsWith('ed') ? string : string.endsWith('e') ? `${string}d` : `${string}ed`;

console.log(makePastTense('climb'));

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'Springfield', 'New York', 'Boulder'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
        let out = `${this.name} has lived in `;
        this.cities.forEach((city, index) => {
            if (index === this.cities.length - 1) {
                out += 'and ';
            }
            out += city + ', '
        })
        return out;
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply())