var Feria = require("../models/Feria")
module.exports = {
    find: function(params, callback){
        Feria.find(params, function(err, ferias){
            if (err){
                callback(err, null)
                return
            }
            callback(null, ferias)
        })

    },
    findById: function(id,callback){
        Feria.findById(id, function(err, feria){
            if (err){
                callback(err,null)
                return
            }
            callback(null,feria)
        })

    },
    create: function(params, callback){
        Feria.create(params, function(err, feria){
            if (err){
                callback(err,null)
                return
            }
            callback(null,feria)
        })
    },
    update: function(id, params, callback){
        Feria.findByIdAndUpdate(id,params,{new:true}, 
            function(err, feria){
                if (err){
                    callback(err,null)
                    return
                }
                callback(null,feria)
            })
    },

    delete: function(id, callback){
        Feria.findByIdAndRemove(id, function(err){
            if (err){
                callback(err,null)
                return
            }
            callback(null,null)
        })

    },
}