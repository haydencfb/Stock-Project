// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { User } = require('../models');

// router.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = await User.create({ username, password: hashedPassword });
//   res.json(user);
// });

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ where: { username } });
//   if (!user) return res.status(404).send('User not found');

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.status(401).send('Invalid credentials');

//   const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
//   res.json({ token });
// });

import { Router } from "express";
import authRoutes from "./auth-routes.js";
import apiRoutes from "./api/index.js";
import authenticateToken from "../middleware/auth.js";
const router = Router();
router.use("/auth", authRoutes);
router.use("/api", authenticateToken, apiRoutes);
export default router;

// module.exports = router;
