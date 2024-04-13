import express from 'express';
const router = express.Router();
import Drink from '../models/drinks.mjs';
import db from '../db/conn.mjs';

// These are my routes
// We are going to create the 7 RESTful routes
// There is an order for them to listed in the code
// I - N - D - U - C - E - S
//  Action      HTTP Verb   CRUD 
// I - Index    GET         READ - display a list of elements
// N - New      GET         CREATE * - but this allows user input
// D - Delete   DELETE      DELETE
// U - Update   PUT         UPDATE * - this updates our database
// C - Create   POST        CREATE * - this adds to our database
// E - Edit     GET         UPDATE * - but this allows user input
// S - Show     GET         READ - display a specific element

// seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
      await Drink.create([
        {
            name: 'grapefruit Juice',
            Sweetness: "Tart",
            Size:"small",
            readyToDrink: true
        }, 
        {
            name: 'watermelon juice',
            Sweetness: 'Sweet',
            Size: 'Large',
            readyToDrink: true
        }, 
        {
            name: 'mango juice',
            Sweetness: 'Semi sweet',
            Size: 'Medium',
            readyToDrink: true
        }
    ])
    res.status(200).redirect('/drinks');
} catch (err) {
    res.status(400).send(err);
}
});

// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
  try {
      const foundDrinks = await Drink.find({});
      res.status(200).render('drinks/Index', { drinks: foundDrinks})
  } catch (err) {
      res.status(400).send(err);
  }
})
// N - New - allows a user to input a new user
router.get('/new', (req, res) => {
  res.render('drinks/New');
})
//ID- DELETE--to delete a user by id
router.delete('/:id', async( req, res) => {
  try{
      const deletedDrink = await Drink.findByIdAndDelete(req.params.id);
      console.log(deletedDrink)
      res.status(200).redirect('drinks');
  } catch (err) {
      res.status(400).send(err);
  }
  }
)
// U - UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.readyToDrink === 'on') {
      req.body.readyToDrink = true;
  } else {
      req.body.readyToDrink = false;
  }
  try {
      const updatedDrink = await Drink.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
      );
          console.log(updatedDrink);
      res.redirect(`/drinks/${req.params.id}`);
  } catch (err) {
      res.status(400).send(err);
  }
})
// C - CREATE
// Route to create a new user
router.post('/', async (req, res) => {
 
  if (req.body.readyToDrink === 'on') {
      req.body.readyToDrink = true;
  } else {
    req.body.readyToDrink = false;
  }
  console.log(req.body)
  try {
      const createdDrink = await Drink.create(req.body);
      res.status(200).redirect('/drinks');
  } catch (err) {
      res.status(400).send();
  }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
      const foundDrink = await Drink.findById(req.params.id);
      res.status(200).render('drinks/Edit', {drink: foundDrink});
  } catch (err) {
      res.status(400).send(err);
  }
})

// S - SHOW - show route displays details of an individual user
router.get('/:id', async (req, res) => {
  try {
      const foundDrink = await Drink.findById(req.params.id);
      res.render('drinks/Show', {drink:foundDrink});
  } catch (err) {
      res.status(400).send(err);
  }
})
 export default router;


