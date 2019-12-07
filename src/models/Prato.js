const mongoose = require('mongoose');

const PratosSchema = new mongoose.Schema({
  categoria: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Prato", PratosSchema);
