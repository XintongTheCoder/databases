const promisePool = require('../db').promisePool;
const Promise = require('bluebird');

module.exports = {
  getAll: function () {
    const queryString = 'SELECT * FROM users';
    return promisePool.query(queryString);
  },
  create: function (user) {
    const conform = (user) => {
      user.username = user.username || '';
      return user;
    };

    const conformedUser = conform(user);
    const queryString = 'INSERT INTO users (username) VALUES (?)'; // "+conformedUser,username+"
    const queryArgs = [conformedUser.username];
    return promisePool.query(queryString, queryArgs);
  },
};
