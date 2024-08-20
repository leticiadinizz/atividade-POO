//Letícia Diniz
import { Bicicleta } from './Bicicleta';

const bicicleta1 : Bicicleta = new Bicicleta ('Aro 26', 21, 'aço'); 

console.log(bicicleta1.getRodas());
console.log(bicicleta1.getTamanho());
console.log(bicicleta1.getMaterial());
bicicleta1.pedalar();
bicicleta1.freiar();