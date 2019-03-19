const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./user');
const Jobb = require('./jobb');

const Bid = db.define('bid', {
  amount: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.STRING
  },
  jobb_id: {
    type: Sequelize.INTEGER,
    references: {
        model: Jobb,
        key: 'id'
      }
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
        model: User,
        key: 'id'
      }
  },
  new: {
    type: Sequelize.TINYINT
  }
});

Bid.belongsTo(Jobb, { foreignKey: "jobb_id" });
Bid.belongsTo(User, { foreignKey: "user_id" });

module.exports = Bid;
