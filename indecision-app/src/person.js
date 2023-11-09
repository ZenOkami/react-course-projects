const isAdult = (age) => age >= 18 ? true : false;

const canDrink = (age) => age >= 21 ? true : false;

export { isAdult, canDrink }

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

star(3);
star(4);
star(5);
star(6);