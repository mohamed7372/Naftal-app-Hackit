const Utilisateur = require("../Models/Utilisateur");
const Compte = require("../Models/Compte");
const Entreprise = require("../Models/Entreprise");
const Factures = require("../Models/Factures");
const Reservation = require("../Models/Reservation");
const Station = require("../Models/Station");
const Vehicule = require("../Models/Vehicule");
//*************************************************** */
const CodifieCode_Reservation = () => {
	return ["Res", Math.floor(Math.random() * 10000)].join("");
};
const CodifieCodeQR = () => {
	return ["Fac", Math.floor(Math.random() * 10000)].join("");
};

module.exports.CreerReservation = async (req, res) => {
	const Use = await Utilisateur.findOne({ id_User: req.body.id_User }).exec();
	console.log("hoy : ", Use._id, "  siuu : ", Use.id);
	const ID = CodifieCode_Reservation();
	const Fac = new Reservation({
		Code_Reservation: ID,
		Quantite: req.body.Quantite,
		Type: req.body.Type,
		date: Date.now(),
		Station: req.body.Station,
		PositionGPS: req.body.PositionGPS,
		User: Use.id,
	});
	const IDD = Use.id;
	
	Fac.save()
		.then(async () => {
			
			const Veh = await Reservation.findOne({ Code_Facture: ID }).exec();
			console.log("zone a risque   ",Veh)
			console.log("docs : ", Veh.id);
			Utilisateur.findOneAndUpdate(
				{ id_User: req.body.id_User },
				{ $addToSet: { Reservations: Veh.id } },
				(err, docs) => {
					if (!err) {
						console.log("pas derreur");
						return res.status(200).json({
							message: " Ajout de la facture effectuer avec succes ",
						});
					} else {
						console.log("erreur de mise a jour : ", err);
						return res.status(202).send({ error: err });
					}
				}
			);
		})
		.catch((error) => res.status(400).json({ error }));
};
module.exports.GetAllReservations = async (req, res) => {
	const Fac = await Reservation.find();
	res.status(200).json(Fac);
};
module.exports.GetReservation = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Reservation.findOne(
		{ Code_Reservation: req.body.Code_Reservation },
		(err, docs) => {
			if (!err) {
				console.log("on a trouver !! " + docs.id_User);
				res.status(200).json(docs);
			} else console.log(" on a un souci : " + err);
		}
	);
};
module.exports.SupprimerReservation = async (req, res) => {
	try {
		await Reservation.remove({
			Code_Reservation: req.body.Code_Reservation,
		}).exec();
		res.status(200).json({ message: "Suppression effectuer avec succes. " });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
