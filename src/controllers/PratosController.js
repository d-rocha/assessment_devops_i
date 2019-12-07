const Prato = require('../models/Prato');

module.exports = {
  async index(req, res) {
    const {
      name
    } = req.query;

    const pratos = await Prato.find({
      name: name
    });

    return res.json(pratos);
  },

  async store(req, res) {
    const {
      categoria

    } = req.body;

    const prato = await Prato.create({
      categoria: categoria
    });

    return res.json(prato);
  }
}
