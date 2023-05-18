const sequelize = require('sequelize')
const connection = require('../databases/database')

const filme = connection.define(
    'tbl_filme',
    {
        nome_filme:{
            type:sequelize.STRING,
            allowNull:false
        }
    }
    
)
cliente.sync({force:true});
module.exports = filme