const express = require('express');
const router = express.Router();
const postController = require('./controllers/postController.js');
const getController = require('./controllers/getController.js');
const updateController = require('./controllers/updateController')
const deleteController = require('./controllers/deleteController')


router.post('/addEmployee',postController);
router.get('/getEmployee',getController);
router.put('/updateEmployee',updateController);
router.delete('/deleteEmployee',deleteController);

module.exports = router;