const express = require("express");
const router = require("./router/router");
const { mongo_1 } = require("./util/database");
const { mongo_2 } = require("./util/database");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

//app.use("/webfonts", express.static(`${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`));
app.use(express.json({ type: 'application/json' }));

app.use(express.urlencoded({extended: false}));

app.use(router);

/*app.get("/", async function (req, res) {//! Listar Tarefas
  const mapa = new Map();
  await mongo_1.find().toArray().then(docs => docs.forEach(
    ({ nome }) => mapa.set(nome, { ...mapa.get(nome), nome, db2: true })
  ));
  await mongo_2.find().toArray().then(docs => docs.forEach(
    ({ nome }) => mapa.set(nome, { ...mapa.get(nome), nome, db2: true })
  ));
  const lista = [];
  mapa.forEach(data => lista.push(data));
  res.send(JSON.stringify(lista));
});*/

(async () => {
    try {
      /*await sequelize.sync(
        { force: false} //Reset db every time
      );*/
      await mongo_1.findOne().then(() => console.log('DB1: MongoDB conectado'));
      await mongo_2.findOne().then(() => console.log('DB2: MongoDB conectado'));
      app.listen(PORT, function(){
        console.log(`${PORT}`);
      }); //DEF in docker.compose.yml
    } catch (error) {
      console.log(error);
    }
  })();