import { Router } from "express";
import { getFruits } from "../Controller/Fruits.js";

const routes = Router();

routes.get("/api/v1/all", getFruits);

export default routes;
