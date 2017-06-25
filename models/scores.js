var mongoose =require('mongoose');

// TODO : Need to externalize the environment configuration 

var options = {
  db: { native_parser: true },
  server: { poolSize: 2 }
}

mongoose.connect('mongodb://localhost/cmemory', options);	
//mongoose.createConnection('mongodb://localhost/cmemory',options);	
console.log("mongodb connected \n");

var scoresSchema = mongoose.Schema({
	name:String,
    email:String,
    highScore: Number
});

var scores = mongoose.model('scores',scoresSchema);

module.exports = scores;