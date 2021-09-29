
const pino1 = document.getElementById("pino1")
const pino2 = document.getElementById("pino2")
const pino3 = document.getElementById("pino3")
const contador = document.getElementsByClassName("contador")[0]
const vitoria =  document.createElement("img")
let podeMover = true
let maxDiscos = 3
let selecionado = false
let pinoAtual
let jogadas = 0
vitoria.setAttribute("src","./assets/img/helltaker-heart.gif")
const erro = new Audio("./assets/sound/error.mp3")
const izi = new Audio("./assets/sound/ggizi.mp3")
const Theme = new Audio("./assets/sound/hellTakerOSTRemix.mp3")
Theme.play();
Theme.volume = 0.02;
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
        maxDiscos = 3
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
        maxDiscos = 4
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
        maxDiscos = 5
    }
const Clear = document.createElement("button");
menu.appendChild(Clear);
Clear.id = "Clear";
Clear.innerText = "Reset";
Clear.addEventListener("click",Reset);
function Reset(){

    ClearEvent()
    if(maxDiscos===5){
        HardEvent()
    }
    if(maxDiscos===4){
        MediumEvent()
    }
    if(maxDiscos===3){
        EasyEvent()
    }
}
function ClearEvent () {
    Theme.play()
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
    izi.pause()
    jogadas = 0
    contador.innerText=jogadas
}


//Erivan
pino1.addEventListener("click",clicaPino)
pino2.addEventListener("click",clicaPino)
pino3.addEventListener("click",clicaPino)

function clicaPino (evt){
    const pino = evt.currentTarget
    if(pino3.childElementCount!==maxDiscos){
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
        jogadas++
        contador.innerText=jogadas
        if(pino3.childElementCount===maxDiscos){
            Theme.pause()
            izi.play()
            pino2.appendChild(vitoria)
        }
    
}
