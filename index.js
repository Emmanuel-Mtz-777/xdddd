import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/staff/authentication', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock API auth corriendo en http://localhost:${PORT}`);
});
