const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

// console.log(person)

// dot notation
// dot symbol diye object er property er value access kora
// console.log(person.profession)
const income = person.salary;
// console.log(income)

// bracket Notation 
// third bracket diye access kora
console.log(person['age'])
const boyos = person['age']
console.log(boyos)

// error
// console.log(person.'fav places')
console.log(person['fav places'])

const propName = 'profession';
person['propName'] = 'devops';
console.log(person)

person.salary = 30000;
person['age']= 26;
person['fav places'] = ['bandorban', 'saintmartin', 'kuakata', 'coxsbazar']
console.log(person)