//Importar o express
const express = ('express');
//Iniciar o express

const app = express();
// NOme da pasta no dist que sera feito o build

const appName = '1bico';
// local onde o build ira gerar os arquivos
const outputPath = `${__dirname}/dist/${appName}`;

// seta o diretorio de build para servir o conteudo Angular
app.use(express.static(outputPath));
//redirecionar qualquer para o index.html
app.get('/*', (req, res) => {
    res.sendFile(`${outputPath}/index.html`);
});
//Ouvir a porta que o heroku disponibilizar
app.listen(process.env.PORT);
