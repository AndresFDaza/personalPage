function ShowOption1(){
//esconde texto no requerido 
document.getElementById('Text-Option2').style.display="none"
document.getElementById('Text-Option3').style.display="none"

//muestra opcion del titulo
document.getElementById('Selection-Title').textContent='¿Qué hace?'

//muestra el texto requerido
document.getElementById('Text-Option1').style.display="block"

}

function ShowOption2(){
//esconde texto no requerido 
    document.getElementById('Text-Option1').style.display="none"
    document.getElementById('Text-Option3').style.display="none"

    //muestra opcion del titulo
document.getElementById('Selection-Title').textContent='¿Qué le gusta?'

//muestra el texto requerido
    document.getElementById('Text-Option2').style.display="block"

}

function ShowOption3(){
//esconde texto no requerido 
    document.getElementById('Text-Option1').style.display="none"
    document.getElementById('Text-Option2').style.display="none"

//muestra opcion del titulo
document.getElementById('Selection-Title').textContent='¿Qué quiere ser?'

//muestra el texto requerido
    document.getElementById('Text-Option3').style.display="block"

}

let Escribir = (cadena , elId ) =>{


    let arrFromString = cadena.split('')
    let i = 0;
    let printString = setInterval(
        function(){
        document.getElementById(elId).textContent += arrFromString[i]
        i++
        if (i === arrFromString.length) {
            clearInterval(printString)
        }
    }
    ,30)

    console.log('finalizó la funcion')

}

// let Escribir1