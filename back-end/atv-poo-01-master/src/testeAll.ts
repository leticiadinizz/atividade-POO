const teclado = require("prompt-sync")();
console.clear();

let enter : string = ``;
console.log(`Rodando testes`);
console.log(`Aperte enter`);

//SAPO
import { Sapo } from './Sapo';

const sapo1 : Sapo = new Sapo ('Verde', 25, 'Buffos Regularis'); 

console.log(``);
console.log(`------------------------------------------------------------`);
console.log(`Sapo`);
enter = teclado(``);
console.log(sapo1.getCor());
console.log(sapo1.getTamanho());
console.log(sapo1.getEspecie());
sapo1.pulo();
sapo1.esticarLingua();
console.log(`------------------------------------------------------------`);

//ESPADA
import { Espada } from './Espada';

const espada1 : Espada = new Espada (25, 'Afiada', 'Metal'); 

console.log(`Espada`);
enter = teclado(``);
console.log(espada1.getTamanho());
console.log(espada1.getLamina());
console.log(espada1.getMaterial());
espada1.atacar();
espada1.defesa();
console.log(`------------------------------------------------------------`);

//ESMALTE
import { Esmalte } from './Esmalte';

const esmalte1 : Esmalte = new Esmalte ('Vermelho', 'Simples', 25); 

console.log(`Esmalte`);
enter = teclado(``);
console.log(esmalte1.getCor());
console.log(esmalte1.getEmbalagem());
console.log(esmalte1.getQuantidade());
esmalte1.pintar();
esmalte1.protecao();
console.log(`------------------------------------------------------------`);

//BICICLETA
import { Bicicleta } from './Bicicleta';

const bicicleta1 : Bicicleta = new Bicicleta ('Aro 26', 21, 'aço'); 

console.log(`Bicicleta`);
enter = teclado(``);
console.log(bicicleta1.getRodas());
console.log(bicicleta1.getTamanho());
console.log(bicicleta1.getMaterial());
bicicleta1.pedalar();
bicicleta1.freiar();
console.log(`------------------------------------------------------------`);

//NAVIO 
import { Navio } from './Navio';

const  navio1 : Navio = new Navio ('Metal','Arroz', 3000); 

console.log(`Navio`);
enter = teclado(``);
console.log(navio1.getMaterial());
console.log(navio1.getCarga());
console.log(navio1.getPeso());
navio1.transportar();
navio1.locomover();
console.log(`------------------------------------------------------------`);

//ARVORE
import { Arvore } from './Arvore';

const arvore1 : Arvore = new Arvore ('Primavera', 15 , 'Verde clara'); 

console.log(`Arvore`);
enter = teclado(``);
console.log(arvore1.getFolhagem());
console.log(arvore1.getTamanho());
console.log(arvore1.getCor());
arvore1.liberarOxigenio();
arvore1.produzirFrutos();
console.log(`------------------------------------------------------------`);

//TRITURADOR
import { Triturador } from './Triturador';

const triturador1 : Triturador = new Triturador ('Qualidade', 'Afiado', 'Plastico')

console.log(`Triturador`);
enter = teclado(``);
console.log(triturador1.getMotor());
console.log(triturador1.getLamina());
console.log(triturador1.getMaterial());
triturador1.triturar();
triturador1.ligaDesliga();
console.log(`------------------------------------------------------------`);


//CAMERA
import { Camera } from './Camera';

const camera1 : Camera = new Camera ('Monofocais', 10, 'Plástico'); 

console.log(`Camera`);
enter = teclado(``);
console.log(camera1.getLente());
console.log(camera1.getConsumo());
console.log(camera1.getMaterial());
camera1.capturaImagem();
camera1.capturaAudio();
console.log(`------------------------------------------------------------`);

//AR CONDICIONADO
import { ArCondicionado } from './ArCondicionado';

const arcondiconado1 : ArCondicionado = new ArCondicionado ('Plástico','Evaporador', 25); 

console.log(`Ar Condicionado`);
enter = teclado(``);
console.log(arcondiconado1.getMaterial());
console.log(arcondiconado1.getConsumoEnergia());
console.log(arcondiconado1.getComponentesEletronicos());
arcondiconado1.resfriar();
arcondiconado1.ventilar();
console.log(`------------------------------------------------------------`);

//BEBEDOURO
import { Bebedouro } from './Bebedouro';

const bebedouro1 : Bebedouro = new Bebedouro (25, 16, 'Plástico'); 

console.log(`Bebedouro`);
enter = teclado(``);
console.log(bebedouro1.getArmazenamento());
console.log(bebedouro1.getTemperaturaAgua());
console.log(bebedouro1.getMaterial());
bebedouro1.liberarAgua();
bebedouro1.armazenarAgua();
console.log(`------------------------------------------------------------`);

//TELEVISÃO
import { Tv } from './Tv';

const tv1 : Tv = new Tv ('Samsung', 65, 'Modo cinema'); 

console.log(`Televisão`);
enter = teclado(``);
console.log(tv1.getMarca());
console.log(tv1.getPolegadas());
console.log(tv1.getConfiguracaoImagem());
tv1.transmissaoImagem();
tv1.ajusteVolume();
console.log(`------------------------------------------------------------`);

//GELADEIRA
import { Geladeira } from './Geladeira';

const geladeira1 : Geladeira = new Geladeira (400, 13, 30); 

console.log(`Geladeira`);
enter = teclado(``);
console.log(geladeira1.getCapacidade());
console.log(geladeira1.getTemperatura());
console.log(geladeira1.getConsumoEnergia());
geladeira1.ajustarTemperatura();
geladeira1.congelar();
console.log(`------------------------------------------------------------`);

//MICROONDAS
import { Microondas } from './Microondas';

const microondas1 : Microondas = new Microondas (25, 22, `LG` ); 

console.log(`Microondas`);
enter = teclado(``);
console.log(microondas1.getPotencia());
console.log(microondas1.getVolumeInterno());
console.log(microondas1.getMarca());
microondas1.aquecer();
microondas1.descongelamento();
console.log(`------------------------------------------------------------`);

//IMPRESSORA 3D
import { Impressora3D } from './Impressora3D';

const impressora3D1 : Impressora3D = new Impressora3D (250,'Creality', 3.4); 

console.log(`Impressora 3D`);
enter = teclado(``);
console.log(impressora3D1.getVolume());
console.log(impressora3D1.getMarca());
console.log(impressora3D1.getResolucao());
impressora3D1.imprimir();
impressora3D1.pausarImpressao();
console.log(`------------------------------------------------------------`);

//FORMIGA
import { Formiga } from './Formiga';

const formiga1 : Formiga = new Formiga ('Formiga Faraó',2, 'Polinização'); 

console.log(`Formiga`);
enter = teclado(``);
console.log(formiga1.getEspecie());
console.log(formiga1.getTamanho());
console.log(formiga1.getFuncao());
formiga1.transpotarObjetos();
formiga1.liberarFeromonios();
console.log(`------------------------------------------------------------`);