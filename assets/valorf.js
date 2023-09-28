let inputValor = document.getElementById('valor');

inputValor.addEventListener('keypress',() => {
    let inputLength = inputValor.value.length

    if(inputLength === 6){
        inputValor.value += ','
    }
})

function addMoeda(){
    inputValor.value += 'R$ '
}