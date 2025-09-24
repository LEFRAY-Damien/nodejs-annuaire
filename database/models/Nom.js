
// Model de Contact sauvgarder dans la base de donnée

const mongoose = require('mongoose') // Appel de la constante mongoose
const Schema = mongoose.Schema

// Shema enregistrer dans la base de données
const NomSchema = new mongoose.Schema({

    nom: String,
    prenom: String,
    numero: String

})

// Cree une constante article selon le shema ci dessus
const Nom = mongoose.model('Nom', NomSchema)
   
// Exporte le contenue d'un article sur d'autre page sous le nom Article
module.exports = Nom