const btnsSomaSubtracao = document.querySelectorAll("[data-controle]") //Lista com todos os botões de soma e subtração
const estatistica = document.querySelectorAll("[data-estatistica]") //Lista com as estatísticas
const btnProducao = document.getElementById("producao")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

btnsSomaSubtracao.forEach( (botaoIndividual) => {
    botaoIndividual.addEventListener("click", (evento) => {
        evento.preventDefault()
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(sinalOperacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(sinalOperacao === "+") {
        peca.value = parseInt(peca.value) + 1
    } else if (sinalOperacao === "-" && peca.value > 0){
        peca.value = parseInt(peca.value) - 1
    }
}

btnProducao.addEventListener("click", (e)=>{
    e.preventDefault()
    atualizaDados()
})

function atualizaDados(){
    const qtsPecas = [...document.querySelectorAll("[data-contador]")] //valor da quantidade de peças
    const itemPeca = [...document.getElementsByClassName("peca-titulo")] //nome da peça

    let forcaPeca = 0
    let poderPeca = 0
    let energiaPeca = 0
    let velocidadePeca = 0

    for(i=0; i < itemPeca.length; i++){
        const nomePeca = itemPeca[i].dataset.peca //nome da peça
        const qtsPeca = qtsPecas[i].value
        const {forca, poder, energia, velocidade} = pecas[nomePeca] //@s chaves = atribuição via desestruturação

        forcaPeca += forca * qtsPeca
        poderPeca += poder * qtsPeca
        energiaPeca += energia * qtsPeca
        velocidadePeca += velocidade * qtsPeca
    }

    const estatisticaAtual = [forcaPeca, poderPeca, energiaPeca, velocidadePeca]
    let indice = 0

    estatistica.forEach((item)=>{
        item.textContent = estatisticaAtual[indice]
        indice ++
    })
}
