
// OBJECT DESTRUCTURING


const person = {
    // name: "Leah",
    age: 19,
    location: {
        city: "North Haven",
        temperature: 75
    }
};

// const name = person.name;
// const age = person.age;

const { name: firstName = "Anonymous", age } = person

console.log(`${firstName} is ${age}.`)



const { temperature: temp, city } = person.location

if (temp && city) {
    console.log(`It's ${temp} in ${city}.`)
}




const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    publisher: {
        name: "idk",
    }
}

const { title , author } = book
const { name: publisherName = "Self-Published" } = book.publisher

console.log(`${title} by ${author} was published by ${publisherName}`)








// ARRAY DESTRUCTURING

const address = ['95 Mill Rd', 'North Haven', 'CT', '06473'];

// const [ street, city, state, zip ] = address

// skip street, destructure city and state, leave off zip
const [, addCity, state = "New York" ] = address

console.log(`You are in ${addCity}, ${state}.`)



const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ menuItem, , medPrice ] = item;

console.log(`A medium ${menuItem} costs ${medPrice}`)