var db = require('../db');

const Messages = {
  _data: {},

  getAll: () => {
    return Object.values(Messages._data);
  },

  create: (message) => {
    Messages._data[message.message_id] = Messages._conform(message);
  },

  _conform: (message) => {
    message.text = messages.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    message.campus = message.campus || 'rfs';
    message.createdAt = message.createdAt || '';
    message.updatedAt = message.updatedAt || '';
    message.userId = userId || '';
    return message;
  },
};

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function () {}, // a function which can be used to insert a message into the database
};
