//letícia Diniz
import { Triturador } from './Triturador';

const triturador1 : Triturador = new Triturador ('Motor', 'Liga', 'Desliga')

console.log(triturador1.getMotor());
console.log(triturador1.getLamina());
console.log(triturador1.getMaterial());
triturador1.triturar();
triturador1.ligaDesliga();
