//leticia Diniz
import { Bebedouro } from './Bebedouro';

const bebedouro1 : Bebedouro = new Bebedouro (25, 16, 'Plástico'); 

console.log(bebedouro1.getArmazenamento());
console.log(bebedouro1.getTemperaturaAgua());
console.log(bebedouro1.getMaterial());
bebedouro1.liberarAgua();
bebedouro1.armazenarAgua();