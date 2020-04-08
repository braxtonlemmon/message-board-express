const messages = [
  { text: 'Call me!', user: 'Jason', added: new Date() },
  { text: 'You are late.', user: 'Sam', added: new Date() },
  { text: 'I am hungry', user: 'Walter', added: new Date() }
]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New message'});
})

router.post('/new', function(req, res) {
  const {name, message} = req.body;
  messages.push({text: message, user: name, added: new Date()});
  res.redirect('/');
})

module.exports = router;
