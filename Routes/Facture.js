const router = require("express").Router();
//*********************************************************************************/
const Controller = require("../Controller/Facture");
//*********************************************************************************/
const multer = require("multer");
const fs = require("fs");
//*********************************************************************************/
//
router.post("/CreerFacture",Controller.CreerFacture);
//
router.post("/GetFacture",Controller.GetFacture);
//
router.get("/GetAllFactures",Controller.GetAllFactures);
//
router.post("/SupprimerFacture",Controller.SupprimerFacture);

//*********************************************************************************************************************************************/
module.exports = router;
