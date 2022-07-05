const express = require('express');
const router = express.Router();
const Pet = require('../../models/Pet');

router.get('/', (req, res) => {
  Pet.find()
    .sort({ name: 1 })
    .then(pets => res.json(pets))
    .catch(err => res.status(404).json({ nopetsfound: 'No pets found' }));
});

router.get('/:id', (req, res) => {
  Pet.findById( req.params.id )
    .then(pet => res.json(pet))
    .catch(err =>
      res.status(404).json({ nopetfound: 'No pet found' }
      )
    );
});

module.exports = router;