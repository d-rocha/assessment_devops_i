const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
  "mongodb+srv://scrat:scrat@defaultcluster-1ck2o.mongodb.net/restaurants?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3000);
