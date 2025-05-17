import express from 'express';
import prospectsRoute from './routes/prospectsRoute.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'F1 Quant is up and running' });
});

app.use('/api/prospects', prospectsRoute);

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        error: err.message || 'Internal server error',
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
