const promisePool = require('../db').promisePool;
const Promise = require('bluebird');

module.exports = {
  // a function which produces all the messages
  getAll: function () {
    const queryString =
      'SELECT messages.id, messages.msg, ,messages.roomname, messages.campus, \
                         messages.created_at, messages.github_handle, messages.updated_at, users.username \
                         FROM messages left outer join users on (messages.user_id = users.id) \
                         order by messages.if desc';
    return promisePool.query(queryString);
  },

  // a function which can be used to insert a message into the database
  create: function (message) {
    const conform = (message) => {
      message.text = message.text || '';
      message.username = message.username || '';
      message.roomname = message.roomname || '';
      message.campus = message.campus || '';
      message.githubHandle = message.githubHandle || '';
      message.createdAt = message.createdAt || '';
      message.updatedAt = message.updatedAt || '';
      message.username = message.username || '';

      return message;
    };

    const conformedMsg = conform(message);
    const queryString =
      'INSERT INTO messages (msg, roomname, campus, created_at, github_handle, updated_at, user_id) \
       VALUES (?, ?, ?, ?, ?, ?, (SELECT id FROM users WHERE username = ? limit 1))';
    const queryArgs = [
      conformedMsg.text,
      conformedMsg.roomname,
      conformedMsg.campus,
      conformedMsg.createdAt,
      conformedMsg.githubHandle,
      conformedMsg.updatedAt,
      conformedMsg.username,
    ];

    return promisePool.query(queryString, queryArgs);
  },
};
