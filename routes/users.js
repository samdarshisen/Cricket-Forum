var mongoose = require("mongoose")
mongoose.connect('mongodb+srv://samdarshi:hello123@cluster0.8kcdg.mongodb.net/reviewApp?retryWrites=true&w=majority')
.then(function(){
  console.log('Database Connected')
})
.catch(function(err){
console.log(err)
})


var schema = mongoose.Schema({
  name:String,
  review:String
})

module.exports=mongoose.model('reviewModal', schema)