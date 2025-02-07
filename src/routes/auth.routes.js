
import express from "express";
import {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/auth.controller.js";
import authenticateJWT from "../middleware/authenticate.JWT.js";

const router = express.Router(); 

router.post("/register", register);
router.post("/login", login);

// PROTECTED ROUTES (JWT token)
router.get("/users", authenticateJWT, getAllUsers); // ADMIN ONLY
router.get("/users/:id", authenticateJWT, getUserById);
router.put("/users/:id", authenticateJWT, updateUser);
router.delete("/users/:id", authenticateJWT, deleteUser);

export default router;