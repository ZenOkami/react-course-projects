const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Gianpi',
            age: 30
        });
        reject('Something went wrong')
    }, 5000)
});

console.log('before');

promise.then((data) => {
    console.log('1', data); 
}).catch((err) => {
    console.log('Error:', err);
});

console.log('after');

async function getUser() { 
    try { 
    console.log('before'); 
    setTimeout(async () => { 
        response = { 
            name: 'Gianpi', 
            age: 0 
        }; 
        console.log('1', response); 
        return response; }, 5000); 
    } catch (err) { 
        console.log('Error:', err); 
    } 
}

getUser(); 

console.log('after');

async function dummyData() {
    try {
        console.log('Acquiring dummy data...');
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => json)
            console.log('1', response.title);
            return response.title;
    } catch (err) {
        console.log('Something unexpected happened:', err);
    }
}

dummyData();