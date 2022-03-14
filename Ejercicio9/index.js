let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsancursus"
let contadorLetras = {}

for (let i = 0; i < par.length; i++) {
    if (contadorLetras[par[i]]==undefined){
        contadorLetras[par[i]] = 1
    } else {
        contadorLetras[par[i]]++
    }

}

console.log(contadorLetras);