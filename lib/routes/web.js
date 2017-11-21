import express from 'express';
const router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/', function(req, res){
   res.send('POST route on things.');
});

router.post('/view', function(req, res){
   res.render('test_view');
});

router.get('/:id([0-9]{5})/:text', (req, res) => {
   res.send('The id you specified is ' + req.params.id + ' and text' + req.params.text);
});

router.get('*', (req, res) => {
   res.send('That url doesnt exist');
});
module.exports = router;