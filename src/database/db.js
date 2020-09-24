const Database = require('sqlite-async')

function execute(db) {
    //criar tabelas do Banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS car (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo TEXT,
            marca TEXT,
            modelo TEXT,
            versao TEXT,
            ano INTEGER,
            km INTEGER,
            cor TEXT,
            preco INTEGER,
            fotos TEXT,
            msg TEXT,
            alarme TEXT,
            som TEXT,
            airbag TEXT,
            arcondic TEXT,
            travaeletr TEXT,
            vidreletr TEXT,
            direcaohidr TEXT
        );
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            senha TEXT
        );
    `)
}


module.exports =  Database.open (__dirname + '/database.sqlite').then(execute)