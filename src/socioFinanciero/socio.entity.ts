import { Cuota } from "../cuota/cuota.entity";
import { SancionMonetaria } from "../sancionMonetaria/sancionMonetaria.entity";
import { baseEntity } from "../shared/baseEntity.entity";

export class SocioFinanciero extends baseEntity {
  constructor(
    public misCuotas: Cuota[] = [], // Si bien al finalizar el Alta socio debe tener 1 cuota, en el mientras tanto no tiene.
    public misSancionesMonetarias: SancionMonetaria[] = [],
    id: number, // No es opcional el ID porque lo crea el otro servicio.
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }
  saludar(): string {
    return `¡Hola, soy el socio con ID: ${this.id}!`;
  }
}
