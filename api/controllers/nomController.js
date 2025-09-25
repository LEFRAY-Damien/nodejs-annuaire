// Import du model Contact de la base de donnée
const Nom = require("../../database/models/Nom"); // Model database
const path = require('path') // utile uniquement pour path.resolve plus bas

// controllers
module.exports = {

    // Post
    postNom: (req, res) => {

        Nom.create({
            ...req.body,

        }, (err, post) => {
            res.redirect('/')
        })
    },
}