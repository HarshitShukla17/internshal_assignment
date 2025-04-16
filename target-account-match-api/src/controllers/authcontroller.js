
import { readJSON } from '../utils/fileUtils.js';
import jwt from 'jsonwebtoken';




const login=async (req, res) => {
  const { username, password } = req.body;
  const users = await readJSON('data/users.json');

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({
    message: 'Login successful',
    token: token,
  });

}


export {login}

