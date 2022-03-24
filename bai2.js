const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 }
]

let new_person = person.map((person) => {
  return person.name
});

console.log(new_person);