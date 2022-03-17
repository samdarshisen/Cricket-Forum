var reviewModel = require('./users')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/post', function (req, res) {
  res.render('write')
})
router.get('/reviews', function (req, res) {
  reviewModel.find()
  .then(function(data){
    res.render('read' , {data})
  })
  
})
router.get('/update/:id', function (req, res) {
  reviewModel.findOne({_id:req.params.id})
  .then(function(data){
    res.render('update' , {data:data})
  })

})
router.post('/update/:id' , function (req , res){
  var updated = {
    name:req.body.name,
    review:req.body.review

  }
  reviewModel.findOneAndUpdate({_id:req.params.id}, {'$set':updated})
  .then(function(updatedData){
    res.redirect('/reviews')
  })
})

// DATA MANIPULATION ROUTES
router.post('/submit' , function(req , res){
  reviewModel.create({
    name:req.body.name,
    review:req.body.review
  })
  .then(function(){
    res.redirect('/reviews')
  })
  .catch(function(err){
    res.send(err)
  })
})
router.get('/delete/:id' , function(req , res){
  reviewModel.findOneAndDelete({_id:req.params.id})
  .then(function(){
    res.redirect('/reviews')
  })
})
module.exports = router;
