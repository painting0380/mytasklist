var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://amily:root@ds123351.mlab.com:23351/mytasklist_amily',['tasks']);

router.get('/tasks', function(req, res, next){
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});


router.get('/tasks/:id', function(req, res, next){
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

module.exports = router;