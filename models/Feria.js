var mongoose = require ("mongoose")
var FeriaSchema = new mongoose.Schema({
    nombreFeria: {type: String, default :"feria"},
    fechaFeria: {type: String, default :"próximamente"},
    lugarFeria : {type: String, default :"ciudad/pueblo"},
    direccionFeria : {type: String, default :"calle donde encontrarte"},
    todoElGenero : {type: Boolean, default :false},
    cartelFeria: {type: String, default :"cartel.jpg"},
    urlFeria: {type: String, default :"http://feria...com"},
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model("FeriaSchema",FeriaSchema)