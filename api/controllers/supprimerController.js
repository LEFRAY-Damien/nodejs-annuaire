// Import du modèle
const Archive = require("../../database/models/Nom"); // 
const fs = require('fs');
const path = require('path');

module.exports = {
    // Delete Archive
    deleteOne: async (req, res) => {
        try {
            // Cherche et supprime directement par ID
            const deletedArchive = await Archive.findByIdAndDelete(req.params.id);

            if (!deletedArchive) {
                // Aucun document trouvé
                return res.status(404).send("Archive non trouvée");
            }

     
            // Si tout va bien → redirection
            res.redirect('/');
        } catch (err) {
            console.error("Erreur suppression :", err);
            res.status(500).send("Erreur lors de la suppression");
        }
    }
};

    
