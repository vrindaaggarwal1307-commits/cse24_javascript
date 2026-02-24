const sym1 = Symbol(4);
console.log(sym1);

const sym2 = Symbol(4);
console.log(sym2);

if(sym1==sym2){
console.log("true");
}

else{
    console.log("false") //because each symbol is unique 
}

