const mongoose = require("mongoose");
//********************************************/.
const UserRole = require("./RoleUser");
const Compte = require('./Compte');
//********************************************/
const { isEmail } = require("validator");
const { Schema } = mongoose;
//********************************************/
const Utilisateur = new mongoose.Schema({
	id_User: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	UserName: {
		type: String,
		required: true,
		trim: true,
	},
	ProfilePic : {
		type:[String],
	},
	mdp: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		validate: [isEmail],
		lowercase: true,
		trim: true,
	},
    NumeroTel: {
		type: String,
		required: true,
	},
    Compte:Compte,
	role:UserRole,
    Vehicules :{
        type:[{ type: Schema.Types.ObjectId, ref: 'Vehicule' }],
    },
	Factures: {
		type: [{ type: Schema.Types.ObjectId, ref: "Facture" }],
	},
	Reservations: {
		type: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
	},
});

module.exports = mongoose.model("Utilisateurs", Utilisateur);
