var express = require ("express")
var router = express.Router()
//index is d default x eso no pongo /index
var controllers = require("../controllers")

router.get("/:resource", function(req, res, next){

    var resource = req.params.resource
    //elijo el controller según resource del index
    //por si hubiese más que solo ferias con los mismos métodos
    //dentro del controller así no tengo q duplicar códido
    var controller = controllers[resource] 

    //si el controller es null se metio un invalid resource
    if (controller == null){
        res.json({
            confirmation: "fail",
            message: "invalid resource request (la ruta esta pocha)" +resource
        })
    }
    controller.find(req.query, function(err,results){
        if (err){
            res.json({
                confirmation: "fail",
                message: err
            })
            return
        }
        res.json({
            confirmation: "yuhuuuuuu",
            results: results
        })
    })

 
})
router.get("/:resource/:id",function(req, res ,next){
    var resource = req.params.resource
    var id = req.params.id

    var controller = controllers[resource]
    //si el controller es null se metio un invalid resource
    if (controller == null){
        res.json({
            confirmation: "fail",
            message: "invalid resource request (la ruta esta pocha)" +resource
        })
    }
 
    controller.findById(id,function(err,result){
        if (err){
            res.json({
                confirmation: "fail",
                message:" not found beaaach¿"
            })
            return
        }
        res.json({
            confirmation: "found: " +id,
            results: result
        })
    })


})

router.post("/:resource", function(req, res, next){
    var resource = req.params.resource
    var controller = controllers[resource]
    //si el controller es null se metio un invalid resource
    if (controller == null){
        res.json({
            confirmation: "fail",
            message: "invalid resource request (la ruta esta pocha)" +resource
        })
    }
    
    controller.create(req.body,function(err,result){
        if (err){
            res.json({
                confirmation: "fail create",
                message: err
            })
            return
        }
        res.json({
            confirmation: "success create",
            results: result
        })
    })
    
})
router.delete("/:resource/:id", function(req, res, next){
    var resource = req.params.resource
    var id = req.params.id
    var controller = controllers[resource]
    //si el controller es null se metio un invalid resource
    if (controller == null){
        res.json({
            confirmation: "fail",
            message: "invalid resource request (la ruta esta pocha)" +resource
        })
    }
    
    controller.delete(id,function(err,result){
        if (err){
            res.json({
                confirmation: "fail",
                message: err
            })
            return
        }
        res.json({
            confirmation: "success",
            results: "se ha eliminado con exito" +id
        })
    })
    
})

module.exports = router