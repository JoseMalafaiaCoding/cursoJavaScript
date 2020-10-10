let valores = [8, 1, 7, 4, 2, 9];
var string = '';
for (let i in valores) {
    string += valores[i] + ', ';
    
}
console.log(string);
console.log(valores.indexOf(9));