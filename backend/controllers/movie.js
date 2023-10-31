const { mongo_1 } = require("./../util/database");
const { mongo_2 } = require("./../util/database");

const create_db1 = async (req, res, next) =>{
    await mongo_1.updateOne({ nome: req.body.nome }, { $setOnInsert: { nome: req.body.nome } }, { upsert: true });
    res.send();
};

const create_db2 = async (req, res, next) =>{
    await mongo_2.updateOne({ nome: req.body.nome }, { $setOnInsert: { nome: req.body.nome } }, { upsert: true });
    res.send();
};

//GET-ALL
const index = async (req, res, next) => {
    const mapa = new Map();
    console.log("la");
    await mongo_1.find().toArray().then(docs => docs.forEach(
    ({ nome }) => mapa.set(nome, { ...mapa.get(nome), nome, db1: true })
    ));
    await mongo_2.find().toArray().then(docs => docs.forEach(
    ({ nome }) => mapa.set(nome, { ...mapa.get(nome), nome, db2: true })
    ));
    const lista = [];
    mapa.forEach(data => lista.push(data));
    res.send(JSON.stringify(lista));
};


const remove_db1 = async (req, res, next) => {
    await mongo_1.deleteOne({ nome: req.body.nome });
    res.end();
};

const remove_db2 = async (req, res, next) => {
    await mongo_2.deleteOne({ nome: req.body.nome });
    res.end();
};

module.exports = {index, create_db1, create_db2, remove_db1, remove_db2 };