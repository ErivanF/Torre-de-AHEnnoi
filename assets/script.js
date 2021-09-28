
const pino1 = document.getElementById("pino1")
const pino2 = document.getElementById("pino2")
const pino3 = document.getElementById("pino3")
let selecionado = false ;
let pinoAtual = pino1 ;

//Mateus
const menu = document.querySelector("header");
const Easy = document.createElement("button");
Easy.id = "Easy"
Easy.innerText = "Easy"
menu.appendChild(Easy);
Easy.addEventListener("click", EasyEvent)
    function EasyEvent () {
        ClearEvent();
        const disco1 = document.createElement("div");
        disco1.id = "disco1" ;
        pino1.appendChild(disco1);
        const disco2 = document.createElement("div");
        disco2.id = "disco2" ;
        pino1.appendChild(disco2);
        const disco3 = document.createElement("div");
        disco3.id = "disco3" ;
        pino1.appendChild(disco3);
    }
const Medium = document.createElement("button");
menu.appendChild(Medium);
Medium.id = "Medium";
Medium.innerText = "Medium";
Medium.addEventListener("click", MediumEvent)
    function MediumEvent () {
        ClearEvent();
        const disco1 = document.createElement("div");
        disco1.id = "disco1" ;
        pino1.appendChild(disco1);
        const disco2 = document.createElement("div");
        disco2.id = "disco2" ;
        pino1.appendChild(disco2);
        const disco3 = document.createElement("div");
        disco3.id = "disco3" ;
        pino1.appendChild(disco3);
        const disco4 = document.createElement("div");
        disco4.id = "disco4" ;
        pino1.appendChild(disco4);
    }
const Hard = document.createElement("button");
menu.appendChild(Hard);
Hard.id = "Hard";
Hard.innerText = "Hard";
Hard.addEventListener("click", HardEvent)
    function HardEvent () {
        ClearEvent();
        const disco1 = document.createElement("div");
        disco1.id = "disco1" ;
        pino1.appendChild(disco1);
        const disco2 = document.createElement("div");
        disco2.id = "disco2" ;
        pino1.appendChild(disco2);
        const disco3 = document.createElement("div");
        disco3.id = "disco3" ;
        pino1.appendChild(disco3);
        const disco4 = document.createElement("div");
        disco4.id = "disco4" ;
        pino1.appendChild(disco4);
        const disco5 = document.createElement("div");
        disco5.id = "disco5" ;
        pino1.appendChild(disco5);
    }
const Clear = document.createElement("button");
menu.appendChild(Clear);
Clear.id = "Clear";
Clear.innerText = "Reset";
Clear.addEventListener("click", ClearEvent);
function ClearEvent () {
    let count1 = pino1.childElementCount;
    let count2 = pino2.childElementCount;
    let count3 = pino3.childElementCount;
    for (let i=0; i< count1; i++){
        pino1.lastChild.remove()
    }
    for (let i=0; i< count2; i++){
        pino2.lastChild.remove()
    }
    for (let i=0; i< count3; i++){
        pino3.lastChild.remove()
    }
}

//Erivan
pino1.addEventListener("click",clicaPino)
pino2.addEventListener("click",clicaPino)
pino3.addEventListener("click",clicaPino)

function clicaPino (evt){
    const pino = evt.currentTarget
    if(!selecionado){
        if(pino.childElementCount>0){
            pinoAtual=pino
            console.log(pinoAtual.id)
            selecionado = true
        }
        else{
            console.log("Erro")
        }
    }
    else{
        if(checaJogada(pinoAtual,pino)){
            console.log(pinoAtual.id,pino.id)
            moveDisco(pinoAtual,pino)
            selecionado = false
        }
        else{
            selecionado = false
            console.log("Erro")
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
