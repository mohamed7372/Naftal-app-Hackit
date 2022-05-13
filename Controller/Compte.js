const Utilisateur = require("../Models/Utilisateur");
const Compte = require("../Models/Compte");
const Entreprise = require("../Models/Entreprise");
const Factures = require("../Models/Factures");
const Reservation = require("../Models/Utilisateur");
const Station = require("../Models/Station");
const Vehicule = require("../Models/Vehicule");
const maxAge = 24 * 60 * 60 * 100;
const bcrypt = require("bcryptjs");
const CODE = "Token_secret_Hackit";
//*************************************************** */
const CodifieId = () => {
	return ["Ct", Math.floor(Math.random() * 10000)].join("");
};
const CodifieIdVehicule = () => {
	return ["V", Math.floor(Math.random() * 10000)].join("");
};
const createToken = (id) => {
	return jwt.sign({ userId: id }, CODE, { expiresIn: maxAge });
};
module.exports.CreerCompteUser = async (req, res) => {
	console.log("on affiche le req  ", req.body);
	console.log("on affiche le req  ", req.files);

	Links = [];

	await req.files.forEach(function (y) {
		Links.push(y.path);
	});
	const id_User = CodifieId();
	const { UserName, email, mdp, NumeroTel } = req.body;
	let Compte = {
		Valeur: "0",
		Transactions: [],
	};
	let role = {
		role: "Client",
	};
	bcrypt
		.hash(mdp, 10)
		.then((hash) => {
			console.log("le mdp: ", hash);
			const user = new Utilisateur({
				id_User,
				UserName,
				ProfilePic: Links,
				email,
				mdp: hash,
				NumeroTel,
				Compte,
				role,
				Vehicules: [],
				Factures: [],
				Reservations: [],
			});
			user
				.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
module.exports.CreerCompteUser2 = async (req, res) => {
	console.log("on affiche le req  ", req.body);
	const id_User = CodifieId();
	const { UserName, email, mdp, NumeroTel } = req.body;
	let Compte = {
		Valeur: "0",
		Transactions: [],
	};
	let role = {
		role: "Client",
	};
	bcrypt
		.hash(mdp, 10)
		.then((hash) => {
			console.log("le mdp: ", hash);
			const user = new Utilisateur({
				id_User,
				UserName,
				ProfilePic:[],
				email,
				mdp: hash,
				NumeroTel,
				Compte,
				role,
				Vehicules: [],
				Factures: [],
				Reservations: [],
			});
			user
				.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
module.exports.CreerCompteAdminEnt = async (req, res) => {
	console.log("on affiche le req  ", req.body);
	console.log("on affiche le req  ", req.files);

	Links = [];

	await req.files.forEach(function (y) {
		Links.push(y.path);
	});
	const id_User = CodifieId();
	const { UserName, email, mdp, NumeroTel, Entreprise, Position, Entrepise } =
		req.body;
	let Compte = {
		Valeur: "0",
		Transactions: [],
	};
	let role = {
		role: "Admin Entreprise",
		Entreprise: {
			Entreprise,
			Position,
			Entrepise,
		},
	};
	bcrypt
		.hash(mdp, 10)
		.then((hash) => {
			console.log("le mdp: ", hash);
			const user = new Utilisateur({
				id_User,
				UserName,
				ProfilePic: Links,
				email,
				mdp: hash,
				NumeroTel,
				Compte,
				role,
				Vehicules: [],
				Factures: [],
				Reservations: [],
			});
			user
				.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
module.exports.CreerCompteAdminEnt2 = async (req, res) => {
	console.log("on affiche le req  ", req.body);
	const id_User = CodifieId();
	const { UserName, email, mdp, NumeroTel, Entreprise, Position, Entrepise } =
		req.body;
	let Compte = {
		Valeur: "0",
		Transactions: [],
	};
	let role = {
		role: "Admin Entreprise",
		Entreprise: {
			Entreprise,
			Position,
			Entrepise,
		},
	};
	bcrypt
		.hash(mdp, 10)
		.then((hash) => {
			console.log("le mdp: ", hash);
			const user = new Utilisateur({
				id_User,
				UserName,
				ProfilePic:[],
				email,
				mdp: hash,
				NumeroTel,
				Compte,
				role,
				Vehicules: [],
				Factures: [],
				Reservations: [],
			});
			user
				.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
module.exports.CreerCompteAdminNaf = async (req, res) => {
	console.log("on affiche le req  ", req.body);
	console.log("on affiche le req  ", req.files);

	Links = [];

	await req.files.forEach(function (y) {
		Links.push(y.path);
	});
	const id_User = CodifieId();
	const { UserName, email, mdp, NumeroTel, Entrepise, Position, Entrep } =
		req.body;
	let Compte = {
		Valeur: "0",
		Transactions: [],
	};
	let role = {
		role: "Admin Naftal",
		Entreprise: {
			Entrepise,
			Position,
			Entrep,
		},
	};
	bcrypt
		.hash(mdp, 10)
		.then((hash) => {
			console.log("le mdp: ", hash);
			const user = new Utilisateur({
				id_User,
				UserName,
				ProfilePic: Links,
				email,
				mdp: hash,
				NumeroTel,
				Compte,
				role,
				Vehicules: [],
				Factures: [],
				Reservations: [],
			});
			user
				.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
module.exports.CreerCompteAdminNaf2 = async (req, res) => {
	console.log("on affiche le req  ", req.body);
	const id_User = CodifieId();
	const { UserName, email, mdp, NumeroTel, Entrepise, Position, Entrep } =
		req.body;
	let Compte = {
		Valeur: "0",
		Transactions: [],
	};
	let role = {
		role: "Admin Naftal",
		Entreprise: {
			Entrepise,
			Position,
			Entrep,
		},
	};
	bcrypt
		.hash(mdp, 10)
		.then((hash) => {
			console.log("le mdp: ", hash);
			const user = new Utilisateur({
				id_User,
				UserName,
				ProfilePic:[],
				email,
				mdp: hash,
				NumeroTel,
				Compte,
				role,
				Vehicules: [],
				Factures: [],
				Reservations: [],
			});
			user
				.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
module.exports.SeConnecter = async function SeConnecter(req, res, next) {
	await Utilisateur.findOne({ id_User: req.body.id_User })
		.then((user) => {
			if (!user) {
				return res.status(201).json({ error: "Utilisateur non trouvé !" });
			}
			bcrypt
				.compare(req.body.mdp, user.mdp)
				.then((valid) => {
					if (!valid) {
						return res.status(202).json({ error: "Mot de passe incorrect !" });
					}
					const token = createToken(user._id);
					console.log("CONNECTER");
					res.cookie("jwt", token, { httpOnly: true, maxAge });
					console.log("1");
					res.cookie("id_User", req.body.id_User.replace(/ /g, ""), {
						httpOnly: true,
						maxAge,
					});
					res.cookie("UserName", user.UserName.replace(/ /g, "_"), {
						httpOnly: true,
						maxAge,
					});
					console.log("2");
					res.cookie("email", user.email.replace(/ /g, "_"), {
						httpOnly: true,
						maxAge,
					});
					console.log("3");
					res.cookie("NumeroTel", user.NumeroTel, { httpOnly: true, maxAge });
					console.log("4", user.Streak);
					res.cookie("Compte", user.Compte.Valeur, { httpOnly: true, maxAge });
					console.log("5");
					res.cookie("role", role.role, { httpOnly: true, maxAge });
					res.status(200).json({
						message: "Connecter avec succes",
						id_User: user.id_User,
						UserName: user.UserName,
						email: user.email,
						NumeroTel: user.NumeroTel,
						Compte: user.Compte,
						role: user.role,
						Vehicules: user.Vehicules,
						Factures: user.Factures,
					});
				})
				.catch((error) => res.status(500).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
module.exports.Deconnection = (req, res) => {
	console.log("ON va se deconnecter");
	res.cookie("jwt", "", { maxAge: 1 });
	res.cookie("id_User", "", { maxAge: 1 });
	res.cookie("UserName", "", { maxAge: 1 });
	res.cookie("email", "", { maxAge: 1 });
	res.cookie("NumeroTel", "", { maxAge: 1 });
	res.cookie("Compte", "", { maxAge: 1 });
	res.cookie("role", "", { maxAge: 1 });
	res.status(200).json("/");
};
module.exports.ModifierUserName = async (req, res) => {
	try {
		await Utilisateur.findOneAndUpdate(
			{ id_User: req.body.id_User },
			{ $set: { UserName: req.body.UserName } },
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
module.exports.ModifierMailUtilisateur = async (req, res) => {
	try {
		await Utilisateur.findOneAndUpdate(
			{ id_User: req.body.id_User },
			{ $set: { email: req.body.email } },
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
module.exports.Modifierpassword = async (req, res) => {
	console.log(req.body.id_User);

	console.log("on fait le try de modifie password");
	const salt = await bcrypt.genSalt();
	req.body.mdp = await bcrypt.hash(req.body.mdp, salt);

	try {
		await Utilisateur.findOneAndUpdate(
			{ id_User: req.body.id_User },
			{ $set: { mdp: req.body.mdp } },
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
module.exports.ModifierNumeroTel = async (req, res) => {
	try {
		await Utilisateur.findOneAndUpdate(
			{ id_User: req.body.id_User },
			{ $set: { NumeroTel: req.body.NumeroTel } },
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
module.exports.AjoutVehicule = async (req, res) => {
	const ID = CodifieIdVehicule();
	console.log("ID  ", ID);
	const Veh = new Vehicule({
		id_Vehicule: ID,
		Reservoir: req.body.Reservoir,
		Carburant: req.body.Carburant,
		Type: req.body.Type,
		Historique: [],
		Compte: { Valeur: "", Transactions: [] },
	});
	Veh.save()
		.then(async (err, docs) => {
			try {
				const Veh = await Vehicule.findOne({ id_Vehicule: ID }).exec();
				console.log(
					"le id : ",
					Veh.id,
					" le _id : ",
					Veh._id,
					"  User  : ",
					req.body.id_User
				);

				Utilisateur.findOneAndUpdate(
					{ id_User: req.body.id_User },
					{ $addToSet: { Vehicules: Veh.id } },
					(err, docs) => {
						if (!err) {
							console.log("pas derreur");
							return res.status(200).json({
								message: " Ajout du vehicule effectuer avec succes ",
							});
						} else {
							console.log("erreur de mise a jour : ", err);
							return res.status(202).send({ error: err });
						}
					}
				);
			} catch (err) {
				res.status(500).json({ error });
			}
		})
		.catch((error) => res.status(400).json({ error }));
};
module.exports.EnleverVehicule = async (req, res) => {
	Utilisateur.findOneAndUpdate(
		{ id_User: req.body.id_User },
		{
			$pull: {
				Vehicules: {
					id_Vehicule: req.body.id_Vehicule,
				},
			},
		},
		async (err, docs) => {
			if (!err) {
				try {
					await Vehicule.remove({ id_Vehicule: req.body.id_Vehicule }).exec();
					res
						.status(200)
						.json({ message: "Suppression effectuer avec succes. " });
				} catch (err) {
					return res.status(500).json({ message: err });
				}
			} else {
				console.log("erreur de mise a jour : ", err);
				return res.status(202).send({ error: err });
			}
		}
	);
};
module.exports.SupprimeUser = async (req, res) => {
	try {
		await Utilisateur.remove({ id_User: req.body.id_User }).exec();
		res.status(200).json({ message: "Suppression effectuer avec succes. " });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
module.exports.GetCompte = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Utilisateur.findOne({ id_User: req.body.id }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.GetCompteUser = (req, res) => {
	const token = req.cookies.jwt;
	console.log("on chek ce token :", token);
	if (token) {
		jwt.verify(token, CODE, async (err, decodedToken) => {
			if (err) {
				res.locals.user = null;
				res.cookies("jwt", "", { maxAge: 1 });
				next();
			} else {
				console.log("on chek ce token :", decodedToken.userId);
				Utilisateur.findById(decodedToken.userId, (err, docs) => {
					if (!err) res.status(200).json(docs);
					else console.log(" on a un souci : " + err);
				}).select("-mdp");
			}
		});
	} else {
		console.log("mauvais token");
		res.locals.user = null;
		return res.status(404).json({ error: "ta pas le droit frere" });
	}
};
module.exports.GetAllUsers = async (req, res) => {
	const users = await Utilisateur.find().select("-mdp");
	res.status(200).json(users);
};
module.exports.GetAllVehicules = async (req, res) => {
	const users = await Vehicule.find();
	res.status(200).json(users);
};
module.exports.GetFacturesUser = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Utilisateur.findOne({ id_User: req.body.id }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs.Factures);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.GetFactureUser = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Utilisateur.findOne({ id_User: req.body.id }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs.Factures[0]);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.GetVehiculesUser = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Utilisateur.findOne({ id_User: req.body.id }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs.Vehicules);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
module.exports.GetVehiculeUser = (req, res) => {
	console.log("On affiche le req : ", req.body);
	console.log("on va chercher :" + req.body.id);
	Utilisateur.findOne({ id_User: req.body.id }, (err, docs) => {
		if (!err) {
			console.log("on a trouver !! " + docs.id_User);
			res.status(200).json(docs.Vehicules[0]);
		} else console.log(" on a un souci : " + err);
	}).select("-mdp");
};
