var connect = require("../db/db");

function allJokes(callback) {
    var db = connect.get();
    db.collection("jokes").find({}).toArray(function(err, data){
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

function findJoke (id, callback) {
    var db = connect.get();
    db.collection("jokes").findOne({"_id" : id}, function(err,data) {
        if(err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

var ObjectID = require("mongodb").ObjectID;
function editJoke(jokeToEdit, callback) {
   // jokeToEdit.lastEdited = db.currentTime;
    var db = connect.get();
    db.collection("jokes").updateOne({"_id": jokeToEdit._id}, jokeToEdit, function(err,data){
        callback(err,data);
    });
}

var ObjectID = require("mongodb").ObjectID;
function deleteJoke(id, callback) {
    var db = connect.get();
    db.collection("jokes").deleteOne({"_id": ObjectID(id)}, function(err,data){
        callback(err,data);
    });
}

var ObjectID = require("mongodb").ObjectID;
function addJoke(aJoke, callback) {
    var db = connect.get();
    db.collection("jokes").insertOne(aJoke, function(err,data){
        callback(err,data);
    });
}


exports.allJokes = allJokes;
exports.findJoke = findJoke;
exports.editJoke = editJoke;
exports.deleteJoke = deleteJoke;
exports.addJoke = addJoke;