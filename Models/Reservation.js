const mongoose = require("mongoose");
const { Schema } = mongoose;
const Reservation = new mongoose.Schema({
	Code_Reservation: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	Quantite: {
		type: String,
	},
	Type: {
		type: String,
	},
	date: {
		type: Date,
	},
	Station: {
		type: Schema.Types.ObjectId,
		ref: "Station",
	},
	PositionGPS: {
		type: String,
		required: true,
	},
	User: {
		type: Schema.Types.ObjectId,
		ref: "Utilisateurs",
	},
});

module.exports = mongoose.model("Reservation", Reservation);
