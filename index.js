const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001; 
require("dotenv").config();


if (process.env.NODE_ENV === "production") {
    // Set static folder
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes  html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
    });
} else {
    app.use(express.static('public'));    
}

function sendEmail (sender) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
            }
        });
    
        const mail_configs = {
            from: sender.email,
            to: process.env.EMAIL,
            subject: sender.subject,
            text: sender.message
        }
        transporter.sendMail(mail_configs, function(error, info) {
            if(error) {
                console.log(error)
                return reject({message: 'an error occurred'})
            }
            return resolve({message: 'email sent'})
        })
    })
}

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cookieParser());

app.use(cors());

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/sendEmail', (req, res) => {
    console.log(req.body);
    sendEmail(req.body)
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})