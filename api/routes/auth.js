const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

/* Error code: {
    200: request has succeeded
    401: request has not been completed because it lacks valid authentication
    404: page not found
    500: Internal server error
    }
 */


//REGISTER
router.post("/Register", async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });

  //ERROR HANDLING

      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//LOGIN

router.post('/Login', async (req,res) => {
  try {
      const user = await User.findOne({ username: req.body.username })
      /* Wrong Login Credentials */
      !user && res.status(400).json('Wrong credentials!')

      const validate = await bcrypt.compare(req.body.password, user.password)
      !validated && res.status(400).json('Wrong credentials!')
       /* Invalidated Login Credentials */
      
       const { password, ...others } = user._doc
       res.status(200).json(others)
        /* Takes the password and 'Other' elements from the user to hide it */

  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;