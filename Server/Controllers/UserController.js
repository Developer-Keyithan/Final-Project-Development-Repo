const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.SECRET_KEY;

const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: mobileNumber.mobileNumber }, JWT_SECRET, { expiresIn: '1h' })
};

const register = async (req, res) => {
    const { firstName, lastName, mobileNumber, password } = req.body;
    try {
        const user = await User.create({ firstName, lastName, mobileNumber, password });
        const token = generateToken(user);
        res.status(201).json({ user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(user);

        res.status(200).json({ message: "Login Succesfully", greet: `Welcome, ${user.userName}!`, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getUserByID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { register, login, getUserByID, updateUser, deleteUser }