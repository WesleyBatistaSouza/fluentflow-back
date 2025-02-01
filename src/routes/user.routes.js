import { Router } from "express";
import { register, login, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/Auth.controller.js";
// import UserController from "../controllers/User.controller.js";

const router = Router();

// Autenticação
router.post("/register", register);
router.post("/login", login);

// Rotas de usuários
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
