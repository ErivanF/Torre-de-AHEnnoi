const pino1 = document.getElementById("pino1")
const pino2 = document.getElementById("pino2")
const pino3 = document.getElementById("pino3")
let selecionado = false
let pinoAtual = pino1
//Mateus


//Erivan
pino1.addEventListener("click",clicaPino)
pino2.addEventListener("click",clicaPino)
pino3.addEventListener("click",clicaPino)

function clicaPino (evt){
    if(!selecionado){
        pinoAtual=evt.target
        console.log(pinoAtual.id)
        selecionado = true
    }
    else{
        console.log(pinoAtual.id,evt.target.id)
        moveDisco(pinoAtual,evt.target)
        selecionado = false
    }

}
function testaPino(x){
    if(!selecionado){
        pinoAtual=x
        console.log(pinoAtual.id)
        selecionado = true
    }else {
        console.log(pinoAtual.id,x.id)
        moveDisco(pinoAtual,x)
        selecionado = false
    }


}
function moveDisco(pinoAntes,pinoDepois){
    const disco = pinoAntes.lastChild
    pinoDepois.appendChild(disco)
}