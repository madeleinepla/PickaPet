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
    gender:req.body.gender
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
  const updatedname = req.body.name
  const options = {new:true};
  Pet.findByIdAndUpdate(
    req.params.id, {name:updatedname}, options)
    .then(pet=>res.send(pet))
    .catch(err=>res.status(400).json({error:error.message}))
})



module.exports = router;