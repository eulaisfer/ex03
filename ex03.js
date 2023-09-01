/*módulo 1*/

const zeus = {
    nome: 'zeus',
    raca: 'Vira-Lata',
    idade: 7,
    latir: function (){
        console.log('Late Muito!');
    },
}
zeus.latir();

/*módulo 2*/
let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
vetor[vetor.length - 1] = undefined;
console.log(vetor);

/*módulo 3*/
var frutas = new Array("Damasco", "Tomate", "Melancia", "Laranja", "Maçã");
console.log(frutas.join(" - "));

/*módulo 4*/

var times =  new Array("Cuiabá", "São Paulo", "Bahia");
console.log(typeof times);