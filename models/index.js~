var path = require('path');


// Cargar ORM
var Sequelize = require('sequelize');

// Para usar en local BBDD SQLite:
//    DATABASE_URL = sqlite:///
//    DATABASE_STORAGE = quiz.sqlite
// Para usar en Heroku BBDD Postgres:
//    DATABASE_URL = postgres://user:passwd@host:port/database

var url, storage;

if (!process.env.DATABASE_URL) {
    url = "sqlite:///";
    storage = "quiz.sqlite";
} else {
    url = process.env.DATABASE_URL;
    storage = process.env.DATABASE_STORAGE || "";
}

var sequelize = new Sequelize(url, {storage: storage});



// Importar la definicion de la tabla Quiz de quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));



// Importar la definicion de la tabla Favourites de favourite.js
//
// Nota: Esto deberia ser una tabla JOIN y no un modelo, pero he tenido que
// crear un modelo para poder hacer queries que no funcionan en Sequelize
// con SQLite.
// Por ejemplo: Buscar todos los quizzes e incluir su relacion con favoritos,
// pero añadiendo solo los favoritos del usuario logeado. Esto requiere un
// LEFT OUTER JOIN para que incluya todos los quizzes aunque no tengan favoritos,
// y un INNER JOIN para que el array este vacio o solo contenga al usuario logeado.
// Para SQLite se genera una query SQL que no vale.
// Para Postgres se genera una query SQL diferente que si funciona.
// Por este motivo he creado un modelo Favourite para poder tener mayor control
// de las queries SQL que quiero realizar.
//



exports.Quiz = Quiz; // exportar definición de tabla Quiz

