import StockRoutes from "./stock-routes.js";
import { Router } from "express";
import { userRouter } from "./user-routes.js";

const router = Router();

router.use("/users", userRouter);
router.use("/stock", StockRoutes);

export default router;
