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
						const fact = await Factures.findOne({ Code_Facture: ID }).exec();
						console.log("Niveau 3");
						const IDD = fact._id.valueOf();
						console.log("docs apres facture: ", IDD);
						let Transaction = {
							type: "remplissage",
							date: Date.now(),
							Valeur: ValPaie,
						};
						try {
							console.log("Niveau 4");
							await Utilisateur.findById(
								{ IdUser },
								/*{
							$addToSet: { Factures: IDD },
							$addToSet: { "Compte.Transactions": Transaction },
							$inc: { "Compte.Valeur": -ValPaie.parseFloat() },
						},*/
								async () => {
									/*
								const user = await Utilisateur.findById({IdUser}).exec();
					            console.log(user);
								console.log("siuuuu  " ,user._id.valueOf());*/
									console.log("Niveau 5");
									if (!err) {
										try {
											await Station.findOneAndUpdate(
												{ id_Station: req.body.id_Station },
												{ $addToSet: { Factures: IDD } },
												async (err, docs) => {
													console.log("Niveau 6");
													if (!err) {
														let His = {
															Quantite: req.body.Quantite,
															Pomp: req.body.Pomp,
															Station: req.body.id_Station,
															TypeCarburant: req.body.TypeCarburant,
															TypePaie: req.body.TypePaie,
														};
														try {
															await Vehicule.findOneAndUpdate(
																{ id_Vehicule: req.body.id_Vehicule },
																{
																	$inc: {
																		"Compte.Valeur": -ValPaie.parseFloat(),
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
														} catch (err) {
															return res.status(500).json({ message: err });
														}
													} else {
														console.log("erreur de mise a jour : ", err);
														return res.status(202).send({ error: err });
													}
												}
											);
										} catch (err) {
											return res.status(400).send({ error: err });
										}
									} else {
										console.log("erreur de mise a jour : ", err);
										return res.status(400).send({ error: err });
									}
								}
							);
						} catch (err) {
							return res.status(500).json({ message: err });
						}
					} catch (err) {
						return res.status(500).json({ message: err });
					}
				})
				.catch((err) => res.status(500).json({ message: err }));
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};