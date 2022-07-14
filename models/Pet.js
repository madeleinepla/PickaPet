const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  last_fed: {
    type: String,
    // required:true
  },
  last_bathed: {
    type: String,
    // required:true
  },
  last_play: {
    type: String,
    // required:true
  },
  last_pet: {
    type: String,
    // required:true
  },
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  profileUrl: {
    type: String,
  },
  showGif: {
    type: String,
  },
  idleGif: {
    type: String,
  },
  feedGif: {
    type: String,
  },
  showerGif: {
    type: String,
  },
  patGif: {
    type: String,
  },
  playGif: {
    type: String,
  },
})
const Pet = mongoose.model("pets", PetSchema)
module.exports = Pet;