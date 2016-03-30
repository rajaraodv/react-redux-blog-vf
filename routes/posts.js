var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  serverUrl: 'https://ltng1-dev-ed.my.salesforce.com',
  sessionId: '00Di0000000JEm3!AQ4AQEoB90cYo66ZD8DLTaegtPMrnt3LqoUHaKnRh1uP.mU8cAlJudaqx_jJhASRVx4pcPgCLwWOjRTu2fRrLIR6DgBYciDJ'
});



router.get('/posts', function(req, res, next) {
  var q = req.query.query;
  conn.query(q, function(err, result) {
    if (err) {
      return res.status(400).json(err);
    }
    res.json(result);
  });
});

router.post('/posts', function(req, res, next) {
	var body = req.body;
	var post = {
		'Name': body.Name,
		'Categories__c': body.Categories__c,
		'Content__c': body.Content__c
	};

	conn.sobject("Post__c").create(post, function(err, result) {
    if (err) {
      return res.status(400).json(err);
    }
    res.json(result);
  });
});

router.get('/posts/:id', function(req, res, next) {
	var id = req.params.id;
	conn.sobject("Post__c").retrieve(id, function(err, result) {
    if (err) {
      return res.status(400).json(err);
    }
    res.json(result);
  });
});

router.delete('/posts/:id', function(req, res, next) {
	var id = req.params.id;
	conn.sobject("Post__c").destroy(id, function(err, result) {
    if (err) {
      return res.status(400).json(err);
    }
    res.json(result);
  });
});


router.post('/validatePostFields', function(req, res, next) {
   var body = req.body;
   var Name = body.Name ? body.Name.trim() : '';
   if(!Name || Name === '' || Name.indexOf(' ') > 0) {
   	return res.status(400).json({message: 'bad request'});
   }

   conn.query('SELECT Id FROM Post__c WHERE NAME = "' + Name + '"', function(err, result) {
    if (err) {
      return res.status(400).json(err);
    }
    console.dir(result);
    res.json(result);
  });

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