let amigo = {
    nome:'jose', 
    sexo: 'M', 
    peso: 85.4, 
    engordar(){
        return ++this.peso;
}};

console.log(amigo.engordar());
