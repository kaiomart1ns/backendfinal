const express = require('express');
const Evento = require('../models/Evento');
const router = express.Router();

// Criar um evento
router.post('/eventos', async (req, res) => {
    try {
        const evento = await Evento.create(req.body);
        res.status(201).json({
            message: 'Evento criado com sucesso',
            evento
        });
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar evento', details: error.message });
    }
});

// Listar todos os eventos
router.get('/eventos', async (req, res) => {
    try {
        const eventos = await Evento.findAll();
        res.json({
            message: 'Eventos recuperados com sucesso',
            eventos
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar eventos', details: error.message });
    }
});

// Buscar um evento por ID
router.get('/eventos/:id', async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id);
        if (evento) {
            res.json({
                message: 'Evento encontrado com sucesso',
                evento
            });
        } else {
            res.status(404).json({ error: 'Evento não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar evento', details: error.message });
    }
});

// Atualizar um evento
router.put('/eventos/:id', async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id);
        if (evento) {
            await evento.update(req.body);
            res.json({
                message: 'Evento atualizado com sucesso',
                evento
            });
        } else {
            res.status(404).json({ error: 'Evento não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar evento', details: error.message });
    }
});

// Excluir um evento
router.delete('/eventos/:id', async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id);
        if (evento) {
            await evento.destroy();
            res.json({
                message: 'Evento excluído com sucesso',
                eventoId: req.params.id
            });
        } else {
            res.status(404).json({ error: 'Evento não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir evento', details: error.message });
    }
});

module.exports = router;