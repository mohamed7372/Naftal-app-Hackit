const Utilisateur = require("../Models/Utilisateur");
const Compte = require("../Models/Compte");
const Entreprise = require("../Models/Entreprise");
const Factures = require("../Models/Factures");
const Reservation = require("../Models/Utilisateur");
const Station = require("../Models/Station");
const Vehicule = require("../Models/Vehicule");
//*************************************************** */
const CodifieIdStation = () => {
	return ["St", Math.floor(Math.random() * 10000)].join("");
};

module.exports.CreerStation = async (req, res) => {
	const ID = CodifieIdStation();
	const ST = new Station({
		id_Station: ID,
		NomStation: req.body.NomStation,
		PositionGPS: req.body.PositionGPS,
		Stock: {
			Essence: req.body.Essence || "0",
			Gasoil: req.body.Gasoil || "0",
			GAZ: req.body.GAZ || "0",
		},
		NbrPompes: req.body.NbrPompes,
		Pompes: [],
		Factures: [],
		FileAttente: [],
	});
	ST.save()
		.then(() => {
			return res.status(200).json({
				message: " Station enregistrer avec succes ",
			});
		})
		.catch((error) => res.status(400).json({ error }));
};
module.exports.GetAllStations = async (req, res) => {
	const station = await Station.find();
	res.status(200).json(station);
};
module.exports.GetStation = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Station.findOne({ id_Station: req.body.id_Station }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.ModifierNomStation = async (req, res) => {
	try {
		await Station.findOneAndUpdate(
			{ id_Station: req.body.id_Station },
			{ $set: { NomStation: req.body.NomStation } },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		)
			.then((docs) => {
				console.log("---- ok ----");
				return res.status(200).json({ message: "modifier avec succes" });
			})
			.catch((err) => {
				return res.status(500).send({ message: err });
			});
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
module.exports.ModifierStock = async (req, res) => {
	try {
		await Station.findOneAndUpdate(
			{ id_Station: req.body.id_Station },
			{ $set: { Stock: req.body.Stock } },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		)
			.then((docs) => {
				console.log("---- ok ----");
				return res.status(200).json({ message: "modifier avec succes" });
			})
			.catch((err) => {
				return res.status(500).send({ message: err });
			});
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
module.exports.ModifierAjouterEssence = async (req, res) => {
	try {
		await Station.findOneAndUpdate(
			{ id_Station: req.body.id_Station },
			{ $inc: { "Stock.Essence": req.body.Essence } },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		)
			.then((docs) => {
				console.log("---- ok ----");
				return res.status(200).json({ message: "modifier avec succes" });
			})
			.catch((err) => {
				return res.status(500).send({ message: err });
			});
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
module.exports.ModifierAjouterGasoil = async (req, res) => {
	try {
		await Station.findOneAndUpdate(
			{ id_Station: req.body.id_Station },
			{ $inc: { "Stock.Gasoil": req.body.Gasoil } },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		)
			.then((docs) => {
				console.log("---- ok ----");
				return res.status(200).json({ message: "modifier avec succes" });
			})
			.catch((err) => {
				return res.status(500).send({ message: err });
			});
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
module.exports.ModifierAjouterGAZ = async (req, res) => {
	try {
		await Station.findOneAndUpdate(
			{ id_Station: req.body.id_Station },
			{ $inc: { "Stock.GAZ": req.body.GAZ } },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		)
			.then((docs) => {
				console.log("---- ok ----");
				return res.status(200).json({ message: "modifier avec succes" });
			})
			.catch((err) => {
				return res.status(500).send({ message: err });
			});
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
module.exports.ModifierNbrPompes = async (req, res) => {
	try {
		await Station.findOneAndUpdate(
			{ id_Station: req.body.id_Station },
			{ $set: { NbrPompes: req.body.NbrPompes } },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		)
			.then((docs) => {
				console.log("---- ok ----");
				return res.status(200).json({ message: "modifier avec succes" });
			})
			.catch((err) => {
				return res.status(500).send({ message: err });
			});
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
module.exports.AjouterAlaFileE = async (req, res) => {
	Station.findOneAndUpdate(
		{ id_Station: req.body.id_Station },
		{ $addToSet: { FileAttenteE: req.body.id } },
		(err, docs) => {
			if (!err) {
				console.log("pas derreur");
				return res.status(200).json({
					message: " Ajout de la File d'attente effectuer avec succes ",
				});
			} else {
				console.log("erreur de mise a jour : ", err);
				return res.status(202).send({ error: err });
			}
		}
	);
};
module.exports.FileAttenteG = async (req, res) => {
	Station.findOneAndUpdate(
		{ id_Station: req.body.id_Station },
		{ $addToSet: { FileAttenteG: req.body.id } },
		(err, docs) => {
			if (!err) {
				console.log("pas derreur");
				return res.status(200).json({
					message: " Ajout de la File d'attente effectuer avec succes ",
				});
			} else {
				console.log("erreur de mise a jour : ", err);
				return res.status(202).send({ error: err });
			}
		}
	);
};
module.exports.FileAttenteGZZ = async (req, res) => {
	Station.findOneAndUpdate(
		{ id_Station: req.body.id_Station },
		{ $addToSet: { FileAttenteGZZ: req.body.id } },
		(err, docs) => {
			if (!err) {
				console.log("pas derreur");
				return res.status(200).json({
					message: " Ajout de la File d'attente effectuer avec succes ",
				});
			} else {
				console.log("erreur de mise a jour : ", err);
				return res.status(202).send({ error: err });
			}
		}
	);
};
module.exports.SupprimerStation = async (req, res) => {
	try {
		await Station.remove({ id_Station: req.body.id_Station }).exec();
		res.status(200).json({ message: "Suppression effectuer avec succes. " });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
