var express = require('express');
var jokes = require('../model/jokes');
var router = express.Router();

router.get("/jokes", function (req,res, next) {
    jokes.allJokes(function(err,data){
        if (err) {
            throw new Error(err);
        } else {
            res.end(JSON.stringify(data));
        }
    })
});

router.get("/joke/:id", function (req,res, next) {
    jokes.findJoke(req.params.id, function(err,data){
        if (err) {
            throw new Error(err);
        } else {
            res.end(JSON.stringify(data));
        }
    })
});

router.get("/removeJoke/:id", function (req,res, next) {
    jokes.deleteJoke(req.params.id, function(err,data){
        if (err) {
            throw new Error(err);
        } else {
            res.end(JSON.stringify(req.params.id + ", REMOVED!"));
        }
    })
});

router.put("/editJoke/:id", function (req,res, next) {
    jokes.editJoke(req.params.id, req.body, function(err,data){
        if (err) {
            throw new Error(err);
        } else {
            res.end(JSON.stringify(req.params.id + ", REMOVED!"));
        }
    })
});

router.post("/addJoke", function (req,res, next) {
    var newJoke = req.body;
    newJoke.lastEdited = new Date();
    jokes.addJoke(newJoke);
    res.end(JSON.stringify(newJoke));
});

module.exports = router;