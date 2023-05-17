const sequelize = require('sequelize')
const connection = require('../databases/database')

const cliente = connection.define(
    'tbl_cliente',
    {
        nome_cliente:{
            type:sequelize.STRING,
            allowNull:false
        }
    }
    
)
cliente.sync({force:true});
module.exports = cliente