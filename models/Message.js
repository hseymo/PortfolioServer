const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {}

Message.init({
    // add properites here, ex:
    name: {
        type: DataTypes.STRING,
    },
    email: {
         type: DataTypes.STRING,
    },
    message:{
        type:DataTypes.TEXT,
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'message', 
});

module.exports=Message