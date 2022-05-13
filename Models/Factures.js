const mongoose = require("mongoose");
const { Schema } = mongoose;
const Facture = new mongoose.Schema({
	Code_Facture: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	Quantite: {
		type: String,
	},
	date:{
		type:Date,
	},
	CodeQR:{
		type: String,
	},
	Pomp:{
		type:Number,
	},
	User:{
		type: Schema.Types.ObjectId, ref: 'Utilisateurs',
	},
});

module.exports = mongoose.model("Facture", Facture);
