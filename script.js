/* 
    Vou deixar alguns valores setados 
    para os preços de plano. Uma tabela fictícia
    a princínpio.

    Os dados que devem ser obtidos são, a quantidade de 
    colaboradores, porque de acordo com ela, será criada utilizada
    uma nova tabela de preços. 
    A faixa etária de cada funcionário, no caso, quantos funcionários
    dentro de cada faixa etária. 
    E ai usar o código para criar os valores. 

    A princípio vou utilizar 2 tabelas só porque senão vai ficar muito grande
    sem necessidade.

*/

/* zerando as váriáveis */
var numate18 = 0
var numate23 = 0
var numate28 = 0
var numate33 = 0
var numate38 = 0
var numate43 = 0
var numate48 = 0
var numate53 = 0
var numate58 = 0
var nummais59 = 0

var valorSimulado = 0

var personal = 0
var personalA = 0
var UniTeen = 0
var UniTeenRD = 0
var UniTeenRDA = 0
var Flex2 = 0
var FlexA2 = 0
var Flex3 = 0
var FlexA3 = 0
var UniTrio = 0
var UniTrioRD = 0
var UniAmplo1 = 0


/* Criando Objetos */

personal = {
    qColetivo: {
        ate18: 179.79,
        ate23: 201.94,
        ate28: 232.25,
        ate33: 255.47,
        ate38: 301.47,
        ate43: 346.67,
        ate48: 449.44,
        ate53: 584.28,
        ate58: 782.03,
        mais59: 1071.47
    }
}

personalA = {
    qColetivo: {
        ate18: 179.79,
        ate23: 255.31,
        ate28: 255.31,
        ate33: 255.31,
        ate38: 255.31,
        ate43: 255.31,
        ate48: 449.44,
        ate53: 584.28,
        ate58: 782.03,
        mais59: 1071.47
    }
}

UniTeen = {
    qColetivo: {
        ate18: 158.62,
        ate23: 177.67,
        ate28: 204.30,
        ate33: 224.74,
        ate38: 265.19,
        ate43: 304.98,
        ate48: 396.44,
        ate53: 515.37,
        ate58: 690.60,
        mais59: 946.12
    },
    qIndividual: {
        ate18: 230.00,
        ate23: 257.62,
        ate28: 296.24,
        ate33: 325.89,
        ate38: 384.55,
        ate43: 442.20,
        ate48: 574.85,
        ate53: 747.29,
        ate58: 1001.38,
        mais59: 1371.88
    }
}

UniTeenRD = {
    qColetivo: {
        ate18: 132.28,
        ate23: 148.14,
        ate28: 170.36,
        ate33: 187.39,
        ate38: 221.12,
        ate43: 254.27,
        ate48: 330.54,
        ate53: 429.70,
        ate58: 575.79,
        mais59: 788.83
    },
    qIndividual: {
        ate18: 191.80,
        ate23: 214.81,
        ate28: 247.03,
        ate33: 271.72,
        ate38: 320.62,
        ate43: 368.70,
        ate48: 479.29,
        ate53: 623.06,
        ate58: 834.90,
        mais59: 1143.81
    }
}

UniTeenRDA = {
    qColetivo: {
        ate18: 132.28,
        ate23: 187.82,
        ate28: 187.82,
        ate33: 187.82,
        ate38: 187.82,
        ate43: 187.82,
        ate48: 330.54,
        ate53: 429.70,
        ate58: 575.79,
        mais59: 788.83
    },
    qIndividual: {
        ate18: 191.80,
        ate23: 272.33,
        ate28: 272.33,
        ate33: 272.33,
        ate38: 272.33,
        ate43: 272.33,
        ate48: 479.29,
        ate53: 623.06,
        ate58: 834.90,
        mais59: 1143.81
    }
}

Flex2 = {
    qColetivo: {
        ate18: 186.20,
        ate23: 208.57,
        ate28: 239.82,
        ate33: 263.82,
        ate38: 311.31,
        ate43: 358.00,
        ate48: 465.39,
        ate53: 604.99,
        ate58: 810.69,
        mais59: 1110.64
    }
}

FlexA2 = {
    qColetivo: {
        ate18: 186.20,
        ate23: 253.36,
        ate28: 253.36,
        ate33: 253.36,
        ate38: 253.36,
        ate43: 253.36,
        ate48: 465.39,
        ate53: 604.99,
        ate58: 810.69,
        mais59: 1110.64
    }
}

Flex3 = {
    qColetivo: {
        ate18: 172.41,
        ate23: 193.11,
        ate28: 222.06,
        ate33: 244.28,
        ate38: 288.25,
        ate43: 331.47,
        ate48: 430.92,
        ate53: 560.17,
        ate58: 750.65,
        mais59: 1028.39
    }
}

FlexA3 = {
    qColetivo: {
        ate18: 172.41,
        ate23: 234.59,
        ate28: 234.59,
        ate33: 234.59,
        ate38: 234.59,
        ate43: 234.59,
        ate48: 430.92,
        ate53: 560.17,
        ate58: 750.65,
        mais59: 1028.39
    }
}

UniTrio = {
    qColetivo: {
        ate18: 237.06,
        ate23: 265.52,
        ate28: 305.34,
        ate33: 335.88,
        ate38: 396.35,
        ate43: 455.79,
        ate48: 592.50,
        ate53: 770.22,
        ate58: 1032.13,
        mais59: 1414.02
    },
    qIndividual: {
        ate18: 343.72,
        ate23: 385.01,
        ate28: 442.74,
        ate33: 487.02,
        ate38: 574.68,
        ate43: 660.89,
        ate48: 859.12,
        ate53: 1116.84,
        ate58: 1496.59,
        mais59: 2050.34
    }
}

UniTrioRD = {
    qColetivo: {
        ate18: 170.39,
        ate23: 190.83,
        ate28: 219.45,
        ate33: 241.40,
        ate38: 284.85,
        ate43: 327.58,
        ate48: 425.86,
        ate53: 553.61,
        ate58: 741.85,
        mais59: 1016.33
    },
    qIndividual: {
        ate18: 247.06,
        ate23: 276.70,
        ate28: 318.21,
        ate33: 350.04,
        ate38: 413.04,
        ate43: 474.99,
        ate48: 617.50,
        ate53: 802.74,
        ate58: 1075.69,
        mais59: 1473.68
    }
}

UniAmplo1 = {
    qColetivo: {
        ate18: 224.46,
        ate23: 251.39,
        ate28: 289.09,
        ate33: 318.01,
        ate38: 375.25,
        ate43: 431.54,
        ate48: 561.00,
        ate53: 729.31,
        ate58: 977.28,
        mais59: 1338.87
    },
    qIndividual: {
        ate18: 325.47,
        ate23: 364.53,
        ate28: 419.19,
        ate33: 461.11,
        ate38: 544.11,
        ate43: 625.74,
        ate48: 813.46,
        ate53: 1057.50,
        ate58: 1417.05,
        mais59: 1941.36
    }
}

/* var numFuncionarios = document.querySelector('#funcionarios').value */

/* Função do Formulário */

document.getElementById('simulador').addEventListener("submit", (e) => {
    e.preventDefault()

    

    var tipoPlano = document.querySelectorAll('#tipo-plano')
    tipoPlano.toString()

    var selectProduto = document.querySelector('[name=produtos]').value
    console.log(typeof(selectProduto))
    console.log(typeof(tipoPlano))

    numate18 = document.getElementById('num0a18').value
    numate23 = document.getElementById('num19a23').value
    numate28 = document.getElementById('num24a28').value
    numate33 = document.getElementById('num29a33').value
    numate38 = document.getElementById('num34a38').value
    numate43 = document.getElementById('num39a43').value
    numate48 = document.getElementById('num44a48').value
    numate53 = document.getElementById('num49a53').value
    numate58 = document.getElementById('num54a58').value
    nummais59 = document.getElementById('nummaisde59').value


    for(let i = 0; i < tipoPlano.length; i++){

        var sosuni = document.getElementById('sosuni')
        var planoMedicamentos = document.getElementById('planoMedicamentos')
        var proteFamiliar = document.getElementById('proteFamiliar')
        var valorSosuni = 0
        var valorPlanoMedicamentos = 0
        var valorProteFamiliar = 0

        sosuni.checked ? valorSosuni = sosuni.getAttribute('preco') : valorSosuni = 0
        planoMedicamentos.checked ? valorPlanoMedicamentos = planoMedicamentos.getAttribute('preco') : valorPlanoMedicamentos = 0
        proteFamiliar.checked ? valorProteFamiliar = proteFamiliar.getAttribute('preco') : valorProteFamiliar = 0

        if(tipoPlano[i].defaultValue === 'QColetivo' && selectProduto === 'personal'){
            
            valorSimulado = (
                (personal.qColetivo.ate18 * numate18) +
                (personal.qColetivo.ate23 * numate23) +
                (personal.qColetivo.ate28 * numate28) + 
                (personal.qColetivo.ate33 * numate33) +
                (personal.qColetivo.ate38 * numate38) +
                (personal.qColetivo.ate43 * numate43) +
                (personal.qColetivo.ate48 * numate48) +
                (personal.qColetivo.ate53 * numate53) +
                (personal.qColetivo.ate58 * numate58) +
                (personal.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')
            
            
        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'personalA'){
            
            valorSimulado = (
                (personalA.qColetivo.ate18 * numate18) +
                (personalA.qColetivo.ate23 * numate23) +
                (personalA.qColetivo.ate28 * numate28) + 
                (personalA.qColetivo.ate33 * numate33) +
                (personalA.qColetivo.ate38 * numate38) +
                (personalA.qColetivo.ate43 * numate43) +
                (personalA.qColetivo.ate48 * numate48) +
                (personalA.qColetivo.ate53 * numate53) +
                (personalA.qColetivo.ate58 * numate58) +
                (personalA.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')
            
        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTeen'){
            console.log(tipoPlano[i].value)
            console.log(typeof(tipoPlano[i]))

            valorSimulado = (
                (UniTeen.qColetivo.ate18 * numate18) +
                (UniTeen.qColetivo.ate23 * numate23) +
                (UniTeen.qColetivo.ate28 * numate28) + 
                (UniTeen.qColetivo.ate33 * numate33) +
                (UniTeen.qColetivo.ate38 * numate38) +
                (UniTeen.qColetivo.ate43 * numate43) +
                (UniTeen.qColetivo.ate48 * numate48) +
                (UniTeen.qColetivo.ate53 * numate53) +
                (UniTeen.qColetivo.ate58 * numate58) +
                (UniTeen.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTeen'){
            valorSimulado = (
                (UniTeen.qIndividual.ate18 * numate18) +
                (UniTeen.qIndividual.ate23 * numate23) +
                (UniTeen.qIndividual.ate28 * numate28) + 
                (UniTeen.qIndividual.ate33 * numate33) +
                (UniTeen.qIndividual.ate38 * numate38) +
                (UniTeen.qIndividual.ate43 * numate43) +
                (UniTeen.qIndividual.ate48 * numate48) +
                (UniTeen.qIndividual.ate53 * numate53) +
                (UniTeen.qIndividual.ate58 * numate58) +
                (UniTeen.qIndividual.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTeenRD'){
            valorSimulado = (
                (UniTeenRD.qColetivo.ate18 * numate18) +
                (UniTeenRD.qColetivo.ate23 * numate23) +
                (UniTeenRD.qColetivo.ate28 * numate28) + 
                (UniTeenRD.qColetivo.ate33 * numate33) +
                (UniTeenRD.qColetivo.ate38 * numate38) +
                (UniTeenRD.qColetivo.ate43 * numate43) +
                (UniTeenRD.qColetivo.ate48 * numate48) +
                (UniTeenRD.qColetivo.ate53 * numate53) +
                (UniTeenRD.qColetivo.ate58 * numate58) +
                (UniTeenRD.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTeenRD'){
            valorSimulado = (
                (UniTeenRD.qIndividual.ate18 * numate18) +
                (UniTeenRD.qIndividual.ate23 * numate23) +
                (UniTeenRD.qIndividual.ate28 * numate28) + 
                (UniTeenRD.qIndividual.ate33 * numate33) +
                (UniTeenRD.qIndividual.ate38 * numate38) +
                (UniTeenRD.qIndividual.ate43 * numate43) +
                (UniTeenRD.qIndividual.ate48 * numate48) +
                (UniTeenRD.qIndividual.ate53 * numate53) +
                (UniTeenRD.qIndividual.ate58 * numate58) +
                (UniTeenRD.qIndividual.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTeenRDA'){
            valorSimulado = (
                (UniTeenRDA.qColetivo.ate18 * numate18) +
                (UniTeenRDA.qColetivo.ate23 * numate23) +
                (UniTeenRDA.qColetivo.ate28 * numate28) + 
                (UniTeenRDA.qColetivo.ate33 * numate33) +
                (UniTeenRDA.qColetivo.ate38 * numate38) +
                (UniTeenRDA.qColetivo.ate43 * numate43) +
                (UniTeenRDA.qColetivo.ate48 * numate48) +
                (UniTeenRDA.qColetivo.ate53 * numate53) +
                (UniTeenRDA.qColetivo.ate58 * numate58) +
                (UniTeenRDA.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTeenRDA'){
            valorSimulado = (
                (UniTeenRDA.qIndividual.ate18 * numate18) +
                (UniTeenRDA.qIndividual.ate23 * numate23) +
                (UniTeenRDA.qIndividual.ate28 * numate28) + 
                (UniTeenRDA.qIndividual.ate33 * numate33) +
                (UniTeenRDA.qIndividual.ate38 * numate38) +
                (UniTeenRDA.qIndividual.ate43 * numate43) +
                (UniTeenRDA.qIndividual.ate48 * numate48) +
                (UniTeenRDA.qIndividual.ate53 * numate53) +
                (UniTeenRDA.qIndividual.ate58 * numate58) +
                (UniTeenRDA.qIndividual.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'Flex2'){
            valorSimulado = (
                (Flex2.qColetivo.ate18 * numate18) +
                (Flex2.qColetivo.ate23 * numate23) +
                (Flex2.qColetivo.ate28 * numate28) + 
                (Flex2.qColetivo.ate33 * numate33) +
                (Flex2.qColetivo.ate38 * numate38) +
                (Flex2.qColetivo.ate43 * numate43) +
                (Flex2.qColetivo.ate48 * numate48) +
                (Flex2.qColetivo.ate53 * numate53) +
                (Flex2.qColetivo.ate58 * numate58) +
                (Flex2.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'FlexA2'){
            valorSimulado = (
                (FlexA2.qColetivo.ate18 * numate18) +
                (FlexA2.qColetivo.ate23 * numate23) +
                (FlexA2.qColetivo.ate28 * numate28) + 
                (FlexA2.qColetivo.ate33 * numate33) +
                (FlexA2.qColetivo.ate38 * numate38) +
                (FlexA2.qColetivo.ate43 * numate43) +
                (FlexA2.qColetivo.ate48 * numate48) +
                (FlexA2.qColetivo.ate53 * numate53) +
                (FlexA2.qColetivo.ate58 * numate58) +
                (FlexA2.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'Flex3'){
            valorSimulado = (
                (Flex3.qColetivo.ate18 * numate18) +
                (Flex3.qColetivo.ate23 * numate23) +
                (Flex3.qColetivo.ate28 * numate28) + 
                (Flex3.qColetivo.ate33 * numate33) +
                (Flex3.qColetivo.ate38 * numate38) +
                (Flex3.qColetivo.ate43 * numate43) +
                (Flex3.qColetivo.ate48 * numate48) +
                (Flex3.qColetivo.ate53 * numate53) +
                (Flex3.qColetivo.ate58 * numate58) +
                (Flex3.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'FlexA3'){
            valorSimulado = (
                (FlexA3.qColetivo.ate18 * numate18) +
                (FlexA3.qColetivo.ate23 * numate23) +
                (FlexA3.qColetivo.ate28 * numate28) + 
                (FlexA3.qColetivo.ate33 * numate33) +
                (FlexA3.qColetivo.ate38 * numate38) +
                (FlexA3.qColetivo.ate43 * numate43) +
                (FlexA3.qColetivo.ate48 * numate48) +
                (FlexA3.qColetivo.ate53 * numate53) +
                (FlexA3.qColetivo.ate58 * numate58) +
                (FlexA3.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTrio'){
            valorSimulado = (
                (UniTrio.qColetivo.ate18 * numate18) +
                (UniTrio.qColetivo.ate23 * numate23) +
                (UniTrio.qColetivo.ate28 * numate28) + 
                (UniTrio.qColetivo.ate33 * numate33) +
                (UniTrio.qColetivo.ate38 * numate38) +
                (UniTrio.qColetivo.ate43 * numate43) +
                (UniTrio.qColetivo.ate48 * numate48) +
                (UniTrio.qColetivo.ate53 * numate53) +
                (UniTrio.qColetivo.ate58 * numate58) +
                (UniTrio.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTrio'){
            valorSimulado = (
                (UniTrio.qIndividual.ate18 * numate18) +
                (UniTrio.qIndividual.ate23 * numate23) +
                (UniTrio.qIndividual.ate28 * numate28) + 
                (UniTrio.qIndividual.ate33 * numate33) +
                (UniTrio.qIndividual.ate38 * numate38) +
                (UniTrio.qIndividual.ate43 * numate43) +
                (UniTrio.qIndividual.ate48 * numate48) +
                (UniTrio.qIndividual.ate53 * numate53) +
                (UniTrio.qIndividual.ate58 * numate58) +
                (UniTrio.qIndividual.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTrioRD'){
            valorSimulado = (
                (UniTrioRD.qColetivo.ate18 * numate18) +
                (UniTrioRD.qColetivo.ate23 * numate23) +
                (UniTrioRD.qColetivo.ate28 * numate28) + 
                (UniTrioRD.qColetivo.ate33 * numate33) +
                (UniTrioRD.qColetivo.ate38 * numate38) +
                (UniTrioRD.qColetivo.ate43 * numate43) +
                (UniTrioRD.qColetivo.ate48 * numate48) +
                (UniTrioRD.qColetivo.ate53 * numate53) +
                (UniTrioRD.qColetivo.ate58 * numate58) +
                (UniTrioRD.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTrioRD'){
            valorSimulado = (
                (UniTrioRD.qIndividual.ate18 * numate18) +
                (UniTrioRD.qIndividual.ate23 * numate23) +
                (UniTrioRD.qIndividual.ate28 * numate28) + 
                (UniTrioRD.qIndividual.ate33 * numate33) +
                (UniTrioRD.qIndividual.ate38 * numate38) +
                (UniTrioRD.qIndividual.ate43 * numate43) +
                (UniTrioRD.qIndividual.ate48 * numate48) +
                (UniTrioRD.qIndividual.ate53 * numate53) +
                (UniTrioRD.qIndividual.ate58 * numate58) +
                (UniTrioRD.qIndividual.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniAmplo1'){
            valorSimulado = (
                (UniAmplo1.qColetivo.ate18 * numate18) +
                (UniAmplo1.qColetivo.ate23 * numate23) +
                (UniAmplo1.qColetivo.ate28 * numate28) + 
                (UniAmplo1.qColetivo.ate33 * numate33) +
                (UniAmplo1.qColetivo.ate38 * numate38) +
                (UniAmplo1.qColetivo.ate43 * numate43) +
                (UniAmplo1.qColetivo.ate48 * numate48) +
                (UniAmplo1.qColetivo.ate53 * numate53) +
                (UniAmplo1.qColetivo.ate58 * numate58) +
                (UniAmplo1.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')

        }else if(tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniAmplo1'){
            valorSimulado = (
                (UniAmplo1.qIndividual.ate18 * numate18) +
                (UniAmplo1.qIndividual.ate23 * numate23) +
                (UniAmplo1.qIndividual.ate28 * numate28) + 
                (UniAmplo1.qIndividual.ate33 * numate33) +
                (UniAmplo1.qIndividual.ate38 * numate38) +
                (UniAmplo1.qIndividual.ate43 * numate43) +
                (UniAmplo1.qIndividual.ate48 * numate48) +
                (UniAmplo1.qIndividual.ate53 * numate53) +
                (UniAmplo1.qIndividual.ate58 * numate58) +
                (UniAmplo1.qIndividual.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            resultado.innerHTML = `R$${Number(valorSimulado).toFixed(2).replace(".", ",")}`
            resultado.classList.add('resultado')
        }  
    }
})