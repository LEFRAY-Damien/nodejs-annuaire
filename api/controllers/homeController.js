// Controllers GET page freetoplay

const Nom = require("../../database/models/Nom");

module.exports = {
    // Method Get
    get: async (req, res) => {

        // Variable de récupération de tout les Articles
        const cardeannuaire = await Nom.find({}).lean()
   
        // Et on renvoit la page article avec notre objet de tout nos article pour agrémenté la liste
        res.render('home', {  
            cardeannuaire
        })
    }
}

