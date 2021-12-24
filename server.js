const express = require('express');
const app = express();
const PORT = process.env.POPRT || 8080;

app.use(express.static(__dirname + '/dist/umbico'));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/umbico/index.html');
})

app.listen(PORT, () => {
    console.log('Servidor iniciado na pasta' + PORT)
});