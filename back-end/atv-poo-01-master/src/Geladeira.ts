//Letícia Diniz
export class Geladeira {
    private capacidade: number;
    private temperatura: number;
    private consumoEnergia: number;
    
    public constructor(_capacidade: number, _temperatura: number, _consumoEnergia: number){
        this.capacidade = _capacidade;
        this.temperatura = _temperatura;
        this.consumoEnergia = _consumoEnergia;
    }
  
    public getCapacidade(): number {
        return this.capacidade;
    }
    public setCapacidade(_capacidade: number): void{
        this.capacidade = _capacidade;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }
    public setTemperatura(_temperatura: number): void{
        this.temperatura = _temperatura;
    }
    public getConsumoEnergia(): number {
        return this.consumoEnergia;
    }
    public setConsumoEnergia(_consumoEnergia : number): void{
        this.consumoEnergia = _consumoEnergia;
    }

    public ajustarTemperatura(): void{
        console.log(`Ajustando o termostato`);
    }
    public congelar(): void{
        console.log(`Colocando a carne no congelador`);
    }

}