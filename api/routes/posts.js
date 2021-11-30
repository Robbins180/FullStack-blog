const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

/* The Requirements that need to be met */

// CREATE POST
router.post("/", async (req, res) => {

    const newPost = new Post(req.body);

    try {

      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
      /* Saving the new post */
    } catch (err) {
      res.status(500).json(err);
    }
  });

// UPDATE POST 

router.put("/:id", async (req, res) => { 

        try {

            const post = await Post.findById(req.params.id);
                if(post.username === req.body.username) {

            
            try {
                
                const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new:true }
            );
                    res.status(200).json(updatedPost)

            } catch (err) {
            res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your post!");
        }
        } catch (err) {
        res.status(500).json(err);
        }
    });
       

  // DELETE POST 

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