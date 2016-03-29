var jokes = require("./model/jokes.js");
var connection = require("./db/db.js");

connection.connect("mongodb://localhost:27017/test", function (){
    jokes.allJokes(function(err, data) {
        if(err) {
            console.error("Error.")
        } else {
            console.log(data);
        }
    });
});

connection.connect("mongodb://localhost:27017/test", function () {
    var id = "56eab4d4057538e3055ab24c";
    jokes.findJoke(id, function (err, data) {
        if (err) {
            console.error("Error.")
        } else {
            console.log("Joke: " + data.joke);
        }
    });
});

connection.connect("mongodb://localhost:27017/test", function () {
    var id = "56eab4d4057538e3055ab24c";
    jokes.editJoke(id, function (err, data) {
        if(err) {

        } else {
            
        }

    });
});