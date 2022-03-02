import { Router } from "express";
import controller from "../controllers";

const router = Router();

router.post("/", controller.imageUpload);

export default router;
