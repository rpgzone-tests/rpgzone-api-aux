const SellServices = require("../services/SellServices");
const { callbacks } = SellServices;

module.exports = {
    sellProductFirstWay(req, res, next){
        const { purchase } = SellServices;
        purchase.byBoleto(req, res, next);
    },
    sellProductSecondWay(req, res, next){
        const { purchase } = SellServices;
        purchase.byCreditCard(req, res, next);
    },
    sellProductMercadoPago(req, res, next){
        const { purchase_mercado_pago } = SellServices;
        purchase_mercado_pago.byApi.byCreditCard(req, res, next);
    },
    sellProductMercadoPagoSmart(req, res, next){
        const { purchase_mercado_pago } = SellServices;
        purchase_mercado_pago.bySmart.bySmartCheckout(req, res, next);
    },
    state : {
        async succes (req, res, next) {
            callbacks.paymentSuccess(req, res, next);
        },
        async pending (req, res, next) {
            callbacks.paymentPending(req, res, next);
        },
        async failure (req, res, next) {
            callbacks.paymentFailure(req, res, next);
        }
    },
    
}