const express = require('express');
const router = express.Router();
const rateLimit = require("express-rate-limit");

const userCtrl = require('../controllers/user');
const checkPassword = require('../middleware/check-password');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
//

// limite le nombre de requete
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure window
  max: 5, // blocker après 5 requete
  message:
    "trop de compte créér avec cette ip, essayer dans 1 heure",
});

router.post('/signup',checkPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;