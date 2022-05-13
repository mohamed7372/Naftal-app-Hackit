const router = require("express").Router();
//*********************************************************************************/
const Controller = require("../Controller/Station")
//*********************************************************************************/
const multer = require("multer");
const fs = require("fs");
//*********************************************************************************/
//
router.post("/CreerStation",Controller.CreerStation);
//
router.post("/GetStation",Controller.GetStation);
//
router.get("/GetAllStations",Controller.GetAllStations);
//
router.post("/ModifierNomStation",Controller.ModifierNomStation);
//
router.post("/ModifierStock",Controller.ModifierStock);
//
router.post("/ModifierAjouterEssence",Controller.ModifierAjouterEssence);
//
router.post("/ModifierAjouterGasoil",Controller.ModifierAjouterGasoil);
//
router.post("/ModifierAjouterGAZ",Controller.ModifierAjouterGAZ);
//
router.post("/ModifierNbrPompes",Controller.ModifierNbrPompes);
//
router.post("/AjouterAlaFileE",Controller.AjouterAlaFileE);
//
router.post("/FileAttenteG",Controller.FileAttenteG);
//
router.post("/FileAttenteGZZ",Controller.FileAttenteGZZ);
//
router.post("/SupprimerStation",Controller.SupprimerStation);


//*********************************************************************************************************************************************/
module.exports = router;
