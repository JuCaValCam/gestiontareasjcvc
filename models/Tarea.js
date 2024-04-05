const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    titulo: String,
    description : String,
    prioridad : Number,
})

const TareaModel =mongoose.model('Tarea',tareaSchema,'tarea');
module.exports = TareaModel;