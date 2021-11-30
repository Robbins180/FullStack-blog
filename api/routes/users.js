const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')

/* Error code: {
    200: request has succeeded
    401: request has not been completed because it lacks valid authentication
    404: page not found
    500: Internal server error
    }
 */



// UPDATE USER
router.put("/:id", async (req, res) => {
        if(req.body.userId === req.params.id) {
            if(req.body.password) {
                const salt =  await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                 /* The Requirements that need to be met */
          }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
               $set: req.body, 
            }, 
                 { new:true });

            res.status(200).json('Updated User!');
                /* Updating the user by the id and accepting change if reqirments are met. */
        } catch (err) {
        res.status(500).json(err);
        }
    } else {
        res.status(401).json('You can only update your account!')
    }
  });

// DELETE USER

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      try {

        const user = await User.findById(req.params.id);
                /* Deleting the user by id */
        try {
          await Post.deleteMany({ username: user.username });
          await User.findByIdAndDelete(req.params.id);
          /* Coming from the Models folder */
          res.status(200).json("User has been deleted...");

        } catch (err) {
          res.status(500).json(err);
        }
      } catch (err) {
        res.status(404).json("User not found!");
      }

    } else {
      res.status(401).json("You can delete only your account!");
    }
  });

  // GET USER

  router.get('/:id', async (req,res) => {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...others } = user._doc;
              /* To Find a single User */
               /* user._doc hides the password in the search */

            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
  });


module.exports = router;