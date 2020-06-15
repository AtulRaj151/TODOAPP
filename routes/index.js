const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/create-task',homeController.createTask);
router.get('/check-task/:id',homeController.checkTask);





module.exports = router;