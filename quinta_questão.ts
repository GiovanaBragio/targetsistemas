function invert(str: string) {
    let invertString = ""
    for(let i = str.length - 1; i >= 0; i--){
        invertString  += str[i];
    }
    console.log(invertString)
}

let input = prompt("Insira a string que deseja inverter") || ""
invert(input)
