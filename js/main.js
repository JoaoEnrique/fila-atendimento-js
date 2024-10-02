var senha = []; //guarda fila de senha principal
var especial = []; //guarda fila de senha especial para saber a ordem de chegada
var normal = []; //guarda fila de senha normal para saber a ordem de chegada
var numero = 0;  //próximo numero da senha
 
document.querySelector('#btn-gerar-senha').addEventListener('click', ()=>{
    numero = numero +1;
    senha.push(numero); //fila principal
    normal.push(numero); // fila para saber ordem de chegada da senha normal
    document.querySelector("#fila p").innerHTML = senha
})
 
document.querySelector('#btn-gerar-senha-especial').addEventListener('click', ()=>{
    numero = numero +1;
    senha.unshift(numero); //fila principal
    especial.push(numero); // fila para saber ordem de chegada da senha especial
    document.querySelector("#fila p").innerHTML = senha
})
 
document.querySelector('#btn-remove-senha').addEventListener('click', ()=>{
    c = normal[0]; //pega primeiro a entrar na fila normal

    //remove premeiro a entrar na fila normal da fila principal
    if(senha.indexOf(c) != -1){
        senha.splice(senha.indexOf(c), 1)
        normal.shift();
    }
    
    document.querySelector("#fila p").innerHTML = senha
})
 
document.querySelector('#btn-remove-senha-especial').addEventListener('click', ()=>{
    c = especial[0]; //pega primeiro a entrar na fila especial
 
    if(senha.indexOf(especial[0]) != -1){
        senha.splice(senha.indexOf(c), 1)
        especial.shift();
    }
 
    document.querySelector("#fila p").innerHTML = senha
})