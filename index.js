import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use('/staff/authentication', authRoutes);

app.listen(PORT, () => {
  console.log(`Mock API auth corriendo en http://localhost:${PORT}`);
});
