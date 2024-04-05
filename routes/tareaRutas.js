const express = require('express');
const rutas = express.Router();
const TareaModel = require('../models/Tarea');

rutas.get('/', async (req, res) =>{
    try {
        const tareas = await TareaModel.find();
        console.log(tareas);
        res.json(tareas);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});

rutas.post('/agregar', async (req, res) =>{
    // console.log(req.body);
    const nuevaTarea = new TareaModel({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        prioridad: req.body.prioridad
    });
    try {
        const guardarTarea = await nuevaTarea.save();
        res.status(201).json(guardarTarea);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

rutas.put('/editar/:id', async (req, res) =>{
        
    try {
        const actualizarTarea = await TareaModel.findByIdAndUpdate(req.params.id, req.body, { new: true});
        
        res.status(201).json(actualizarTarea);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

rutas.delete('/eliminar/:id', async (req, res) =>{
    try {
        const eliminarTarea = await TareaModel.findByIdAndDelete(req.params.id);
        res.json({mensaje: 'Tarea eliminada correctamente'});
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

//Consultas
//Con prioridad 5
rutas.get('/tareasPrioridad:id', async (req, res) =>{
    try {
        const tareas = await TareaModel.find();
        console.log(tareas);
        res.json(tareas);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});

module.exports = rutas;
