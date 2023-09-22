function teste() {
    var consulta = document.querySelector('#consulta');

    if (consulta.style.display == 'none') {
        consulta.style.display = 'block'
    } else {
        consulta.style.display = 'none'
    }
}


class Despesas {
    constructor(ano, mes, dia, tipo, descricao, valor) {
            this.ano = ano
            this.mes = mes
            this.dia = dia
            this.tipo = tipo
            this.descricao = descricao
            this.valor = valor
    }
}

function cadastrarDespesas() {

    let ano = document.querySelector('#ano').value
    let mes = document.querySelector('#mes').value
    let dia = document.querySelector('#dia').value
    let tipo = document.querySelector('#tipo').value
    let descricao = document.querySelector('#descricao').value
    let valor = document.querySelector('#valor').value

    let despesas = new Despesas(ano, mes, dia, tipo, descricao, valor)

    gravar(despesas)

}

function gravar(d){
    localStorage.setItem('despesas',JSON.stringify(d))
}



