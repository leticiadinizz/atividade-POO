//Letícia Diniz
export class Tv {
    private marca: string;
    private polegadas: number;
    private configuracaoImagem: string;

    public constructor(_marca: string, _polegadas: number, _configuracaoImagem: string){
        this.marca = _marca;
        this.polegadas = _polegadas;
        this.configuracaoImagem = _configuracaoImagem;
    }
    
    public getMarca(): string {
        return this.marca;
    }
    public setMarca(_marca: string): void{
        this.marca = _marca;
    }

    public getPolegadas(): number {
        return this.polegadas;
    }
    public setPolegadas(_polegadas: number): void{
        this.polegadas = _polegadas;
    }
    public getConfiguracaoImagem(): string {
        return this.configuracaoImagem;
    }
    public setConfiguracaoImagem(_configuracaoImagem : string): void{
        this.configuracaoImagem = _configuracaoImagem;
    }

    public transmissaoImagem(): void{
        console.log(`A TV está transmitindo um filme`);
    }
    public ajusteVolume(): void{
        console.log(`o volume está sendo ajustado`);
    }

}