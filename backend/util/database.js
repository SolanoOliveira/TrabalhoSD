const mongo = require("mongodb");

const mongo_1 = new mongo.MongoClient('mongodb://api:1234@db1:27017/').db('db1').collection('movies');

const mongo_2 = new mongo.MongoClient("mongodb://api:1234@db2:27017/").db('db2').collection('movies');

module.exports = { mongo_1, mongo_2};