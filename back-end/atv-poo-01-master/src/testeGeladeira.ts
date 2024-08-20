//Letícia Diniz
import { Geladeira } from './Geladeira';

const geladeira1 : Geladeira = new Geladeira (400, 13, 30); 

console.log(geladeira1.getCapacidade());
console.log(geladeira1.getTemperatura());
console.log(geladeira1.getConsumoEnergia());
geladeira1.ajustarTemperatura();
geladeira1.congelar();