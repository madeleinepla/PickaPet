# Picka Pet
### [Live](https://picka-pet.herokuapp.com/#/)


## Team Members
* [Madeleine Pla](https://github.com/madeleinepla)
* [Lin Shen](https://github.com/nilshen)
* [David Zheng](https://github.com/dzhengg98)
* [Evan Formmer](https://github.com/frommere)

## Overview

![HOW - Picka Pet](./assets/Homepage.gif)

Picka Pet is a fullstack MERN application that lets users adopt virtual pets to play with. Users can sign up, sign in and use the demo user feature. They are given the opportunity to pick from a variety of diverse dogs ranging from a cute corgi to a nice dalmatian. Users can also choose from multiple breeds of cats ranging from a exotic shorthair to the kinkalow. Pet adopters have the option to play with their selected pet(s) through a variety of pet options. Pet options lets users earn points in which they can use to buy more pets. Choose wisely and go enjoy the joy of adopting some virtual pets!

## Main Features
The main feature of this app is the Pet Store and Pet Interaction page. Users can adopt multiple pets and interact with them by clicking pet actions. You can feed, play, shower and pat your cute pet!

## Technologies

* MongoDB
* Express
* React/Redux
* Node.js
* Amazon Web Service

### Search
* The search bar is a feature you can use to search for different users across the site.
![SEARCH - Picka Pet](./assets/Search.gif)

### Pet adoption
* Going to the pet store, the user has a choice to choose which pet they want. The pets are randomly filtered and sorted and thus only six pets show up at once. If you own the current pet, they will not show up at the pet store. You can click on the pet and adopt the pet.
![ADOPTION - Picka Pet](./assets/PetAdoption.gif)

### Pet actions
* There are multiple pet actions you can go through depending on if it is a dog or a cat. Feel free to adopt a pet and test out these pet actions!
![Actions - Picka Pet](./assets/PetActions.gif)

### Code
```javascript
  router.get('/search-users/:query', (req, res)=>{
      let userSearch = new RegExp(("^"+req.params.query),'i')
      User.find({username:{$regex:userSearch}})
          .then(user => {
              res.json({ user })
          }).catch(err => res.status(400).json({ error: err.message }))
  })
```

As one of the key features of our website, the backend search uses the regex expression to locate the different users available to us. The search input can be case insensitive which assists users in locating other users in a quicker rate.