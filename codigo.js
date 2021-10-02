

const cifra = document.getElementById('seleciona');
const cesar = document.getElementById('cesar');
const base64 = document.getElementById('base64');

const decodificar = document.getElementById('decodificar');

const textoFinal = document.getElementById('textoFinal');

//Codificando
document.getElementById('codificar').addEventListener('click', () => {

    const textarea = document.getElementById('textoInicial').value; 
    let result =[];
    const chave = +document.getElementById('chave').value;
    let listaText = textarea.split('');
    console.log(chave)
    
    for (let i=0; i< listaText.length; i++){
        if(listaText[i].charCodeAt() >=65 && listaText[i].charCodeAt() <= 90 ){
            let str = String.fromCharCode((((listaText[i].charCodeAt() - 65) + chave) % 26) + 65)
            result.push(str)
            console.log('if do for')
        }
        else if(listaText[i].charCodeAt() >=97 && listaText[i].charCodeAt() <= 122 ){
            let str = String.fromCharCode((((listaText[i].charCodeAt() - 97) + chave) % 26 ) + 97)
            result.push(str)
            console.log('else if do for')
        }

        else {
            result.push(listaText[i])
            console.log('else do for')
        }
        }
    
    console.log(result)
    textoFinal.value = result.join('');
    
    })

//Decodificando
document.getElementById('decodificar').addEventListener('click', () => {

    const textarea = document.getElementById('textoInicial').value; 
    let result =[];
    const chave = +document.getElementById('chave').value;
    let listaText = textarea.split('');
    console.log(chave)
    
    for (let i=0; i< listaText.length; i++){
        if(listaText[i].charCodeAt() >=65 && listaText[i].charCodeAt() <= 90 ){
            let str = String.fromCharCode((((listaText[i].charCodeAt() - 90 )- chave) % 26) + 90)
            result.push(str)
            console.log('if do for')
        }
        else if(listaText[i].charCodeAt() >=97 && listaText[i].charCodeAt() <= 122 ){
            let str = String.fromCharCode((((listaText[i].charCodeAt() - 122) - chave) % 26) + 122)
            result.push(str)
            console.log('if do for')
        }

        else {
            result.push(listaText[i])
            console.log('else do for')
        }
        }
    
    console.log(result)
    textoFinal.value = result.join('');
    
    })



// //codificar base64
// function cod64(){
//     let base64 = btoa(receiveData)

//     return base64
// }
// //decodificar base64
// function decod64(){
//     let base64 = atob(receiveData)

//     return base64
// }


