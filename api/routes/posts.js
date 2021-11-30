const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

/* Error code: {
    200: request has succeeded
    401: request has not been completed because it lacks valid authentication
    404: page not found
    500: Internal server error
    }
 */

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
            ); /* Updates the Post by the id and username */
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

  router.delete('/:id', async (req,res) => {
        try {
            const post = await Post.findById(req.params.id);

             if(post.username === req.body.username) {
                try {
                    await post.delete();
                    res.status(200).json('Post has been deleted..');
                } catch (err) {
                    res.status(500).json(err);
                }
                /* Deletes the Post by the id and username */

            } else {
                res.status(401).json('You can only delete your post!')
            }
        } catch (err) {
            res.status(500).json(err);
        }
  });

  // GET POST

  router.get('/:id', async (req, res) => {
      try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
        /* Finds the Post by the id */
    } catch (err) {
        res.status(500).json(err);
    }
  });

  // GET ALL POST 
router.get('/', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    /* catName is category name */

    try {
        let posts;
        if(username) {
            post = await Post.findById({username})

        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                    /* $in is looking indside the categories */
                },
            });
            /* If you can find the username it pulls all the post under that name. Otherwise it searches through the category name */
        } else {
            post = await Post.find();
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err)
    }
});
 
module.exports = router;