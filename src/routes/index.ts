import express, { Router } from "express";
import { authMiddleware } from "../middlewares";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";

const router: Router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", authMiddleware.jwtTokenValidation, userRoutes);

export default router;
