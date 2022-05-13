const router = require("express").Router();
//*********************************************************************************/
const Controlleur = require("../Controller/Compte");
//*********************************************************************************/
const multer = require("multer");
const fs = require("fs");
//*********************************************************************************/
function createdate() {
	var date = Date.now();
	var d = new Date(date),
		month = "" + (d.getMonth() + 1),
		day = "" + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;
	return [year, month, day].join("");
}
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const path = `./upload/PDP`;
		fs.mkdirSync(path, { recursive: true });
		cb(null, path);
	},
	filename: function (req, file, cb) {
		cb(null, createdate() + "-" + file.originalname);
	},
});
const fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(new Error("Format non supporter"), false);
	}
};
const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 10,
	},
	fileFilter: fileFilter,
});
//
router.post("/CreerCompteUser",upload.array('img', 1),Controlleur.CreerCompteUser);
//
router.post("/CreerCompteAdminEnt",upload.array('img', 1),Controlleur.CreerCompteAdminEnt);
//
router.post("/CreerCompteAdminNaf",upload.array('img', 1),Controlleur.CreerCompteAdminNaf);
//
router.post("/SeConnecter",Controlleur.SeConnecter);
//
router.get("/Deconnection",Controlleur.Deconnection);
//
router.post("/ModifierUserName",Controlleur.ModifierUserName);
//
router.post("/ModifierMailUtilisateur",Controlleur.ModifierMailUtilisateur);
//
router.post("/Modifierpassword",Controlleur.Modifierpassword);
//
router.post("/ModifierNumeroTel",Controlleur.ModifierNumeroTel);
//
router.post("/AjoutVehicule",Controlleur.AjoutVehicule);
//
router.post("/EnleverVehicule",Controlleur.EnleverVehicule);
//
router.post("/SupprimerUser",Controlleur.SupprimeUser);
//
router.get("/GetCompte",Controlleur.GetCompteUser);
//
router.get("/GetAllUsers",Controlleur.GetAllUsers);
//
router.get("/GetAllVehicules",Controlleur.GetAllVehicules);
//
router.post("/GetCompte",Controlleur.GetCompte);
// 
router.post("/GetFacturesUser",Controlleur.GetFacturesUser);
// 
router.post("/GetFactureUser",Controlleur.GetFactureUser);
// 
router.post("/GetVehiculesUser",Controlleur.GetVehiculesUser);
// 
router.post("/GetVehiculeUser",Controlleur.GetVehiculeUser);




//*********************************************************************************************************************************************/
module.exports = router;
