const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
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
  }
})
const Pet = mongoose.model("pets", PetSchema)
module.exports = Pet;