const sequelize = require('sequelize');
const QueryTypes = require('@sequelize/core');
const config = require('../database/config/config.json');
const Sequelize = new sequelize(config.development);

async function getController(req,res){
    try{
        const result = await Sequelize.query(`SELECT * FROM employees`)
        res.status(201).send(result)
        
    }
    catch (e){
        console.log(e);
        res.status(500).send("Internal Server Error")
    }
}

module.exports = getController;