// Import du model Nom de la base de donnée
const Nom = require("../../database/models/Nom"); 

// Controllers
module.exports = {
    // PUT (mise à jour par ID)
    putID: async (req, res) => {
        try {
            // Vérifie qu'un id est bien fourni
            if (!req.params.id) {
                return res.status(400).send("Aucun ID fourni.");
            }

            // Mise à jour
            const updatedDoc = await Nom.findByIdAndUpdate(
                req.params.id,       // identifiant
                { ...req.body },     // nouvelles données
                { new: true }        // retourne le document mis à jour
            );

            // Si aucun document trouvé
            if (!updatedDoc) {
                return res.status(404).send("Document non trouvé.");
            }

            // Redirection si succès
            return res.redirect('/');

        } catch (err) {
            console.error("Erreur lors du PUT :", err);
            return res.status(500).send(err.message);
        }
    }
};
