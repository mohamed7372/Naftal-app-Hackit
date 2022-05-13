const Utilisateur = require("../Models/Utilisateur");
const Compte = require("../Models/Compte");
const Entreprise = require("../Models/Entreprise");
const Factures = require("../Models/Factures");
const Reservation = require("../Models/Utilisateur");
const Station = require("../Models/Station");
const Vehicule = require("../Models/Vehicule");
//*************************************************** */
const CodifieCode_Facture = () => {
	return ["Fac", Math.floor(Math.random() * 10000)].join("");
};
const CodifieCodeQR = () => {
	return ["Fac", Math.floor(Math.random() * 10000)].join("");
};

module.exports.CreerFacture = async (req, res) => {
	var PrixUnite = 49.55;
	const ValPaie = req.body.Quantite * PrixUnite;
	Utilisateur.findOne({ id_User: req.body.id_User }, (err, docs) => {
		if (!err) {
			console.log("Niveau 1");
			const IdUser = docs._id.valueOf();
			const ID = CodifieCode_Facture();
			const Fac = new Factures({
				Code_Facture: ID,
				Quantite: req.body.Quantite,
				date: Date.now(),
				CodeQR: "CodifieCodeQR()",
				Pomp: req.body.Pomp,
				User: docs.id,
			});
			console.log("Niveau 2");
			Fac.save()
				.then(async () => {
					try {
						console.log("Niveau 3");
						const fact = await Factures.findOne({ Code_Facture: ID }).exec();
						const IDD = fact.id;
						console.log("hello : ", IdUser, " ----------------");
						const user = await Utilisateur.findById(IdUser).exec();
						console.log("docs apres facture: ", IDD);

						console.log("zone a risque : ", IDD);
						try {
							var Tr = {
								type: "remplissage",
								date: Date.now(),
								Valeur: ValPaie,
							};
							Utilisateur.findByIdAndUpdate(IdUser, {
								$inc: { "Compte.Valeur": -ValPaie },
							}).exec();
							Utilisateur.findByIdAndUpdate(IdUser, {
								$addToSet: { "Factures": IDD },
							}).exec();
							Utilisateur.findByIdAndUpdate(
								IdUser,
								{ $addToSet: { "Compte.Transactions": Tr } },
								() => {
									console.log(user);
									console.log("siuuuu  ", user._id.valueOf());
									console.log("Niveau 5");
									if (!err) {
										Station.findOneAndUpdate(
											{ id_Station: req.body.id_Station },
											{ $addToSet: { Factures: IDD } },
											(err, docs) => {
												console.log("Niveau 6 ");
												if (!err) {
													let His = {
														Quantite: req.body.Quantite,
														Pomp: req.body.Pomp,
														Station: req.body.id_Station,
														TypeCarburant: req.body.TypeCarburant,
														TypePaie: req.body.TypePaie,
													};
													console.log(ValPaie);
													Vehicule.findOneAndUpdate(
														{ id_Vehicule: req.body.id_Vehicule },
														{
															$inc: {
																"Compte.Valeur": -ValPaie,
															},
															$addToSet: { Historique: His },
														},
														{
															new: true,
															upsert: true,
															setDefaultsOnInsert: true,
														}
													)
														.then(() => {
															console.log("pas derreur");
															return res.status(200).json({
																message:
																	" Ajout de la facture effectuer avec succes ",
															});
														})
														.catch((err) => {
															return res.status(500).send({ message: err });
														});
												} else {
													console.log("erreur de mise a jour : ", err);
													return res.status(202).send({ error: err });
												}
											}
										);
									} else {
										console.log("erreur de mise a jour : ", err);
										return res.status(400).send({ error: err });
									}
								}
							);
						} catch (err) {
							console.log(err);
						}
					} catch (err) {
						res.status(500).json({ message: err });
					}
				})
				.catch((err) => res.status(500).json({ message: err }));
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.GetAllFactures = async (req, res) => {
	const Fac = await Factures.find();
	res.status(200).json(Fac);
};
module.exports.GetFacture = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Factures.findOne({ Code_Facture: req.body.Code_Facture }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.SupprimerFacture = async (req, res) => {
	try {
		await Factures.remove({ Code_Facture: req.body.Code_Facture }).exec();
		res.status(200).json({ message: "Suppression effectuer avec succes. " });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
