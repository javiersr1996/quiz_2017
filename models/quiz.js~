// Definicion del modelo Quiz:

var quizzes = [
	{
		id:1,
		question: "Capital de Italia"
		answer: "Roma"
	},
	{
		id:2,
		question: "Capital de Francia"
		answer: "París"
	},
	{
		id:3,
		question: "Capital de España"
		answer: "Madrid"
	},
	{
		id:4,
		question: "Capital de Portugal"
		answer: "Lisboa"
	}];


var nextId= quizzes.length +1;

exports.create=function(quiz) {

	var quiz= {
		id: nextId++;
		question: (quiz.question || "").trim(),
		answer: (quiz.answer || "").trim()
	};

	quizzes.push(quiz);

	return quiz;
};


exports.update= function(quiz) {

	var index= quizzes.findIndex(function(q) {
		return quiz.id=== q.id;
	});

	if (index>= 0) {
		quizzes[index] = {
			id: quiz.id,
			question: (quiz.question || "").trim(),
			answer: (quiz.answer || "").trim()
		};
	}
};

exports.findAll = function() {
	return quizzes;
};

exports.findById = function(id) {
	
	return quizzes.find(function(quiz) {
		return quiz.id === id;
	});
};


exports.destroy= function(quiz) {
	var index = quizzes.findIndex(function(q) {
		return quiz.id === id;
	});

	if (index>= 0) {
		quizzes.splice(index,1);
	}
};

	





module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Quiz',
        {
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Falta Pregunta"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Falta Respuesta"}}
            }
        });
};
