import cors from 'cors';

const corsOptions = {
    origin: ['http://localhost:3000', process.env.FRONT_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;