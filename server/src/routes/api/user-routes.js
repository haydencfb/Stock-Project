import express from 'express';
// import { Request, Response } from 'express';
import { User } from '../../models/index.js';

const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req, res) => {
    try {
        const users = await User.findAll({
        attributes: { exclude: ['password'] }
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /users/:id - Get a user by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] }
        });
        if (user) {
        res.json(user);
        } else {
        res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /users - Create a new user
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await User.create({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT /users/:id - Update a user by id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (user) {
        user.username = username;
        user.password = password;
        await user.save();
        res.json(user);
        } else {
        res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE /users/:id - Delete a user by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
        } else {
        res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { router as userRouter };
