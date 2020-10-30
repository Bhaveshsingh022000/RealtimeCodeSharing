const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/updateCode',userController.updateCode);
router.get('/',userController.getRoomName);

module.exports = router;