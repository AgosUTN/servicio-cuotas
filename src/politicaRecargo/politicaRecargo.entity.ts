export class PoliticaRecargo {
  constructor(
    public diasHasta: number, // CP
    public porcentajeRecargo: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
// Sancion maxima en politicaBiblioteca
