// 🔎 Example: Object destructuring

const dog = {
  name: 'Toby',
  breed: 'Golden Retriever',
  age: 3
}

// Without destructuring:
const name_ = dog.name
const breed_ = dog.breed
const age_ = dog.age

// With destructuring (equivalent to the code above):
const { name, breed, age } = dog
