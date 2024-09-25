const { Clientes } = require('../models');

/* Crear Cliente */
exports.crearCliente = async (req, res) => {
    const { nombre, correoElectronico, numeroLicencia } = req.body;
    try {
        const cliente = await Clientes.create({ nombre, correoElectronico, numeroLicencia });
        res.json(cliente);
    } catch (e) {
        res.status(500).json({ mensaje: "Error al crear cliente" });
    }
};


/* Ver Clientes */
exports.verClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll();
        res.json(clientes);
    } catch (e) {
        res.status(500).json({ mensaje: "Error al obtener los clientes" });
    }
};
