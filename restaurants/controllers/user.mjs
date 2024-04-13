import express from 'express';
const router = express.Router();
import User from '../models/users.mjs'
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
      await User.create([
        {
            name: 'Alma',
            Email: "rr@mail.com",
            Phone : 1235558546,
            staySignedIn : true
        },
        {
            name: 'Marion',
            Email: "doe@byby.com",
            Phone : 456789123,
            staySignedIn : true
        },
        {
            name: 'Deeda',
            Email: "my@just.com",
            Phone : 456789155,
           staySignedIn : true
        },
        {
        name: 'Sylvia',
            Email: "my@no.com",
            Phone : 6145586598,
           staySignedIn : true
        }
    ])


      res.status(200).redirect("/users");
    } catch (err) {
      res.status(400).send(err);
    }
  });
// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
  try {
      const foundUsers = await User.find({});
      res.status(200).render('users/Index', { users: foundUsers})
  } catch (err) {
      res.status(400).send(err);
  }
})
// N - New - allows a user to input a new user
router.get('/new', (req, res) => {
  res.render('users/New');
})
//ID- DELETE--to delete a user by id
router.delete('/:id', async( req, res) => {
  try{
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      console.log(deletedUser)
      res.status(200).redirect('users');
  } catch (err) {
      res.status(400).send(err);
  }
  }
)
// U - UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.staySignedIn === 'on') {
      req.body.staySignedIn = true;
  } else {
      req.body.staySignedIn= false;
  }
  try {
      const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
      );
          console.log(updatedUser);
      res.redirect(`/users/${req.params.id}`);
  } catch (err) {
      res.status(400).send(err);
  }
})
// C - CREATE

router.post('/', async(req, res) => {
  
  if (req.body.staySignedIn === 'on') { 
      req.body.staySignedIn = true;
  } else {                            
  }
  console.log(req.body)

  try {
      const createdUser = await User.create(req.body);
      res.status(200).redirect('/users');
  } catch (err) {
      res.status(400).send(err);
  }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
      const foundUser = await User.findById(req.params.id);
      res.status(200).render('users/Edit', {user: foundUser});
  } catch (err) {
      res.status(400).send(err);
  }
})
// S - SHOW - show route displays details of an individual user
router.get('/:id', async (req, res) => {
  try {
      const foundUser = await User.findById(req.params.id);
      res.render('users/Show', {user:foundUser});
  } catch (err) {
      res.status(400).send(err);
  }
})

 export default router;