import { Router } from "express";
import { buscarSocios } from "./socio.controller.js";

export const socioRouter = Router();

socioRouter.get("/", buscarSocios);
