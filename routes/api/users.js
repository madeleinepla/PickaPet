const express = require("express")
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcryptjs")
const keys = require('../../config/keys')
const jwt = require('jsonwebtoken');
const passport = require('passport')
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login');

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});


router.get('/current', passport.authenticate('jwt', {session:false}), (req,res)=>{
    res.json({
        username: req.user.username,
        id:req.user.id,
        email:req.user.email,
        dateJoined:req.user.dateJoined,
        friends:req.user.friends,
        pets:req.user.friends,
        points:req.user.points,
        bio:req.user.bio,
        coins:req.user.coins,
        inventory:req.user.inventory
    })
})
router.get('/:id', (req,res)=>{
    debugger
    User.findById( req.params.id )
    .then(user => res.json({
        username: user.username,
        id:user.id,
        email:user.email,
        dateJoined:user.dateJoined,
        friends:user.friends,
        pets:user.pets,
        points:user.points,
        bio:user.bio,
        coins:user.coins,
        inventory:user.inventory
    }))
    .catch(err =>
      res.status(404).json({ nouserfound: 'No user found' }
      )
    );
})
router.patch('/:id/addfriend/', passport.authenticate('jwt', {session:false}), (req, res)=>{
    const friendId = req.body.friendId
    const options = {new:true};
    User.findByIdAndUpdate(
        req.params.id, {$push:{friendsRequested:friendId}}, options)
        .then(user=>{})
        .catch(err=>{})
    User.findByIdAndUpdate(friendId, {$push:{friendRequests:req.params.id}}, options)
    .then(user=>{
        res.send(user)})
    .catch(err=>res.status(400).json({error:err.message}))
})
router.patch('/:id/acceptfriendrequest/',passport.authenticate('jwt', {session:false}), (req, res)=>{
    const friendId = req.body.friendId
    const options = {new:true};
    User.findByIdAndUpdate(
        req.params.id, {$pull:{friendRequests:friendId}}, options)
        .then(user=>{})
        .catch(err=>{})
    User.findByIdAndUpdate(req.params.id, {$push:{friends:friendId}}, options)
    .then(user=>{})
    .catch(err=>{})
    User.findByIdAndUpdate(friendId, {$pull:{friendsRequested:req.params.id}}, options)
    .then(user=>{})
    .catch(err=>{})
    User.findByIdAndUpdate(friendId, {$push:{friends:req.params.id}}, options)
    .then(user=>{
        res.send(user)})
    .catch(err=>res.status(400).json({error:err.message}))
})
router.patch('/:id/unfriend/',passport.authenticate('jwt', {session:false}), (req, res)=>{
    const friendId = req.body.friendId
    const options = {new:true};
    User.findByIdAndUpdate(
        req.params.id, {$pull:{friends:friendId}}, options)
        .then(user=>{})
        .catch(err=>{})
    User.findByIdAndUpdate(
        friendId, {$pull:{friends:req.params.id}}, options)
        .then(user=>res.send(user))
        .catch(err=>res.status(400).json({error:err.message}))
})
router.patch('/:id/addpet/',passport.authenticate('jwt', {session:false}), (req, res)=>{
    const petId = req.body.petId
    const options = {new:true};
    User.findByIdAndUpdate(
        req.params.id, {$push:{pets:petId}}, options)
        .then(user=>res.send(user))
        .catch(err=>res.status(400).json({error:err.message}))
})
router.patch('/:id', (req, res)=>{
    let updates = {}
    const updatedusername = req.body.username
    if (updatedusername) {
        updates["username"] = updatedusername
    }
    const updatedbio = req.body.bio
    if (updatedbio) {
        updates["bio"] = updatedbio
    }
    const updatedcoins = req.body.coins
    if (updatedcoins) {
        updates["coins"] = updatedcoins
    }
    const updatedpoints = req.body.points
    if (updatedpoints) {
        updates["points"] = updatedpoints
    }
    const updatedsoap = req.body.soap
    if (updatedsoap) {
        if (!updates["inventory"]) {
            updates["inventory"] = {}
            }
        updates["inventory"]["soap"] = updatedsoap
    }
    const updatedtreats = req.body.treats
    if (updatedtreats) {
        if (!updates["inventory"]) {
            updates["inventory"] = {}
            }
        updates["inventory"]["treats"] = updatedtreats
    }
    const options = {new:true};
    User.findByIdAndUpdate(
      req.params.id, updates, options)
      .then(user=>res.send(user))
      .catch(err=>res.status(400).json({error:err.message}))
  })
router.delete('/:id', (req, res)=>{
    const options = {new:true};
    User.findById(req.params.id)
    .then(user=>user["friends"].forEach(friendId=>{
        User.findByIdAndUpdate(friendId, {$pull:{friends:req.params.id}}, options)
        .then(user2=>{})
        .catch(err2=>err=>{})
    }))
    .catch(err=>{})
    User.deleteOne({_id:req.params.id})
    .then(user=>res.send("deleted"))
    .catch(err=>res.status(400).json({error:err.message}))

})

router.get("/test", (req, res)=>{
    res.json({msg: "This is the user route"})
})
// router.get('/current', passport.authenticate('jwt', {session:false}), (req,res)=>{
//     res.json({
//         username: req.user.username,
//         id:req.user.id,
//         email:req.user.email
//     })
// })
router.post('/register',(req,res)=>{
    const {errors, isValid} = validateRegisterInput(req.body)
    if (!isValid){
        return res.status(400).json(errors);
    }
    User.findOne({email:req.body.email})
    .then(user=>{
        if (user) {
            return res.status(400).json({email:"A user is already registered with that email"})
        }
        else {
            const newUser = new User({
                username: req.body.username,
                email:req.body.email,
                password:req.body.password, 
                points: 0,
                dateJoined: new Date(),
                coins:0,
                bio: "",
                inventory: {soap:0, treats:0}

            })
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password, salt,(err, hash)=>{
                    if(err) throw err;
                    newUser.password = hash
                    newUser.save()
                    .then((user)=>{
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email
                        };
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600}, (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            })
                        })
                    })
                    .catch(err=>console.log(err))
                })
            })
        }
    })
})
router.post('/login', (req, res)=> {
    const {errors, isValid} = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email})
    .then(user=>{
        if (!user){
            return res.status(404).json({email:"this user does not exist"})
        }
        bcrypt.compare(password, user.password)
        .then(isMatch=> {
            if(isMatch) {
                const payload = {
                    id:user.id,
                    username:user.username,
                    email:user.email, 
                    points:user.points,
                    dateJoined:user.dateJoined,  
                    coins:user.coins,
                    bio:user.bio,
                    inventory:user.inventory
                }
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {expiresIn:3600},
                    (err,token)=>{
                        res.json({
                            success:true,
                            token:"Bearer " + token
                        })
                    }
                )
            } else {
                return res.status(400).json({password:"Incorrect Password"})
            }
            
        })
    })
})
module.exports = router;
