const express = require('express');
const app = express();
require('dotenv').config();
const PORT=process.env.PORT 
app.use(express.json());


const alquilerRoutes = require('./routes/alquilerRoutes');
const autosRoutes = require('./routes/autosRoutes');
const clientesRoutes = require('./routes/clientesRoutes');

app.use('/api', alquilerRoutes);
app.use('/api', autosRoutes);
app.use('/api', clientesRoutes);



app.listen(PORT, () => {
    console.log("Servidor Corriendo",PORT);
})

