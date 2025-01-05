import { pool } from "../shared/db/conn.js";
import { Repository } from "../shared/repository.js";
import { SocioFinanciero } from "./socio.entity.js";

export class socioRepository implements Repository<SocioFinanciero> {
  public async findAll(
    hydrate: boolean
  ): Promise<SocioFinanciero[] | undefined> {
    const [sociosF] = await pool.query("select * from sociosFinancieros");
    return sociosF as SocioFinanciero[];
  }
  public async findOne(item: {
    id: string;
  }): Promise<SocioFinanciero | undefined> {
    throw new Error("Not implemented");
  }
  public async update(
    id: string,
    item: SocioFinanciero
  ): Promise<SocioFinanciero | undefined> {
    throw new Error("Not implemented");
  }
  public async add(
    item: SocioFinanciero
  ): Promise<SocioFinanciero | undefined> {
    throw new Error("Not implemented");
  }
  public async delete(item: {
    id: string;
  }): Promise<SocioFinanciero | undefined> {
    throw new Error("Not implemented");
  }
}
/*
export class socioRepository implements Repository<Socio> {
  public async findAll(): Promise<Socio[] | undefined> {
    throw new Error("Not implemented");
  }
  public async findOne(item: { id: string }): Promise<Socio | undefined> {
    throw new Error("Not implemented");
  }
  public async update(id: string, item: Socio): Promise<Socio | undefined> {
    throw new Error("Not implemented");
  }
  public async add(item: Socio): Promise<Socio | undefined> {
    throw new Error("Not implemented");
  }
  public async delete(item: { id: string }): Promise<Socio | undefined> {
    throw new Error("Not implemented");
  }
}
*/
