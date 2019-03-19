const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./user');

const Jobb = db.define('jobb', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  },
  owner_id: {
    type: Sequelize.INTEGER,
    references: {
        model: User,
        key: 'id'
    }
  }
});

Jobb.belongsTo(User, { foreignKey: "owner_id" });

module.exports = Jobb;
