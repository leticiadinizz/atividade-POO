//Letícia Diniz
import { Formiga } from './Formiga';

const formiga1 : Formiga = new Formiga ('Formiga Faraó',2, 'Polinização'); 

console.log(formiga1.getEspecie());
console.log(formiga1.getTamanho());
console.log(formiga1.getFuncao());
formiga1.transpotarObjetos();
formiga1.liberarFeromonios();