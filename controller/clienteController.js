const express = require ('express');
const clienteModel = require('../model/clienteModel');
const { where} = require ('sequelize');
const cliente = require('../model/clienteModel');

const router = express.Router();

router.post('/cliente/inserir',(req, res)=>{
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
// Rota de Seleção

router.get("/clientes/selecionar",(req, res)=>{
    clienteModel.findAll().then((clientes)=>{
        res.json(clientes)
    })
})

//Rota de alteração clientes
router.put('/cliente/alterar',(req, res)=>{
    let id = req.body.id;
    let nome_cliente = req.body.nome_cliente;

    clienteModel.update({nome_cliente}, {where:{id}}).then(()=>{
        return res.status(200).json({erroStatus:false, mensagemStatus:"categoria alterada com sucesso !"})
    }).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true, mensagemStatus:error
            })
        }
    )

})


// Rota de exclusao
router.delete('/cliente/excluir',(req, res)=>{
    let id = req.body.id;
    console.log('id' + id )
    clienteModel.destroy(
        {where:{id}}
        ).then(
            ()=>{
                return res.status(201).json({erroStatus:false,
                mensagemStatus:"cliente excluido com sucesso "})

            }
    
    ).catch(
        (error)=>{
            return res.status(500).json({
                erroStatus:true, mensagemStatus:error
            })
        }
    )
})


module.exports = router;