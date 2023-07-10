/* 
    Vou deixar alguns valores setados 
    para os preços de plano. Uma tabela fictícia
    a princínpio.

    Os dados que devem ser obtidos são, a quantidade de 
    colaboradores, porque de acordo com ela, será criada utilizada
    uma nova tabela de preços. 
    A faixa etária de cada funcionário, no caso, quantos pessoas
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
var valorSimuladoUnimed = 0

var Personal = 0
var PersonalA = 0
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

var unimedPersonal = 0
var unimedPersonalA = 0
var unimedUniTeen = 0
var unimedUniTeenRD = 0
var unimedUniTeenRDA = 0
var unimedFlex2 = 0
var unimedFlexA2 = 0
var unimedFlex3 = 0
var unimedFlexA3 = 0
var unimedUniTrio = 0
var unimedUniTrioRD = 0
var unimedUniAmplo1 = 0


/* Criando Objetos */
/* 
    *************************************
    * Tabela de Praços da CDL Corretora *
    *************************************  
*/

Personal = {
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

PersonalA = {
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
        mais59: 1028.36
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
/*var numFuncionarios = document.querySelector('#funcionarios').value*/

/*
    ******************************  
    * Tabela de Preços da Unimed *
    ******************************
 */ 

unimedPersonal = {
    qColetivo: {
        ate18: 205.07,
        ate23: 229.68,
        ate28: 264.13,
        ate33: 290.56,
        ate38: 342.87,
        ate43: 394.31,
        ate48: 512.61,
        ate53: 666.42,
        ate58: 892.98,
        mais59: 1223.41
    }
}

unimedPersonalA = {
    qColetivo: {
        ate18: 205.07,
        ate23: 291.19,
        ate28: 291.19,
        ate33: 291.19,
        ate38: 291.19,
        ate43: 291.19,
        ate48: 512.61,
        ate53: 666.42,
        ate58: 892.98,
        mais59: 1223.41
    }
}

unimedUniTeen = {
    qColetivo: {
        ate18: 176.13,
        ate23: 197.25,
        ate28: 226.83,
        ate33: 249.51,
        ate38: 294.51,
        ate43: 338.58,
        ate48: 440.14,
        ate53: 572.17,
        ate58: 766.69,
        mais59: 1050.35
    },
    qIndividual: {
        ate18: 255.38,
        ate23: 286.02,
        ate28: 328.91,
        ate33: 361.79,
        ate38: 426.92,
        ate43: 490.94,
        ate48: 638.20,
        ate53: 829.64,
        ate58: 1111.70,
        mais59: 1523.00
    }
}

unimedUniTeenRD = {
    qColetivo: {
        ate18: 144.44,
        ate23: 161.78,
        ate28: 186.04,
        ate33: 204.64,
        ate38: 241.46,
        ate43: 277.67,
        ate48: 360.96,
        ate53: 469.24,
        ate58: 628.77,
        mais59: 861.43
    },
    qIndividual: {
        ate18: 209.44,
        ate23: 234.58,
        ate28: 269.76,
        ate33: 296.72,
        ate38: 350.12,
        ate43: 402.62,
        ate48: 523.39,
        ate53: 680.40,
        ate58: 911.72,
        mais59: 1249.07
    }
}

unimedUniTeenRDA = {
    qColetivo: {
        ate18: 144.44,
        ate23: 205.10,
        ate28: 205.10,
        ate33: 205.10,
        ate38: 205.10,
        ate43: 205.10,
        ate48: 360.96,
        ate53: 469.24,
        ate58: 628.77,
        mais59: 861.43
    },
    qIndividual: {
        ate18: 209.44,
        ate23: 297.40,
        ate28: 297.40,
        ate33: 297.40,
        ate38: 397.40,
        ate43: 497.40,
        ate48: 523.39,
        ate53: 680.40,
        ate58: 911.72,
        mais59: 1249.07
    }
}

unimedFlex2 = {
    qColetivo: {
        ate18: 211.51,
        ate23: 236.89,
        ate28: 272.41,
        ate33: 299.65,
        ate38: 353.57,
        ate43: 406.60,
        ate48: 528.56,
        ate53: 687.10,
        ate58: 920.69,
        mais59: 1261.38
    }
}

unimedFlexA2 = {
    qColetivo: {
        ate18: 211.51,
        ate23: 287.81,
        ate28: 287.81,
        ate33: 287.81,
        ate38: 287.81,
        ate43: 287.81,
        ate48: 528.56,
        ate53: 687.10,
        ate58: 920.69,
        mais59: 1261.38
    }
}

unimedFlex3 = {
    qColetivo: {
        ate18: 183.69,
        ate23: 205.73,
        ate28: 236.58,
        ate33: 260.21,
        ate38: 307.02,
        ate43: 353.06,
        ate48: 458.99,
        ate53: 596.68,
        ate58: 799.63,
        mais59: 1095.47
    }
}

unimedFlexA3 = {
    qColetivo: {
        ate18: 183.69,
        ate23: 249.95,
        ate28: 249.95,
        ate33: 249.95,
        ate38: 249.95,
        ate43: 249.95,
        ate48: 458.99,
        ate53: 596.68,
        ate58: 799.63,
        mais59: 1095.47
    }
}

unimedUniTrio = {
    qColetivo: {
        ate18: 267.54,
        ate23: 299.64,
        ate28: 344.59,
        ate33: 379.04,
        ate38: 447.27,
        ate43: 514.36,
        ate48: 668.67,
        ate53: 869.28,
        ate58: 1164.83,
        mais59: 1595.82
    },
    qIndividual: {
        ate18: 387.93,
        ate23: 434.48,
        ate28: 499.65,
        ate33: 549.62,
        ate38: 648.55,
        ate43: 745.83,
        ate48: 969.58,
        ate53: 1260.45,
        ate58: 1689.00,
        mais59: 2313.93
    }
}

unimedUniTrioRD = {
    qColetivo: {
        ate18: 186.07,
        ate23: 208.39,
        ate28: 239.65,
        ate33: 263.62,
        ate38: 311.07,
        ate43: 357.73,
        ate48: 465.05,
        ate53: 604.56,
        ate58: 810.12,
        mais59: 1109.86
    },
    qIndividual: {
        ate18: 269.80,
        ate23: 302.17,
        ate28: 347.49,
        ate33: 382.25,
        ate38: 451.05,
        ate43: 518.71,
        ate48: 674.32,
        ate53: 876.61,
        ate58: 1174.67,
        mais59: 1609.30
    }
}

unimedUniAmplo1 = {
    qColetivo: {
        ate18: 248.83,
        ate23: 278.69,
        ate28: 320.50,
        ate33: 352.55,
        ate38: 416.01,
        ate43: 478.41,
        ate48: 621.93,
        ate53: 808.51,
        ate58: 1083.40,
        mais59: 1484.26
    },
    qIndividual: {
        ate18: 360.81,
        ate23: 404.11,
        ate28: 464.72,
        ate33: 511.19,
        ate38: 603.21,
        ate43: 693.69,
        ate48: 901.80,
        ate53: 1172.34,
        ate58: 1570.93,
        mais59: 2152.18
    }
}







/* Função do Formulário */

document.getElementById('simulador').addEventListener("submit", (e) => {
    e.preventDefault()

    var tipoPlano = document.getElementsByName('tipodeplano')
    tipoPlano.toString()
    console.log(tipoPlano[0].checked, tipoPlano[1].checked)
    
    var selectProduto = document.querySelector('[name=produtos]').value

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
        var unimedValorSosuni = 0
        var unimedValorPlanoMedicamentos = 5.07
        var unimedValorProteFamiliar = 7.59

        
        if(sosuni.checked){
            valorSosuni = sosuni.getAttribute('preco')
            unimedValorSosuni = 13.59
        }else{
            valorSosuni = 0
            unimedValorSosuni = 0
        }

        if(planoMedicamentos.checked){
            valorPlanoMedicamentos = planoMedicamentos.getAttribute('preco')
            unimedValorPlanoMedicamentos = 5.07
        }else{
            valorPlanoMedicamentos = 0
            unimedValorPlanoMedicamentos = 0
        }

        if(proteFamiliar.checked){
            valorProteFamiliar = proteFamiliar.getAttribute('preco')
            unimedValorProteFamiliar = 7.59
        }else{
            valorProteFamiliar = 0
            unimedValorProteFamiliar = 0
        }


        if(tipoPlano[i].checked && tipoPlano[i].defaultValue === 'QColetivo' && selectProduto === 'Personal'){
            
            valorSimulado = (
                (Personal.qColetivo.ate18 * numate18) +
                (Personal.qColetivo.ate23 * numate23) +
                (Personal.qColetivo.ate28 * numate28) + 
                (Personal.qColetivo.ate33 * numate33) +
                (Personal.qColetivo.ate38 * numate38) +
                (Personal.qColetivo.ate43 * numate43) +
                (Personal.qColetivo.ate48 * numate48) +
                (Personal.qColetivo.ate53 * numate53) +
                (Personal.qColetivo.ate58 * numate58) +
                (Personal.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            valorSimuladoUnimed = (
                (unimedPersonal.qColetivo.ate18 * numate18) +
                (unimedPersonal.qColetivo.ate23 * numate23) +
                (unimedPersonal.qColetivo.ate28 * numate28) + 
                (unimedPersonal.qColetivo.ate33 * numate33) +
                (unimedPersonal.qColetivo.ate38 * numate38) +
                (unimedPersonal.qColetivo.ate43 * numate43) +
                (unimedPersonal.qColetivo.ate48 * numate48) +
                (unimedPersonal.qColetivo.ate53 * numate53) +
                (unimedPersonal.qColetivo.ate58 * numate58) +
                (unimedPersonal.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorPlanoMedicamentos) + 
                Number(unimedValorProteFamiliar)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})
            


            
        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'PersonalA'){
            
            valorSimulado = (
                (PersonalA.qColetivo.ate18 * numate18) +
                (PersonalA.qColetivo.ate23 * numate23) +
                (PersonalA.qColetivo.ate28 * numate28) + 
                (PersonalA.qColetivo.ate33 * numate33) +
                (PersonalA.qColetivo.ate38 * numate38) +
                (PersonalA.qColetivo.ate43 * numate43) +
                (PersonalA.qColetivo.ate48 * numate48) +
                (PersonalA.qColetivo.ate53 * numate53) +
                (PersonalA.qColetivo.ate58 * numate58) +
                (PersonalA.qColetivo.mais59 * nummais59) + 
                Number(valorSosuni) + 
                Number(valorProteFamiliar) + 
                Number(valorPlanoMedicamentos)
            )

            valorSimuladoUnimed = (
                (unimedPersonalA.qColetivo.ate18 * numate18) +
                (unimedPersonalA.qColetivo.ate23 * numate23) +
                (unimedPersonalA.qColetivo.ate28 * numate28) + 
                (unimedPersonalA.qColetivo.ate33 * numate33) +
                (unimedPersonalA.qColetivo.ate38 * numate38) +
                (unimedPersonalA.qColetivo.ate43 * numate43) +
                (unimedPersonalA.qColetivo.ate48 * numate48) +
                (unimedPersonalA.qColetivo.ate53 * numate53) +
                (unimedPersonalA.qColetivo.ate58 * numate58) +
                (unimedPersonalA.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})
            
        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTeen'){
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

            valorSimuladoUnimed = (
                (unimedUniTeen.qColetivo.ate18 * numate18) +
                (unimedUniTeen.qColetivo.ate23 * numate23) +
                (unimedUniTeen.qColetivo.ate28 * numate28) + 
                (unimedUniTeen.qColetivo.ate33 * numate33) +
                (unimedUniTeen.qColetivo.ate38 * numate38) +
                (unimedUniTeen.qColetivo.ate43 * numate43) +
                (unimedUniTeen.qColetivo.ate48 * numate48) +
                (unimedUniTeen.qColetivo.ate53 * numate53) +
                (unimedUniTeen.qColetivo.ate58 * numate58) +
                (unimedUniTeen.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTeen'){
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

            valorSimuladoUnimed = (
                (unimedUniTeen.qIndividual.ate18 * numate18) +
                (unimedUniTeen.qIndividual.ate23 * numate23) +
                (unimedUniTeen.qIndividual.ate28 * numate28) + 
                (unimedUniTeen.qIndividual.ate33 * numate33) +
                (unimedUniTeen.qIndividual.ate38 * numate38) +
                (unimedUniTeen.qIndividual.ate43 * numate43) +
                (unimedUniTeen.qIndividual.ate48 * numate48) +
                (unimedUniTeen.qIndividual.ate53 * numate53) +
                (unimedUniTeen.qIndividual.ate58 * numate58) +
                (unimedUniTeen.qIndividual.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTeenRD'){
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

            valorSimuladoUnimed = (
                (unimedUniTeenRD.qColetivo.ate18 * numate18) +
                (unimedUniTeenRD.qColetivo.ate23 * numate23) +
                (unimedUniTeenRD.qColetivo.ate28 * numate28) + 
                (unimedUniTeenRD.qColetivo.ate33 * numate33) +
                (unimedUniTeenRD.qColetivo.ate38 * numate38) +
                (unimedUniTeenRD.qColetivo.ate43 * numate43) +
                (unimedUniTeenRD.qColetivo.ate48 * numate48) +
                (unimedUniTeenRD.qColetivo.ate53 * numate53) +
                (unimedUniTeenRD.qColetivo.ate58 * numate58) +
                (unimedUniTeenRD.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTeenRD'){
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

            valorSimuladoUnimed = (
                (unimedUniTeenRD.qIndividual.ate18 * numate18) +
                (unimedUniTeenRD.qIndividual.ate23 * numate23) +
                (unimedUniTeenRD.qIndividual.ate28 * numate28) + 
                (unimedUniTeenRD.qIndividual.ate33 * numate33) +
                (unimedUniTeenRD.qIndividual.ate38 * numate38) +
                (unimedUniTeenRD.qIndividual.ate43 * numate43) +
                (unimedUniTeenRD.qIndividual.ate48 * numate48) +
                (unimedUniTeenRD.qIndividual.ate53 * numate53) +
                (unimedUniTeenRD.qIndividual.ate58 * numate58) +
                (unimedUniTeenRD.qIndividual.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTeenRDA'){
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

            valorSimuladoUnimed = (
                (unimedUniTeenRDA.qColetivo.ate18 * numate18) +
                (unimedUniTeenRDA.qColetivo.ate23 * numate23) +
                (unimedUniTeenRDA.qColetivo.ate28 * numate28) + 
                (unimedUniTeenRDA.qColetivo.ate33 * numate33) +
                (unimedUniTeenRDA.qColetivo.ate38 * numate38) +
                (unimedUniTeenRDA.qColetivo.ate43 * numate43) +
                (unimedUniTeenRDA.qColetivo.ate48 * numate48) +
                (unimedUniTeenRDA.qColetivo.ate53 * numate53) +
                (unimedUniTeenRDA.qColetivo.ate58 * numate58) +
                (unimedUniTeenRDA.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTeenRDA'){
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

            valorSimuladoUnimed = (
                (unimedUniTeenRDA.qIndividual.ate18 * numate18) +
                (unimedUniTeenRDA.qIndividual.ate23 * numate23) +
                (unimedUniTeenRDA.qIndividual.ate28 * numate28) + 
                (unimedUniTeenRDA.qIndividual.ate33 * numate33) +
                (unimedUniTeenRDA.qIndividual.ate38 * numate38) +
                (unimedUniTeenRDA.qIndividual.ate43 * numate43) +
                (unimedUniTeenRDA.qIndividual.ate48 * numate48) +
                (unimedUniTeenRDA.qIndividual.ate53 * numate53) +
                (unimedUniTeenRDA.qIndividual.ate58 * numate58) +
                (unimedUniTeenRDA.qIndividual.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'Flex2'){
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

            valorSimuladoUnimed = (
                (unimedFlex2.qColetivo.ate18 * numate18) +
                (unimedFlex2.qColetivo.ate23 * numate23) +
                (unimedFlex2.qColetivo.ate28 * numate28) + 
                (unimedFlex2.qColetivo.ate33 * numate33) +
                (unimedFlex2.qColetivo.ate38 * numate38) +
                (unimedFlex2.qColetivo.ate43 * numate43) +
                (unimedFlex2.qColetivo.ate48 * numate48) +
                (unimedFlex2.qColetivo.ate53 * numate53) +
                (unimedFlex2.qColetivo.ate58 * numate58) +
                (unimedFlex2.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'FlexA2'){
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

            valorSimuladoUnimed = (
                (unimedFlexA2.qColetivo.ate18 * numate18) +
                (unimedFlexA2.qColetivo.ate23 * numate23) +
                (unimedFlexA2.qColetivo.ate28 * numate28) + 
                (unimedFlexA2.qColetivo.ate33 * numate33) +
                (unimedFlexA2.qColetivo.ate38 * numate38) +
                (unimedFlexA2.qColetivo.ate43 * numate43) +
                (unimedFlexA2.qColetivo.ate48 * numate48) +
                (unimedFlexA2.qColetivo.ate53 * numate53) +
                (unimedFlexA2.qColetivo.ate58 * numate58) +
                (unimedFlexA2.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'Flex3'){
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

            valorSimuladoUnimed = (
                (unimedFlex3.qColetivo.ate18 * numate18) +
                (unimedFlex3.qColetivo.ate23 * numate23) +
                (unimedFlex3.qColetivo.ate28 * numate28) + 
                (unimedFlex3.qColetivo.ate33 * numate33) +
                (unimedFlex3.qColetivo.ate38 * numate38) +
                (unimedFlex3.qColetivo.ate43 * numate43) +
                (unimedFlex3.qColetivo.ate48 * numate48) +
                (unimedFlex3.qColetivo.ate53 * numate53) +
                (unimedFlex3.qColetivo.ate58 * numate58) +
                (unimedFlex3.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'FlexA3'){
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

            valorSimuladoUnimed = (
                (unimedFlexA3.qColetivo.ate18 * numate18) +
                (unimedFlexA3.qColetivo.ate23 * numate23) +
                (unimedFlexA3.qColetivo.ate28 * numate28) + 
                (unimedFlexA3.qColetivo.ate33 * numate33) +
                (unimedFlexA3.qColetivo.ate38 * numate38) +
                (unimedFlexA3.qColetivo.ate43 * numate43) +
                (unimedFlexA3.qColetivo.ate48 * numate48) +
                (unimedFlexA3.qColetivo.ate53 * numate53) +
                (unimedFlexA3.qColetivo.ate58 * numate58) +
                (unimedFlexA3.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTrio'){
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

            valorSimuladoUnimed = (
                (unimedUniTrio.qColetivo.ate18 * numate18) +
                (unimedUniTrio.qColetivo.ate23 * numate23) +
                (unimedUniTrio.qColetivo.ate28 * numate28) + 
                (unimedUniTrio.qColetivo.ate33 * numate33) +
                (unimedUniTrio.qColetivo.ate38 * numate38) +
                (unimedUniTrio.qColetivo.ate43 * numate43) +
                (unimedUniTrio.qColetivo.ate48 * numate48) +
                (unimedUniTrio.qColetivo.ate53 * numate53) +
                (unimedUniTrio.qColetivo.ate58 * numate58) +
                (unimedUniTrio.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTrio'){
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

            valorSimuladoUnimed = (
                (unimedUniTrio.qIndividual.ate18 * numate18) +
                (unimedUniTrio.qIndividual.ate23 * numate23) +
                (unimedUniTrio.qIndividual.ate28 * numate28) + 
                (unimedUniTrio.qIndividual.ate33 * numate33) +
                (unimedUniTrio.qIndividual.ate38 * numate38) +
                (unimedUniTrio.qIndividual.ate43 * numate43) +
                (unimedUniTrio.qIndividual.ate48 * numate48) +
                (unimedUniTrio.qIndividual.ate53 * numate53) +
                (unimedUniTrio.qIndividual.ate58 * numate58) +
                (unimedUniTrio.qIndividual.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniTrioRD'){
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

            valorSimuladoUnimed = (
                (unimedUniTrioRD.qColetivo.ate18 * numate18) +
                (unimedUniTrioRD.qColetivo.ate23 * numate23) +
                (unimedUniTrioRD.qColetivo.ate28 * numate28) + 
                (unimedUniTrioRD.qColetivo.ate33 * numate33) +
                (unimedUniTrioRD.qColetivo.ate38 * numate38) +
                (unimedUniTrioRD.qColetivo.ate43 * numate43) +
                (unimedUniTrioRD.qColetivo.ate48 * numate48) +
                (unimedUniTrioRD.qColetivo.ate53 * numate53) +
                (unimedUniTrioRD.qColetivo.ate58 * numate58) +
                (unimedUniTrioRD.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniTrioRD'){
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

            valorSimuladoUnimed = (
                (unimedUniTrioRD.qIndividual.ate18 * numate18) +
                (unimedUniTrioRD.qIndividual.ate23 * numate23) +
                (unimedUniTrioRD.qIndividual.ate28 * numate28) + 
                (unimedUniTrioRD.qIndividual.ate33 * numate33) +
                (unimedUniTrioRD.qIndividual.ate38 * numate38) +
                (unimedUniTrioRD.qIndividual.ate43 * numate43) +
                (unimedUniTrioRD.qIndividual.ate48 * numate48) +
                (unimedUniTrioRD.qIndividual.ate53 * numate53) +
                (unimedUniTrioRD.qIndividual.ate58 * numate58) +
                (unimedUniTrioRD.qIndividual.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QColetivo' && selectProduto === 'UniAmplo1'){
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

            valorSimuladoUnimed = (
                (unimedUniAmplo1.qColetivo.ate18 * numate18) +
                (unimedUniAmplo1.qColetivo.ate23 * numate23) +
                (unimedUniAmplo1.qColetivo.ate28 * numate28) + 
                (unimedUniAmplo1.qColetivo.ate33 * numate33) +
                (unimedUniAmplo1.qColetivo.ate38 * numate38) +
                (unimedUniAmplo1.qColetivo.ate43 * numate43) +
                (unimedUniAmplo1.qColetivo.ate48 * numate48) +
                (unimedUniAmplo1.qColetivo.ate53 * numate53) +
                (unimedUniAmplo1.qColetivo.ate58 * numate58) +
                (unimedUniAmplo1.qColetivo.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})

        }else if(tipoPlano[i].checked && tipoPlano[i].value === 'QIndividual' && selectProduto === 'UniAmplo1'){
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

            valorSimuladoUnimed = (
                (unimedUniAmplo1.qIndividual.ate18 * numate18) +
                (unimedUniAmplo1.qIndividual.ate23 * numate23) +
                (unimedUniAmplo1.qIndividual.ate28 * numate28) + 
                (unimedUniAmplo1.qIndividual.ate33 * numate33) +
                (unimedUniAmplo1.qIndividual.ate38 * numate38) +
                (unimedUniAmplo1.qIndividual.ate43 * numate43) +
                (unimedUniAmplo1.qIndividual.ate48 * numate48) +
                (unimedUniAmplo1.qIndividual.ate53 * numate53) +
                (unimedUniAmplo1.qIndividual.ate58 * numate58) +
                (unimedUniAmplo1.qIndividual.mais59 * nummais59) + 
                Number(unimedValorSosuni) + 
                Number(unimedValorProteFamiliar) + 
                Number(unimedValorPlanoMedicamentos)
            )

            var resultado = document.getElementById('resultado')
            var numFuncionarios = Number(numate18) + Number(numate23) + Number(numate28) + Number(numate33) + Number(numate38) + Number(numate43) + Number(numate48) + Number(numate53) + Number(numate58) + Number(nummais59)
            var textRes = `Olá!%20Tenho%20uma%20empresa%20de%20${numFuncionarios}%20pessoas%20e%20escolhi%20o%20produto%20${selectProduto}.%20Quero%20mais%20informações.`
            var url = `https://wa.me/5528998831600/?text=${textRes}`
            var textCTA = `Quer saber mais? Clique no link abaixo e converse com um de nossos colaboradores para obter mais informações sobre o plano.`
            resultado.innerHTML = 
            `
                <div class="resPreco">  
                    <p>Preço na CDL Corretora:</p> 
                    <p> 
                        R$${Number(valorSimulado).toFixed(2).replace(".", ",")}
                    </p>
                </div>

                <div class="resPreco">
                    <p>Preço em outras Corretoras:</p>    
                    <p> 
                        R$${Number(valorSimuladoUnimed).toFixed(2).replace(".", ",")}
                    </p>
                </div>
                
            `
            resultado.classList.add('resultado')
            var saibaMais = document.getElementById('saibaMais')
            var rolarAteAqui = document.getElementById('rolarAteAqui')
            saibaMais.innerHTML = `<a href="${url}" target="_blank" class="" id="saibaMais">Saiba Mais</a>`
            saibaMais.classList.add('saibaMais')
            var cta = document.getElementById('cta')
            cta.innerHTML = `<p class="txt-cta">${textCTA}</p>`
            rolarAteAqui.scrollIntoView({behavior:"smooth"})
        }  
    }
})