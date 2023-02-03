import { homeController } from '../controller/HomeController';
import { Router } from "express";

const router: Router = Router()

//Routes
router.get("/", homeController.home);

export { router };