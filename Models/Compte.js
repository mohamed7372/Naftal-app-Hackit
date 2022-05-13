const mongoose = require("mongoose");

const Compte = new mongoose.Schema({
	Valeur: {
		type: Number,
	},
	Transactions: {
		type: [{
            Type:String,
            date:Date,
            Valeur:String,
        }],
	},
});

module.exports = Compte;
