function teste(){
    var consulta = document.querySelector('#consulta');

    if(consulta.style.display == 'none'){
        consulta.style.display = 'block'
    }else{
        consulta.style.display = 'none'
    }
}

function envio(){
    let ano = document.querySelector('#ano').value
    let mes = document.querySelector('#mes').value
    let dia = document.querySelector('#dia').value
    let tipo = document.querySelector('#tipo').value
    let descricao = document.querySelector('#descricao').value
    let valor = document.querySelector('#valor').value

    alert(valor)
  
}