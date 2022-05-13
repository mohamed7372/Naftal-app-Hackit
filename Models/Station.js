const mongoose = require("mongoose");
const { Schema } = mongoose;

const Station = new mongoose.Schema({
	id_Station: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	NomStation: {
		type: String,
		required: true,
	},
	PositionGPS: {
		type: String,
		required: true,
	},
	Stock: {
		type: {
			Essence: {
				Capacite: Number,
				Quantite: Number,
			},
			Gasoil: {
				Capacite: Number,
				Quantite: Number,
			},
			GAZ: {
				Capacite: Number,
				Quantite: Number,
			},
		},
	},
	NbrPompes: Number,
	Pompes: {
		type: [
			{
				NumeroPompe: Number,
				Type: String,
			},
		],
	},
	Factures: {
		type: [{ type: Schema.Types.ObjectId, ref: "Facture" }],
	},
	FileAttenteE: {
		type: [{ type: Schema.Types.ObjectId, ref: "Utilisateurs" }],
	},
	FileAttenteG: {
		type: [{ type: Schema.Types.ObjectId, ref: "Utilisateurs" }],
	},
	FileAttenteGZZ: {
		type: [{ type: Schema.Types.ObjectId, ref: "Utilisateurs" }],
	},
});

module.exports = mongoose.model("Station", Station);
