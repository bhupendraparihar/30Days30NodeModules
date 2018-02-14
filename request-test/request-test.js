/**
 * npm install request --save
 * This example shows the streaming functionality of request module
 */

const request = require('request');
const fs = require('fs');

request('https://api.myjson.com/bins/uy93p', function(error, response, body){
    if(error){
        console.log(error);
        return;
    }

    //Expecting a json response
    console.log(body);

    var myJson = JSON.parse(body);

    myJson["website"]  = "http://jforjs.com";
    console.log(myJson);

    fs.writeFile('myJson.json', JSON.stringify(myJson), 'utf8', function(){

    });
    
    fs.createReadStream('myJson.json').pipe(request.put('https://api.myjson.com/bins/uy93p'));
});