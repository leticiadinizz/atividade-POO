//Letícia Diniz
import { Sapo } from './Sapo';

const sapo1 : Sapo = new Sapo ('Verde', 25, 'Buffos Regularis'); 

console.log(sapo1.getCor());
console.log(sapo1.getTamanho());
console.log(sapo1.getEspecie());
sapo1.pulo();
sapo1.esticarLingua();