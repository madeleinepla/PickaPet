const mongoose = require('mongoose');
const Pet = require('./models/Pet');
const User = require('./models/User');
const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err))

const seedPets = [
  {
    name: "Apple",
    species: "Dog",
    breed: "Shiba Inu",
    birthday: Date('2009-06-08'),
    gender: "M",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba.png",
  },
  {
    name: "Biscuit",
    species: "Dog",
    breed: "Corgi",
    birthday: Date('2010-12-29'),
    gender: "F",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/corgi.png",
  },
  {
    name: "Eddy",
    species: "Dog",
    breed: "Golden Retriver",
    birthday: Date('2019-01-01'),
    gender: "M",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/golden.png",
  },
  {
    name: "Hachi",
    species: "Dog",
    breed: "German Shepard",
    birthday: Date('2000-01-01'),
    gender: "F",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/german.png",
  },
  {
    name: "Nala",
    species: "Cat",
    breed: "British Shorthair",
    birthday: Date('2019-01-01'),
    gender: "F",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/british.png",
  },
  {
    name: "Simba",
    species: "Cat",
    breed: "Orange Tabby",
    birthday: Date('2016-11-30'),
    gender: "M",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/orange.png",
  },
  {
    name: "Taco",
    species: "Cat",
    breed: "Kinkalow",
    birthday: Date('2013-12-31'),
    gender: "F",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow.png",
  },
  {
    name: "Woody",
    species: "Cat",
    breed: "Exotic Shorthair",
    birthday: Date('2022-03-28'),
    gender: "M",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/shorthair.png",
  },
];




const seedUsers = [
  // {
  //   username: "example5",
  //   email: "example5@email.com",
  //   password:"example5",
  //   dateJoined: new Date(),
  //   points:0,
    
  // },
  // {
  //   username: "example6",
  //   email: "example6@email.com",
  //   password:"example6",
  //   pets: ["62c455783868e8e380db2c53", "62c44a19a044df29db96c38b"],
  //   dateJoined: new Date(),
  //   points:0,
  // },
  // {
  //   username: "example7",
  //   email: "example7@email.com",
  //   password:"example7",
  //   dateJoined: new Date(),
  //   pets: ["62c44a19a044df29db96c38c"],
  //   friends: ["62c45a51fb0e50b80c1b28ec"],
  //   points:0,
  // },

  {
    username: "nilshen",
    email: "nilshen@email.com",
    password:"nilshen",
    dateJoined: new Date(),
    pets: ["62c4ec3afd3744f543419678", "62c4ec3afd3744f543419679"],
    friends: [],
    points:0,
  },

  
]  


// const seedDB = async () => {
  // await Pet.deleteMany({});
  // await Pet.insertMany(seedPets);
// };

// seedDB()
//   .then(() => mongoose.connection.close());

const userDB = async () => {
  // await User.deleteMany({});
  await User.insertMany(seedUsers);
};
  
userDB()
  .then(() => mongoose.connection.close());