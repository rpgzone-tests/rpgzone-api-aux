const router = require("express").Router();

const EmailController = require("../controllers/EmailController");
const SellController = require("../controllers/SellController");

router.post("/email", EmailController.sendMail);

router.post("/processar_pagamento", SellController.sellProductMercadoPago);

router.get("/payments/:id/:email/:description/:amount/:quantity", SellController.sellProductMercadoPagoSmart);

router.get("/payments/success", SellController.state.succes);
router.get("/payments/pending", SellController.state.pending);
router.get("/payments/failure", SellController.state.failure);

router.post("/buy/product/boleto", SellController.sellProductFirstWay);

router.post("/buy/product/creditcard", SellController.sellProductSecondWay);

module.exports = router;