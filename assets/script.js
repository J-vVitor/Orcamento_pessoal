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

    validarDdos() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem('id')
        if (id === null) {
            localStorage.setItem('id', 0)

        }
    }


    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {

        let despesas = Array()

        let id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
            let despesa = JSON.parse(localStorage.getItem(i))
            console.log(despesa)

            if (despesa === null) {
                continue
            }

            despesas.push(despesa)
        }

        return despesas
    }

}


let bd = new Bd()

function cadastrarDespesas() {

    let ano = document.querySelector('#ano').value
    let mes = document.querySelector('#mes').value
    let dia = document.querySelector('#dia').value
    let tipo = document.querySelector('#tipo').value
    let descricao = document.querySelector('#descricao').value
    let valor = document.querySelector('#valor').value

    let despesas = new Despesas(ano, mes, dia, tipo, descricao, valor)


    if (despesas.validarDdos()) {
        bd.gravar(despesas)

        testeButton.valido()
    } else {
        testeButton.erro()
    }


}


class TesteButton {
    valido() {
        Swal.fire({
            icon: 'success',
            title: 'Novo Registro',
            text: 'Registro adicionado com sucesso!',
            showCloseButton: 'close'
        })
    }

    erro() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Existe campos obrigatórios que não foram preenchidos',
            showCloseButton: 'close'
        })
    }
}

let testeButton = new TesteButton()

// CONSULTA

function carregarTodasDespesas() {

   let despesa = bd.recuperarTodosRegistros()

   let tbodys = document.getElementById('tbodys')

   despesa.forEach(function(d){
    console.log(d)

    let linha = tbodys.insertRow()

    linha.insertCell(0).innerHTML = d.dia + '/' + d.mes + '/' + d.ano
    linha.insertCell(1).innerHTML = d.tipo
    linha.insertCell(2).innerHTML = d.descricao
    linha.insertCell(3).innerHTML = d.valor

   })
}








