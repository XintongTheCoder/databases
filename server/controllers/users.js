var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users
      .getAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.sendStatus(400);
      });
  },

  post: function (req, res) {
    models.users
      .create(req.body)
      .then((newUser) => {
        res.status(201).json(newUser);
      })
      .catch((err) => {
        res.sendStatus(400);
      });
  },
};
