// Import des modules
const express = require('express'),
    router = express.Router(),
    path = require('path')


// Controllers
// ..............................................................
const homeController = require('./controllers/homeController'),
    nomController = require('./controllers/nomController'),
    article_idController = require('./controllers/article_idController'),
    supprimerController = require('./controllers/supprimerController'),
    modifier_idController = require('./controllers/modifier_idController'),
    actionmodifier_idController = require('./controllers/actionmodifier_idController')

// Home
router.route('/')
    .get(homeController.get)

// add nom Post
router.route('/postenom')
    .post(nomController.postNom)

router.route('/modifier/:id')
    .get(modifier_idController.getID)

// Article ID
router.route('/article/:id')
    .get(article_idController.getID)

router.route('/supprimer/:id')
    .delete(supprimerController.deleteOne)

router.route('/actionmodifier/:id')
    .put(actionmodifier_idController.putID)

module.exports = router;
