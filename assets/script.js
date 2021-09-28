
const pino1 = document.getElementById("pino1")
const pino2 = document.getElementById("pino2")
const pino3 = document.getElementById("pino3")
let selecionado = false
let pinoAtual = pino1
const erro = new Audio("./assets/error.mp3")

//Mateus
const disco1 = document.createElement("div");
disco1.id = "disco1" ;
pino1.appendChild(disco1);
const disco2 = document.createElement("div")
disco2.id = "disco2" ;
pino1.appendChild(disco2);
const disco3 = document.createElement("div")
disco3.id = "disco3" ;
pino1.appendChild(disco3);
const disco4 = document.createElement("div")
disco4.id = "disco4" ;
pino1.appendChild(disco4);
const disco5 = document.createElement("div")
disco5.id = "disco5" ;
pino1.appendChild(disco5);


//Erivan
pino1.addEventListener("click",clicaPino)
pino2.addEventListener("click",clicaPino)
pino3.addEventListener("click",clicaPino)

function clicaPino (evt){
    const pino = evt.currentTarget
    if(!selecionado){
        if(pino.childElementCount>0){
            pinoAtual=pino
            selecionado = true
        }
        else{
            erro.play()
        }
    }
    else{
        if(checaJogada(pinoAtual,pino)){
            moveDisco(pinoAtual,pino)
            selecionado = false
        }
        else{
            selecionado = false
            erro.play()
        }
    }

}
function checaJogada(pinoOrigem,pinoDestino){
    if(pinoDestino.childElementCount===0){
        return true
    }
    if(pinoOrigem.lastChild.clientWidth<pinoDestino.lastChild.clientWidth){
        return true
    }
    return false
}
function moveDisco(pinoOrigem,pinoDestino){
    const disco = pinoOrigem.lastChild
    pinoDestino.appendChild(disco)
}