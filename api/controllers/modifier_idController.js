// Import du model Article de la base de donnée
const Article = require("../../database/models/Nom"); // Model database

module.exports = {
    // Affichage    Article ID
    getID: async (req, res) => {

        console.log("LOG modifier")

        // Ici query est égale à l'id envoyer via l'URL /article/:id
        const query = req.params.id // boby = formulaire

        // Ici on recherche l'article ayant comme id le query de notre URL   
       const dbArticleID = await Article.findById(query).lean()

        // Et on renvoie notre page avec les data
        res.render('modifier_id', {
            dbArticleID
        })
    }
}
