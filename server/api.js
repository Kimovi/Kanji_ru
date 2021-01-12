const express = require("express");
const router = express.Router();
const Kanji  = require("./model/schema");

//get every country
router.get("/bookmark", function (req, res) {
  Kanji.find({}).then(function (kanji) {
    res.send(kanji);
  });
});

// add a country to db -> working!!!!
router.post("/bookmark", function (req, res) {
  //new instance of County object
  Kanji.create(req.body).then(function (kanji) {
    res.send(kanji);
    console.log(kanji)
  });
});


//delete country//working
router.delete("/bookmark/:id", function (req, res) {
  Kanji.findByIdAndRemove({ _id: req.params.id }).then(function (kanji) {
    res.send(kanji);
  });
});


module.exports = router;