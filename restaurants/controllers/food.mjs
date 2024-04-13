import express from 'express';
const router = express.Router();
import Food from '../models/foods.mjs'
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

// / seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
      await Food.create([
        {
            Sandwich: 'Chicken Salad',
            Bread: "croissant",
            Side: 'Potato Chips',
            Dessert:'Fresh Fruit',
            toGoOrder: true
        }, 
        {
            Sandwich: 'Tuna Salad',
            Bread: 'Wheat',
            Side: 'sweet potato fries',
            Dessert:'Cookie',
            toGoOrder: true
        }, 
        {
            Sandwich: 'Hamburger',
            Bread: 'Hawaiian',
            Side: 'Fries',
            Dessert:'Apple Pie',
            toGoOrder: true
         
        }
    ])
    res.status(200).redirect('/foods');
} catch (err) {
    res.status(400).send(err);
}
});
// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
  try {
      const foundFoods = await Food.find({});
      res.status(200).render('foods/Index', { foods: foundFoods})
  } catch (err) {
      res.status(400).send(err);
  }
})
// N - New - allows a user to input a new order
router.get('/new', (req, res) => {
  res.render('foods/New');
})
//ID- DELETE--to delete a Food
router.delete('/:id', async( req, res) => {
  try{
      const deletedFood = await Food.findByIdAndDelete(req.params.id);
      console.log(deletedFood)
      res.status(200).redirect('foods');
  } catch (err) {
      res.status(400).send(err);
  }
  }
)
// U - UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.toGoOrder === 'on') {
      req.body.toGoOrder = true;
  } else {
      req.body.toGoOrder = false;
  }
  try {
      const updatedFood = await Food.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
      );
          console.log(updatedFood);
      res.redirect(`/foods/${req.params.id}`);
  } catch (err) {
      res.status(400).send(err);
  }
})
// C - CREATE
// Route to create a new food
router.post('/', async (req, res) => {
  
  if (req.body.toGoOrder === 'on') {
      req.body.toGoOrder = true;
  } else {
    req.body.toGoOrder = false;
  }
  console.log(req.body)
  try {
      // Create a new Food using the Food model
      const createdFood = await Food.create(req.body);
      res.status(200).redirect('/foods');
  } catch (err) {
      res.status(400).send();
  }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
      const foundFood = await Food.findById(req.params.id);
      res.status(200).render('foods/Edit', {food: foundFood});
  } catch (err) {
      res.status(400).send(err);
  }
})
// S - SHOW - show route displays details of an individual food
router.get('/:id', async (req, res) => {
  try {
      const foundFood = await Food.findById(req.params.id);
      res.render('foods/Show', {food:foundFood});
  } catch (err) {
      res.status(400).send(err);
  }
})
 export default router;