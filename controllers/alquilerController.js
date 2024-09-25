const { Alquiler, Clientes, Autos } = require('../models');

exports.crearArquiler = async (req, res) => {
    const { clienteId,  autoId,  fechaInicio,  fechaFin  } = req.body;
    try {
        const auto = await Autos.findByPk(autoId);
        if (auto && auto.estadoDisponibilidad === 'si') {
            const alquiler = await Alquiler.create({
                clienteId,
                autoId,
                fechaInicio,
                fechaFin
            });

            await auto.update({ estadoDisponibilidad: 'no'});
            res.json(alquiler);
        } else {
            res.status(400).json({ mensaje: 'Auto no disponible o no encontrado' });
        }
    }catch (e) {
        res.json({ mensaje:"error al registrar el alquiler"});
    }
};


exports.historialAlquiler = async (req, res) => {
    try {
        const alquileres = await Alquiler.findAll({
            include: [
                { model: Clientes,
                  as:'clientes', 
                  attributes: ['nombre', 'correoElectronico', 'numeroLicencia'] },
                { model: Autos,
                  as: 'autos',
                  attributes: ['marca', 'modelo', 'año']}
            ]
        });
        res.json(alquileres);
    } catch (e) {
        res.json({mensaje: "error al obtener el historial del alquiler"});
    }
};

