

const cifra = document.getElementById('seleciona');
const cesar = document.getElementById('cesar');
const base64 = document.getElementById('base64');


const decodificar = document.getElementById('decodificar');
const codificar = document.getElementById('codificar')

const textoFinal = document.getElementById('textoFinal');

//Codificando
codificar.addEventListener('click', () => {
    const textarea = document.getElementById('textoInicial').value; 
    let result =[];
    const chave = +document.getElementById('chave').value;
    let listaText = textarea.split('');
    console.log(chave)
    if (seleciona.value == 'cesar'){

   
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
    }

    else if (seleciona.value == 'base64'){ 
        textoFinal.innerText = btoa(textarea)
      }

    })



//Decodificando
decodificar.addEventListener('click', () => {
    const textarea = document.getElementById('textoInicial').value; 
    let result =[];
    const chave = +document.getElementById('chave').value;
    let listaText = textarea.split('');
    console.log(chave)
    
    if (seleciona.value == 'cesar'){

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
    }

    else if (seleciona.value == 'base64'){ 
        textoFinal.innerText = atob(textarea)
      }

    })





    // Verificadores para exibição

    
    let opCod = document.querySelector('#radioCodificar')
    let opDecod = document.querySelector('#radioDecodificar')

    opCod.addEventListener('click', () => {

        if(opCod.value == 'cod'){
            codificar.style.display = 'block'
            decodificar.style.display = 'none'

        }
    })
    
    opDecod.addEventListener('click', () => {
    
        if(opDecod.value == 'decod'){
            codificar.style.display = 'none'
            decodificar.style.display = 'block'
          
        }
    })

    const divchave = document.querySelector('#incrementoCesar')
    cifra.addEventListener('click', () => {
        if (seleciona.value == 'cesar'){
            divchave.style.display = 'block'
        }
        else if (seleciona.value == 'base64'){ 
            divchave.style.display = 'none'
        }
    })
