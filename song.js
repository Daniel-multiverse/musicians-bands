const {Sequelize, sequelize} = require('./db');

let Song = sequelize.define("Song", {
    title: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.NUMBER,
      }
})