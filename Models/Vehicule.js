const mongoose = require("mongoose");
const { Schema } = mongoose;
const Compte = require('./Compte');
const Vehicule = new mongoose.Schema({
	id_Vehicule: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	Reservoir:{
		type: String,
		required: true,
	},
	Carburant: {
		type: String,
		required: true,
	},
	Type: {
		type: String,
		required: true,
	},
	Historique: {
		type: [
			{
				Quantite:String,
                Pomp:String,
                Station:String,
                TypeCarburant:String,
                TypePaie:String,
			},
		],
	},
	Compte:Compte,
});

module.exports = mongoose.model("Vehicule", Vehicule);
