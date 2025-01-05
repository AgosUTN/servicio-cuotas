import { Request, Response, NextFunction } from "express";
import { socioRepository } from "./socio.repository.js";
const repository = new socioRepository();

export async function buscarSocios(req: Request, res: Response) {
  try {
    return res.status(200).json({ data: await repository.findAll(false) });
  } catch (error: any) {
    return res.status(500).json({ message: "ERROR INTERNO", error: error });
  }
}
