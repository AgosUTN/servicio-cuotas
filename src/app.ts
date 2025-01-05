import express, { Request, Response } from "express";
import { socioRouter } from "./socioFinanciero/socio.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/servicioCuotas/sociosFinancieros", socioRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Servicio-cuotas en linea");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
