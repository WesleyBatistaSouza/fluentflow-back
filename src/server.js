import express from "express";
import { syncDatabase } from "./config/db.js";
import corsMiddleware from "./middleware/cors.middleware.js";
import authRoutes from "./routes/auth.routes.js"
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(corsMiddleware);
app.use(express.json());

app.use('/api/auth', authRoutes)

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await syncDatabase();
});

export default app;
