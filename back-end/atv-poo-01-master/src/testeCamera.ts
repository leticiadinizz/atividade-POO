//Leticia Diniz
import { Camera } from './Camera';

const camera1 : Camera = new Camera ('Monofocais', 10, 'Plástico'); 

console.log(camera1.getLente());
console.log(camera1.getConsumo());
console.log(camera1.getMaterial());
camera1.capturaImagem();
camera1.capturaAudio();