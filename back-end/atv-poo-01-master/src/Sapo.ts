//Letícia Diniz
export class Sapo {
    private cor: string;
    private tamanho: number;
    private especie: string;
    
    public constructor(_cor: string, _tamanho: number, _especie: string){
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.especie = _especie;
    }

    public getCor(): string {
        return this.cor;
    }
    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }
    public getEspecie(): string {
        return this.especie;
    }
    public setSaldo(_especie : string): void{
        this.especie = _especie;
    }

    public pulo(): void{
        console.log(`${this.especie} está pulando`);
    }
    public esticarLingua(): void{
        console.log(`${this.especie} está esticando a língua`);
    }

}