
const EmailServices = require("../services/EmailServices");

module.exports = {
    sendMail(req, res, next){
        EmailServices.add.email(req, res, next);
    }
}