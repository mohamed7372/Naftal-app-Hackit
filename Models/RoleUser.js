const mongoose = require("mongoose");
const { Schema } = mongoose;
const RoleUserSchema = new mongoose.Schema({
	role: {
		type: String,
	},
	Entreprise: {
		type: {
			Entrepise: String,
			Position: String,
			Entrep:{type:Schema.Types.ObjectId, ref: "Entreprise",}
		},
	},
});

module.exports = RoleUserSchema;
