var express = require('express');
var router = express.Router();



var quizController = require('../controllers/quiz_controller');







//-----------------------------------------------------------

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('index');
});

// Pagina de creditos
router.get('/author', function (req, res, next) {
    res.render('author');
});
=======
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res, next){
res.render('author');});

router.get('/help', function(req, res, next){
res.render('help');});
>>>>>>> practica51


// Autoload de rutas que usen :quizId
router.param('quizId', quizController.load);
router.get('/quizzes/random_play', quizController.random_play);
router.get('/quizzes/random_check/:quizId(\\d+)', quizController.random_check);




// Definición de rutas de /quizzes
router.get('/quizzes',
    quizController.index);
router.get('/quizzes/:quizId(\\d+)',
    quizController.show);
router.get('/quizzes/new',
    quizController.new);
router.post('/quizzes',
    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',
    quizController.edit);
router.put('/quizzes/:quizId(\\d+)',
    quizController.update);
router.delete('/quizzes/:quizId(\\d+)',
    quizController.destroy);

router.get('/quizzes/:quizId(\\d+)/play',
    quizController.play);
router.get('/quizzes/:quizId(\\d+)/check',
    quizController.check);


router.get('/quizzes/:quizId(\\d+)/tips/new',
    sessionController.loginRequired,
    tipController.new);
router.post('/quizzes/:quizId(\\d+)/tips',
    sessionController.loginRequired,
    tipController.create);
router.put('/quizzes/:quizId(\\d+)/tips/:tipId(\\d+)/accept',
    sessionController.loginRequired,
    quizController.adminOrAuthorRequired,
    tipController.accept);
router.delete('/quizzes/:quizId(\\d+)/tips/:tipId(\\d+)',
    sessionController.loginRequired,
    tipController.destroy);

module.exports = router;
