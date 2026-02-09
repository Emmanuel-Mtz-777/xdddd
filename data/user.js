import bcrypt from 'bcrypt';

const passwordPlain = '123456';
const hash = await bcrypt.hash(passwordPlain, 10);

export const mockUser = {
  id: 1,
  username: 'prueba',
  password: hash,   
  role: 'staff'
};
