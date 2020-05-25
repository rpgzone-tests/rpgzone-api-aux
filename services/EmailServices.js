const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 587,
    secure : false,
    auth : {
        user : "letsgood56@gmail.com",
        pass : "caodeguarda13"
    }
});

module.exports = {
    add : {
        async email(req, res, next){
            const response = await transporter.sendMail({
                from : "Mateus Apoliário <letsgood56@gmail.com>",
                to : "mateusapolinario610@gmail.com",
                subject : "Eaí tudo joia !!! eu sou o Mateus e estou usando o nodemailer",
                text : "Olá eu estou gostando bastante do NodeMailer",
                html : "Eaí tudo joia !!! eu sou o Mateus e estou usando o nodemailer<a href='https://google.com'>Clique aqui</a>"
            }).catch(err => {
                console.log(err);
            });
            console.log(response);

            res.json({success : "deu certo"});
        },
    }
}