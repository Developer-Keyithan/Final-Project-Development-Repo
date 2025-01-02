const express = require('express')
const { register, login, getUserByID, updateUser, deleteUser } = require('../Controllers/UserController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserByID);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;