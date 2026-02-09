import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { mockUser } from '../data/user.js';
import { JWT_SECRET, JWT_EXPIRES } from '../config.js';

export const login = async (req, res) => {
  const { username, password } = req.body;

  await new Promise(r => setTimeout(r, 800));


  if (!username || !password) {
    return res.status(400).json({
      message: 'Username and password required'
    });
  }

  // Usuario único en memoria
  if (username !== mockUser.username) {
    return res.status(401).json({
      message: 'Invalid credentials'
    });
  }

  const valid = await bcrypt.compare(password, mockUser.password);

  if (!valid) {
    return res.status(401).json({
      message: 'Invalid credentials'
    });
  }

  // Crear token
  const token = jwt.sign(
    {
      id: mockUser.id,
      username: mockUser.username,
      role: mockUser.role
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES }
  );

  res.json({
    token,
    user: {
      id: mockUser.id,
      username: mockUser.username,
      role: mockUser.role
    }
  });
};


