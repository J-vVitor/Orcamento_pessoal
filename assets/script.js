function teste() {
    var consulta = document.querySelector('#consulta');

    if (consulta.style.display == 'none') {
        consulta.style.display = 'block'
    } else {
        consulta.style.display = 'none'
    }
}

let valor = document.querySelector("#valor")

/*valor.addEventListener('keypress', () => {
    let inputLength = valor.value.length

    if(inputLength === 3){
        valor.value += ','
    }
})*/




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

        let id = JSON.parse(localStorage.getItem('id'))

        for (let i = 1; i <= id; i++) {
            let despesa = localStorage.getItem(i)

            despesas.push(despesa)
        }

        console.log(despesas)
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

function carregarTodasDespesas() {
    bd.recuperarTodosRegistros()
}

let resultado = document.querySelector('#lista_resultado')



