const mongoose = require('mongoose');
const Pet = require('./models/Pet');
const User = require('./models/User');
const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err))

const seedPets = [
  {
    name: "Monzy",
    species: "Dog",
    breed: "Am Staff",
    age: 6,
    gender: "M",
  },
  {
    name: "Penny",
    species: "Dog",
    breed: "Yorkie",
    age: 9,
    gender: "F",
  },
  {
    name: "Essie",
    species: "Cat",
    breed: "Calico",
    age: 3,
    gender: "F",
  }
];

const seedUsers = [
  {
    username: "example5",
    email: "example5@email.com",
    password:"example5",
    dateJoined: new Date(),
    points:0,
  },
  {
    username: "example6",
    email: "example6@email.com",
    password:"example6",
    pets: ["62c455783868e8e380db2c53", "62c44a19a044df29db96c38b"],
    dateJoined: new Date(),
    points:0,
  },
  {
    username: "example7",
    email: "example7@email.com",
    password:"example7",
    dateJoined: new Date(),
    pets: ["62c44a19a044df29db96c38c"],
    friends: ["62c45a51fb0e50b80c1b28ec"],
    points:0,
  },
]  


// const seedDB = async () => {
//   await Pet.deleteMany({});
//   await Pet.insertMany(seedPets);
// };

// seedDB()
//   .then(() => mongoose.connection.close());

const userDB = async () => {
  // await User.deleteMany({});
  await User.insertMany(seedUsers);
};
  
userDB()
  .then(() => mongoose.connection.close());