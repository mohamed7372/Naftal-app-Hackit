const mongoose = require("mongoose");
const Compte = require("./Compte");
const { Schema } = mongoose;
const Entreprise = new mongoose.Schema({
	Id_Entreprise: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	NomEntreprise: {
		type: String,
	},
	Chauffeur: {
		type: [{ type: Schema.Types.ObjectId, ref: "Utilisateurs" }],
	},
	Compte: Compte,
	
});

module.exports = mongoose.model("Entreprise", Entreprise);
