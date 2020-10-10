function parImp (num){
    if(num % 2 == 0){
        return 'par';
    }
    return 'ímpar';
}

let res = parImp(3);
console.log(res);