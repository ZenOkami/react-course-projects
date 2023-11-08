const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

function star(num) {
    let n = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            n = n + '*';
        }
        console.log(n);
        n = '';
    }
}

const isSenior = (age) => age >= 65;

// star(3);
// star(4);
// star(5);
// star(6);

export { isAdult, canDrink, star, isSenior as default }