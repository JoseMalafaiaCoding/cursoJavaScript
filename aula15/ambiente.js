let num = [5, 4, 8, 2, 9, 100];
console.log(typeof num[0]);
num.push(0);
num.sort((a,b) => a-b);
for(var i = 0; i < num.length; i++){
    console.log(num[i]);
}
