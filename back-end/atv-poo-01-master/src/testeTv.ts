//Letícia Diniz
import { Tv } from './Tv';

const tv1 : Tv = new Tv ('Samsung', 65, 'Modo cinema'); 

console.log(tv1.getMarca());
console.log(tv1.getPolegadas());
console.log(tv1.getConfiguracaoImagem());
tv1.transmissaoImagem();
tv1.ajusteVolume();