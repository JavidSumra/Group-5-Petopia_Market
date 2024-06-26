// Deps Import
import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import cors from 'cors';

// Routes Import
import userRoutes from './routes/User.routes.js';
import petRoutes from './routes/Pets.routes.js';

const app: Express = express();

// Incoming Request Body Limit
app.use(express.json({ limit: '18kb' }));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
);

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/pets', petRoutes);

app.get('/health', (_, res) => {
  res.send('Server is Runnning');
});

export default app;
