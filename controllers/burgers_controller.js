const express = require("express");
// Import the model (burgers.js) to use its database functions.
const burgers = require("../models/burger.js");
const router = express.Router();

// Default route
router.get("/", function(req,res){
    res.redirect("/burgers");
})


// Create all our routes and set up logic within those routes where required.
router.get("/burgers", (req, res) => {
  burgers.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", (req, res) => {
    console.log(req.body.name);
    console.log(req.body.devoured);
  burgers.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.redirect("/burgers");
  });
});

router.put("/burgers/devour/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  console.log("burgers", condition);
  burgers.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
     res.redirect("/burgers");
    }
  );
});

router.delete("/burgers/clear/:id", function(req,res){
    let condition = "id = " + req.params.id;
    console.log("burgers", condition);
    burgers.clear(condition, function(result){
        res.redirect("/burgers");
    });
});


// Export routes for server.js to use.
module.exports = router;