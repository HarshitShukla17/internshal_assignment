import { Router } from "express";
import {login} from "../controllers/authcontroller.js";


const router = Router();

router.post("/",login)
export default router;