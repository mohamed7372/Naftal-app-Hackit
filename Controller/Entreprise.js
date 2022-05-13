const Utilisateur = require("../Models/Utilisateur");
const Compte = require("../Models/Compte");
const Entreprise = require("../Models/Entreprise");
const Factures = require("../Models/Factures");
const Reservation = require("../Models/Utilisateur");
const Station = require("../Models/Station");
const Vehicule = require("../Models/Vehicule");
//*************************************************** */
const CodifieIdEntreprise = () => {
	return ["Ent", Math.floor(Math.random() * 10000)].join("");
};
module.exports.CreerCompteEntreprise = async (req, res) => {
	const ID = CodifieIdEntreprise();
	const Ent = new Entreprise({
		Id_Entreprise: ID,
		NomEntreprise: req.body.NomEntreprise,
		Chauffeur: [],
		Compte: { Valeur: "0", Transactions: [] },
	});
	Ent.save()
		.then(() => {
			return res.status(200).json({
				message: " Entreprise enregistrer avec succes ",
			});
		})
		.catch((error) => res.status(400).json({ error }));
};
module.exports.ModifierNomEntreprise = async (req, res) => {
	try {
		await Entreprise.findOneAndUpdate(
			{ Id_Entreprise: req.body.Id_Entreprise },
			{ $set: { NomEntreprise: req.body.NomEntreprise } },
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
module.exports.SupprimerEntreprise = async (req, res) => {
	try {
		await Entreprise.remove({ Id_Entreprise: req.body.Id_Entreprise }).exec();
		res.status(200).json({ message: "Suppression effectuer avec succes. " });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
module.exports.GetAllEntreprise = async (req, res) => {
    const users = await Entreprise.find().select('-mdp');
    res.status(200).json(users);
};
module.exports.GetEntreprise = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Entreprise.findOne({ Id_Entreprise: req.body.Id_Entreprise }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.GetChauffeursEntreprise = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Entreprise.findOne({ Id_Entreprise: req.body.Id_Entreprise }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs.Chauffeur);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.GetChauffeursEntreprise = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Entreprise.findOne({ Id_Entreprise: req.body.Id_Entreprise }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs.Compte);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.GetCompteEntreprise = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Entreprise.findOne({ Id_Entreprise: req.body.Id_Entreprise }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs.Compte);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
