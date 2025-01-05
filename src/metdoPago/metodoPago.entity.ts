import { baseEntity } from "../shared/baseEntity.entity";

export class MetodoPago extends baseEntity {
  constructor(
    public codigo: string,
    public activo: boolean = true,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }

  desactivar() {
    this.activo = false;
    this.updateTimestamp();
  }

  activar() {
    this.activo = true;
    this.updateTimestamp();
  }
}
