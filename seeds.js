const mongoose = require('mongoose');
const Pet = require('./models/Pet');
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

const seedDB = async () => {
  // await Pet.deleteMany({});
  await Pet.insertMany(seedPets);
};

seedDB()
  .then(() => mongoose.connection.close());