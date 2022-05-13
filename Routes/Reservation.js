const router = require("express").Router();
//*********************************************************************************/
const Controller = require("../Controller/Reservation");
//*********************************************************************************/
const multer = require("multer");
const fs = require("fs");
//*********************************************************************************/
//
router.post("/CreerReservation",Controller.CreerReservation);
//
router.post("/GetReservation",Controller.GetReservation);
//
router.get("/GetAllReservations",Controller.GetAllReservations);
//
router.post("/SupprimerReservation",Controller.SupprimerReservation);


//*********************************************************************************************************************************************/
module.exports = router;
