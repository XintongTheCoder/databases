var db = require('../db');

var Users = {
  _data: {},

  getAll: () => {
    return Object.values(Users._data);
  },

  create: () => {
    Users._data[user.user_id] = Users._conform(user);
  },

  _conform: (user) => {
    user.username = user.username || '';

    return user;
  },
};
module.exports = {
  getAll: function () {},
  create: function () {},
};
