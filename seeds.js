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
    breed: "huskie",
    birthday: Date('2016-01-01'),
    gender: "M",
    // profileUrl:"https://yep-seeds.s3.amazonaws.com/images/restaurants/cote1.jpeg",
  },
  {
    name: "Penny",
    species: "Dog",
    breed: "shiba",
    birthday: Date('2013-01-01'),
    gender: "F",
    // profileUrl:"https://yep-seeds.s3.amazonaws.com/images/restaurants/cote1.jpeg",
  },
  {
    name: "Essie",
    species: "Cat",
    breed: "Calico",
    birthday: Date('2019-01-01'),
    gender: "F",
    // profileUrl:"https://yep-seeds.s3.amazonaws.com/images/restaurants/cote1.jpeg",
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


const seedDB = async () => {
  await Pet.deleteMany({});
  // await Pet.insertMany(seedPets);
};

seedDB()
  .then(() => mongoose.connection.close());

const userDB = async () => {
  // await User.deleteMany({});
  await User.insertMany(seedUsers);
};
  
userDB()
  .then(() => mongoose.connection.close());