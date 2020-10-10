function fatorial(num){
    
    if(num == 1){
        return 1;
    }
    var fat = num * fatorial(num - 1);
    return fat;
    
}

console.log(fatorial(5));