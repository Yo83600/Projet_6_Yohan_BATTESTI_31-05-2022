const express = require('express');
const router = express.Router();
const multer = require("../middleware/multer-config");

const sauceCrtl = require('../controllers/sauce');
const auth = require('../middleware/auth')

// différentes routes pour les sauces 

router.post('/', auth,multer, sauceCrtl.createSauce);

router.put('/:id',auth,multer, sauceCrtl.modifySauce);

router.delete('/:id',auth, sauceCrtl.deleteSauce);

router.get('/:id',auth, sauceCrtl.getOneSauce);

router.get('/',auth, sauceCrtl.getAllSauce);

router.post('/:id/like', auth, sauceCrtl.likeDislikeSauce);

module.exports = router;