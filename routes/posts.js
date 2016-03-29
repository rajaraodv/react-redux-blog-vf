var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  serverUrl : 'https://ltng1-dev-ed.my.salesforce.com',
  sessionId : '00Di0000000JEm3!AQ4AQEoB90cYo66ZD8DLTaegtPMrnt3LqoUHaKnRh1uP.mU8cAlJudaqx_jJhASRVx4pcPgCLwWOjRTu2fRrLIR6DgBYciDJ'
});



router.get('/posts', function(req, res, next) {
	var q = req.query.query;
	console.dir(q);
	conn.query(q, function(err, result) {
		console.dir(err);
		console.log(1);
  	if (err) { 
  		console.error(err); 
  		return res.status(400).json(err);
  	}
  	console.dir(result);
  	res.json(result);
});


});

router.post('/posts', function(req, res, next) {

});

router.get('/posts/:id', function(req, res, next) {

});

router.delete('/posts/:id', function(req, res, next) {
	// var id = req.params.id;
	// if(id.length != 24) {
	// 	return res.json({error: 'id must be a valid 24 char hex string'});
	// }
	// var id = mongoose.Types.ObjectId(req.params.id);//convert to objectid
	// Post.remove({'_id': id}, function(err, post) {
	// 	if (err) {
	// 		console.log(err);
	// 		return res.status(500).json({error: 'could not delete post'});
	// 	}
	// 	res.json({result: 'Deleted Post'});
	// });
});

router.post('/validatePostFields', function(req, res, next){
	// var body = req.body;
	// var title = body.title ? body.title.trim() : '';

	// Post.findOne({'title': new RegExp(title, "i") }, function(err, post){
	// 	if (err) {
	// 		console.log(err);
	// 		return res.json({error: 'Could not find post for title uniqueness'});
	// 	}
	// 	if(post) {
	// 		res.json({title: 'Title "'+title+'" is not unique!'});
	// 	} else {
	// 		return res.json({});
	// 	}
		
	// });
});


module.exports = router;
