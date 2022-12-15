var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "alyxmp4 main", file: "index" });
});

router.get('/donate', (req, res, next) => {
  res.render('donate', { title: "donate me", file: "donate" })
})

router.get('/about', (req, res, next) => {
  res.render('about', { title: "about me", file: "about" })
})

router.get('/contacts/', (req, res, next) => {
  res.render('contacts', { title: 'contact me', file: 'contacts', layout: "layout" })
})

router.get('/projects/', (req, res, next) => {

  res.render('projects-list', { title: "alyxmp4 main", file: "index", list: require('../data/projects.json') });

});


module.exports = router;