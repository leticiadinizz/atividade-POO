//letícia Diniz
export class Formiga {
    private especie: string;
    private tamanho: number;
    private funcao: string;
    
    public constructor(_especie: string, _tamanho: number, _funcao: string){
        this.especie = _especie;
        this.tamanho = _tamanho;
        this.funcao = _funcao;
    }
  
    public getEspecie(): string {
        return this.especie;
    }
    public setEspecie(_especie: string): void{
        this.especie = _especie;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }
    public getFuncao(): string {
        return this.funcao;
    }
    public setFuncao(_funcao : string): void{
        this.funcao = _funcao;
    }

    public transpotarObjetos(): void{
        console.log(`A ${this.especie} esta levando uma folha`);
    }
    public liberarFeromonios(): void{
        console.log(`A ${this.especie} está liberando feromônio.`);
    }

}