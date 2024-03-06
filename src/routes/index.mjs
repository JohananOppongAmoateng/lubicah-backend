import { Router } from "express";
import reviewsRouter from "./reviews.mjs";
import orderRouter from "./order.mjs";
import authRouter from "./auth.mjs";
import menuItemRouter from "./menuitem.mjs";


const router = Router();

router.use(reviewsRouter);
router.use(orderRouter);
router.use(authRouter);
router.use(menuItemRouter);

export default router;

