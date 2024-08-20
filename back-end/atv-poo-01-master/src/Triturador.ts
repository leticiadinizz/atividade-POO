//Letícia Diniz
export class Triturador{

    private motor: string;
    private lamina: string;
    private material: string;
   
    public constructor(_motor: string, _lamina: string, _material: string){
        this.motor= _motor;
        this.lamina = _lamina;
        this.material = _material;
    }

    public getMotor(): string{
        return this.motor;
    }

    public setMotor (_motor: string):void{
        this.motor= _motor;
    }

    public getLamina(): string{
        return this.lamina;
    }
    public setLamina (_lamina: string):void{
        this.lamina = _lamina;
    }

    public getMaterial(): string{
        return this.material;
    }

    public setMaterial (_material: string):void{
        this.material = _material;
    }
    public triturar(): void{
        console.log(`Tome cuidado!! O motor esta afiado `);
    }
    public ligaDesliga(): void{
        console.log(`O Tritutador está ligado !! `);
    }
}
