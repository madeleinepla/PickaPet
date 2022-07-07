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
    description: "The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting. It looks similar to and is often mistaken for other Japanese dog breeds such as the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
  },
  {
    name: "Biscuit",
    species: "Dog",
    breed: "Corgi",
    birthday: Date('2010-12-29'),
    gender: "F",
    description: "",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/corgi.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
  },
  {
    name: "Eddy",
    species: "Dog",
    breed: "Golden Retriver",
    birthday: Date('2019-01-01'),
    gender: "M",
    description: "",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/golden.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
  },
  {
    name: "Hachi",
    species: "Dog",
    breed: "German Shepard",
    birthday: Date('2000-01-01'),
    gender: "F",
    description: "",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/german.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
  },
  {
    name: "Nala",
    species: "Cat",
    breed: "British Shorthair",
    birthday: Date('2019-01-01'),
    gender: "F",
    description: "",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/british.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
  },
  {
    name: "Simba",
    species: "Cat",
    breed: "Orange Tabby",
    birthday: Date('2016-11-30'),
    gender: "M",
    description: "",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/orange.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
  },
  {
    name: "Taco",
    species: "Cat",
    breed: "Kinkalow",
    birthday: Date('2013-12-31'),
    gender: "F",
    description: "",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/kinkalow.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
  },
  {
    name: "Woody",
    species: "Cat",
    breed: "Exotic Shorthair",
    birthday: Date('2022-03-28'),
    gender: "M",
    description: "",
    profileUrl:"https://yep-seeds.s3.amazonaws.com/pickapet/shorthair.png",
    showGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-show.gif",
    idleGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-idle.gif",
    feedGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-feed.gif",
    showerGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-shower.gif",
    patGif: "https://yep-seeds.s3.amazonaws.com/pickapet/shiba-pat.gif",
    playGif:"https://yep-seeds.s3.amazonaws.com/pickapet/shiba-play.gif",
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


const seedDB = async () => {
  await Pet.deleteMany({});
  await Pet.insertMany(seedPets);
};

seedDB()
  .then(() => mongoose.connection.close());

const userDB = async () => {
  // await User.deleteMany({});
  await User.insertMany(seedUsers);
};
  
userDB()
  .then(() => mongoose.connection.close());