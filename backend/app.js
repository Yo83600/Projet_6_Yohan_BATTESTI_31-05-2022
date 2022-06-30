const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const userRoutes = require('./routes/user');
const saucesRoutes = require('./routes/sauces');

/* Connexion à la base de donnée MongoDB */
mongoose.connect(`mongodb+srv://${process.env.SECRET_USER}:${process.env.SECRET_PASSWORD}@${process.env.SECRET_DB}.k9gdodd.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/* Lancement du framework Express */
const app = express();

/* Middleware CORS - Ajout de headers à l'objet "response" */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

/* Rendre le dossier "images" statique */
app.use('/images', express.static(path.join(__dirname, 'images')));

/* lancement de helmet */
app.use(helmet());

/* Enregistrement des routes dans l'application */
app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes);

module.exports = app;