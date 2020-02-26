const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


/**
 * USERS
 */
router.get('/users', UserController.getUsers);

router.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    let data = {
      message: 'Test 8 iz containera!!!'
    };
    res.send(JSON.stringify(data, null, 2));
});


module.exports = router;