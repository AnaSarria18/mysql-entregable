const { Autos } = require('../models');

/* Crear Auto */
exports.autosDisponibles = async (req, res) => {
    try {
        const autos = await Autos.findAll({
            where: { estadoDisponibilidad: 'si'}
        });
        res.json(autos);
    }catch (e) {
        res.json( { mensaje: "error al abtener autos disponibles"});
    }
};




exports.registrarAutos = async (req, res) => {
    const { marca, modelo, año, autosDisponibles } = req.body;
    const estadoDisponibilidad = autosDisponibles ? "si" : "no";

    console.log('Registrando auto:', { marca, modelo, año, estadoDisponibilidad });
    try {
        const auto = await Autos.create({ marca, modelo, año, estadoDisponibilidad });
        res.json(auto);
    } catch (e) {
        res.status(500).json({ mensaje: "Error al registrar el auto" });
    }
};


