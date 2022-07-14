const express = require('express');
const router = express.Router();
const Pet = require('../../models/Pet');

router.get('/', (req, res) => {
  Pet.find()
    .sort({ name: 1 })
    .then(pets => res.json(pets))
    .catch(err => res.status(404).json({ nopetsfound: 'No pets found' }));
});
router.post("/", (req,res)=>{
  const newPet = new Pet({
    name:req.body.name,
    species:req.body.species,
    breed:req.body.species,
    birthday:req.body.birthday,
    gender:req.body.gender,
    last_fed: new Date(),
    last_bathed: new Date(),
    last_play: new Date(),
    last_pet: new Date()

  })
  newPet.save()
  .then(pet=>res.json(pet))
})

router.get('/:id', (req, res) => {
  Pet.findById( req.params.id )
    .then(pet => res.json(pet))
    .catch(err =>
      res.status(404).json({ nopetfound: 'No pet found' }
      )
    );
});

router.patch('/:id', (req, res)=>{
  let updates = {}
  const updatedname = req.body.name
    if (updatedname) {
        updates["name"] = updatedname
    }
  const updatedlast_fed =req.body.feed
  if (updatedlast_fed) {
    updates["last_fed"] = new Date()
  }
  const updatedlast_bathed =req.body.bath
  if (updatedlast_bathed) {
    updates["last_bathed"] = new Date()
  }
  const updatedlast_play =req.body.play
  if (updatedlast_play) {
    updates["last_play"] = new Date()
  }
  const updatedlast_pet =req.body.pet
  if (updatedlast_pet) {
    updates["last_pet"] = new Date()
  }

  const options = {new:true};
  Pet.findByIdAndUpdate(
    req.params.id, updates, options)
    .then(pet=>res.send(pet))
    .catch(err=>res.status(400).json({error:error.message}))
})

//pet edit
// router.patch('/:id', (req, res) => {
//   let updates = {};
//   const updatedFedDate = req.body.last_fed;
//   if (updatedFedDate) {
//       updates["last_fed"] = updatedFedDate;
//   }
//   const updatedBathedDate = req.body.last_bathed;
//   if (updatedBathedDate) {
//       updates["last_bathed"] = updatedBathedDate;
//   }
//   const updatedPlayDate = req.body.last_play;
//   if (updatedPlayDate) {
//       updates["last_play"] = updatedPlayDate;
//   }
//   const updatedPetDate = req.body.last_pet;
//   if (updatedPetDate) {
//       updates["last_pet"] = updatedPetDate;
//   }
  
//   const options = { new: true };
//   Pet.findByIdAndUpdate(
//       req.params._id, updates, options)
//       .then(pet => res.send(pet))
//       .catch(err => res.status(400).json({ error: err.message }));
// });

module.exports = router;