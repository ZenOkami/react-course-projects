console.log('destructuring')

// const person = {
//     name: 'GP',
//     age: 29,
//     location: {
//         city: 'Boulder',
//         temp: 68
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}.`)
// if (city && temperature) {
//     console.log(`${firstName} lives in ${city} and it is currently ${temperature} degrees farenheit there.`)
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { title: BookTitle, author = 'Unauthored' } = book;
const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);