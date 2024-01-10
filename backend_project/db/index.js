const Sequelize = require("sequelize");

const sequelize =  new Sequelize("react_js", "root", "root", {
    dialect: "mysql",
    host: "::1",
   
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}