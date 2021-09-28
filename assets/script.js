
const pino1 = document.getElementById("pino1")
const pino2 = document.getElementById("pino2")
const pino3 = document.getElementById("pino3")
let selecionado = false
let pinoAtual = pino1

//Mateus
let disco1 = document.createElement("div");
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