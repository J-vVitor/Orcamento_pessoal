let inputValor = document.getElementById('valor');

inputValor.addEventListener('keypress',() => {
    let inputLength = inputValor.value.length

    if(inputLength === 3){
        inputValor.value += ','
    }
})