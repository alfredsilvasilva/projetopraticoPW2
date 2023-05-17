const express = require ('express');
const clienteModel = require('../model/clienteModel');
const { where} = require ('sequelize');
const cliente = require('../model/clienteModel');

const Router = express.Router();

Router.post('/cliente/inserir',(req, res)=>{
    let {nome_cliente} = req.body;
    clienteModel.create({nome_cliente}).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false, mensagemStatus:"Cliente inserido com sucesso"
            })
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                erroStatus:true, 
                mensagemStatus:error
            })
        }
    )
})