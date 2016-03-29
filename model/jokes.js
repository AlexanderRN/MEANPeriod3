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
    jokeToEdit.lastEdited = db.currentTime;
    var db = connection.get();
    db.collection("jokes").updateOne({"_id": jokeToEdit._id}, jokeToEdit, function(err,data){
        callback(err,data);
    });
}


exports.allJokes = allJokes;
exports.findJoke = findJoke;
exports.editJoke = editJoke;
exports.deleteJoke;
exports.randomJoke;