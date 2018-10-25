///This app allows you to create a pokemon evolution reference

//setting up 

var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);

//checking JSON file
///console.log(words);
console.log("server is starting");

var express = require('express');
var app = express();

//setting up server and checking
var server = app.listen(3000, listening);
function listening(){
    console.log("listening")
}


//this is where pokemon and evolutions are added into json file
app.get('/add/:pokeStart/:pokeDone', addPokevolution);
function addPokevolution(req, res) {

  var pokeStart = req.params.pokeStart;
  var pokeDone = req.params.pokeDone;
  words[pokeStart] = pokeDone;
  var reply = {
    msg: "Success!! Added " + pokeStart +"'s evolution!"
}

  var json = JSON.stringify(words, null, 2);
  fs.writeFile('words.json', json, 'utf8', finished);
  function finished(err) {
    console.log('Success writing in JSON file');
    res.send(reply);
  }
}
//see all data in the file
app.get('/all', sendAll);
function sendAll(request, response){
    response.send(words);
}
  
