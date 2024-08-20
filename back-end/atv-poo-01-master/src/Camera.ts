//letícia Diniz
export class Camera {
    private lente: string;
    private consumo: number;
    private material: string;
    
    public constructor(_lente: string, _consumo: number, _material: string){
        this.lente = _lente;
        this.consumo = _consumo;
        this.material = _material;
    }
   
    public getLente(): string {
        return this.lente;
    }
    public setLente(_lente: string): void{
        this.lente = _lente;
    }

    public getConsumo(): number {
        return this.consumo;
    }
    public setConsumo(_consumo: number): void{
        this.consumo = _consumo;
    }
    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material : string): void{
        this.material = _material;
    }

    public capturaImagem(): void{
        console.log(`A imagem está sendo capturada`);
    }
    public capturaAudio(): void{
        console.log(`O aúdio foi capturado na filmagem`);
    }

}