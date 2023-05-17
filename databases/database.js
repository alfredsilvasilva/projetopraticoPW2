const sequelize =  require("sequelize")

const connection = new sequelize(
    'bd_blockbuster', 'root','',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql',
        timezone:'-3:00'
    }
)
module.exports =connection;