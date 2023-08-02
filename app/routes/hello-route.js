const router = require('express').Router();
const helloController = require('../controllers/hello-controller');

//defining route
router.get('/', helloController.hello);

module.exports = router;
