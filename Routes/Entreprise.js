const router = require("express").Router();
//*********************************************************************************/
const Controller = require("../Controller/Entreprise")
//*********************************************************************************/
const multer = require("multer");
const fs = require("fs");
//*********************************************************************************/
//
router.post("/CreerCompteEntreprise",Controller.CreerCompteEntreprise);
//
router.post("/ModifierNomEntreprise",Controller.ModifierNomEntreprise);
//
router.post("/SupprimerEntreprise",Controller.SupprimerEntreprise);
//
router.get("/GetAllEntreprise",Controller.GetAllEntreprise);
//
router.post("/GetEntreprise",Controller.GetEntreprise);
//
router.post("/GetChauffeursEntreprise",Controller.GetChauffeursEntreprise);
//
router.post("/GetCompteEntreprise",Controller.GetCompteEntreprise);
//*********************************************************************************************************************************************/
module.exports = router;
