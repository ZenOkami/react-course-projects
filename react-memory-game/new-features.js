const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array.at(-1))

const obj = { name: 'foo', description: { date: 1998, views: 100000, comments: { first: 'first', second: 'first, oops', third: 'Great Vid' } }, lastName: 'bar' };
console.log(obj);

const obj2 = {...obj};
console.log(obj2);

const obj3 = structuredClone(obj);
console.log(obj3);