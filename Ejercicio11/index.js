
var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
const mostrarMix = () =>{
    for (let i = 0; i < 3; i++) {
        console.log(mix[i]);   
    }
    //mostrando array desestructurada
    let arrayMix = mix[3]
    console.log(arrayMix[0])
    console.log(arrayMix[1])
    //el resto del array
    for (let i = 4; i < 6; i++) {
        console.log(mix[i]);
    }
    //el objeto
    console.log(mix[6].name)
}

mostrarMix()