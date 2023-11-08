class Person {
    userName: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.userName = name;
        this.age = age;
      }
    ageUp() {
        this.age++;
    }
    get personAge() {
        return this.age;
    }
    set personAge(value: number) {
        this.age = value;
    }
    summary() {
        return (`${this.userName} is ${this.age} years old`);
    }
    move(distanceInMeters: number = 0) {
        return (`${this.userName} moved ${distanceInMeters} meters.`)
    }
}

class Warrior extends Person {
    weapon: string;

    constructor(userName: string, weapon: string, age: number) {
        super(userName, age);
        this.weapon = weapon;
    }

    attack(value: number) {
        return (`${this.userName} attacks with their ${this.weapon} for ${value} damage.`)
    }
}

const John = new Warrior('John', 'Greatsword', 29);
console.log(John.move(10));
console.log(John.attack(10));

const JohnObject = {...John}
console.log(JohnObject)
const { userName: JohnName, age: JohnAge, weapon} = JohnObject;
console.log(JohnName, JohnAge, weapon);

const arr = [{
    ...JohnObject
    },
    {
        ...JohnObject,
        userName: 'Ashley',
        weapon: 'Hammer'
    }]
console.log(arr);

const { userName: AshleyName, age: AshleyAge, weapon: AshWeapon } = arr[1];
console.log(AshleyName, AshleyAge, AshWeapon);

function isDrinkingAge(age: number = 0, name: string = 'You') {
    if (age >= 21) {
        return `${name} can drink!`
    } 
    
    return `${name} cannot drink.`
}

console.log(isDrinkingAge(AshleyAge, AshleyName));
console.log(isDrinkingAge(JohnAge, JohnName));
console.log(isDrinkingAge());


function userSummary(array: { userName: string, age: number, weapon: string }[]) {
    let out: string = '';
    for (let i = 0; i < array.length; i++) {
        out += `${i + 1}. ${array[i].userName} is ${array[i].age} and wields a ${array[i].weapon}\n`;
    }
    return out;
}

console.log(userSummary(arr));

function fizzBuzz() {
    let out: string = '';
    for (let i = 1; i <= 100; i++) {
        i % 3 === 0 && (out += 'Fizz');
        i % 5 === 0 && (out += 'Buzz');
        out += ` ${i} \n`;
    }
    return out;
}

function fizzBuzz2(): string {
    let out: string = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            out += 'Fizz';
        }
        if (i % 5 === 0) {
            out += 'Buzz';
        }
        out += '\n';
    }
    return out;
}

console.log(fizzBuzz())

const heroArray = (arr: { userName: string, age: number, weapon: string }[]) => arr.map((object) => `${object.userName} is ${object.age} and wields a ${object.weapon}`);

const heroSum = heroArray(arr);
console.log(heroSummary(heroSum))
function heroSummary(arr: string[]) {
    let out: string = '';
    arr.forEach((hero, index) => out += `${index + 1}. ${hero}. `)
    return out;
}