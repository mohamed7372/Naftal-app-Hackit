const router = require("express").Router();
const Compte = require("../Routes/Compte");
const Entreprise = require("./Entreprise");
const Station = require("./Station");
const Facture = require("./Facture");
const Reservation = require("./Reservation");
//*********************************************************************************/

//TESTED
router.use('/Compte',Compte);
//TESTED
router.use('/Entreprise',Entreprise);
//TESTED
router.use('/Station',Station);
//TESTED
router.use('/Facture',Facture);
//TESTED
router.use('/Reservation',Reservation);
//*********************************************************************************************************************************************/
module.exports = router;
