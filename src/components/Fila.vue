<template>
    <div class="card">
      <div class="buttons">
        <button @click="gerarSenha()">Gerar Senha</button>
        <button @click="gerarSenhaEspecial()">Gerar Senha Especial</button>
        <button @click="removerSenha()">Remover Senha</button>
        <button @click="removerSenhaEspecial()">Remover Senha Especial</button>
      </div>
        <p>Fila</p>
          {{senha}} 
    </div>
</template>

<script>
export default {
   data() {
        return {
            senha: [], //guarda fila de senha principal
            especial: [], //guarda fila de senha especial para saber a ordem de chegada
            normal: [], //guarda fila de senha normal para saber a ordem de chegada
            numero: 0,  //próximo numero da senha
          }
        },
        methods: {
          gerarSenha(){
            this.numero = this.numero +1;
            this.senha.push(this.numero); //fila principal
            this.normal.push(this.numero); // fila para saber ordem de chegada da senha normal
          },

          gerarSenhaEspecial(){
            this.numero = this.numero +1;
            this.senha.unshift(this.numero); //fila principal
            this.especial.push(this.numero); // fila para saber ordem de chegada da senha especial
          },

          removerSenha(){
            let c = this.normal[0]; //pega primeiro a entrar na fila normal

            //remove premeiro a entrar na fila normal da fila principal
            if(this.senha.indexOf(c) != -1){
                this.senha.splice(this.senha.indexOf(c), 1)
                this.normal.shift();
            }
          },


          removerSenhaEspecial(){
            let c = this.especial[0]; //pega primeiro a entrar na fila especial
 
            if(this.senha.indexOf(this.especial[0]) != -1){
                this.senha.splice(this.senha.indexOf(c), 1)
                this.especial.shift();
            }
          }
          },
    };
</script>

<style>
  *, body, html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body, html, .container{
    width: 100%;
    height: 100%;
    background: #5bb4ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card{
    background: #fff;
    width: 100%;
    border-radius: 5px;
    min-height: 100px;
    padding: 50px 50px;
  }

  .buttons{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  button{
    margin-bottom: 10px;
    /* margin: 10px auto; */
    border: 0;
    background: #5bb4ff;
    color: #fff;
    padding: 10px 5px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
    width: 45%;
    height: 60px;
  }

  #fila{
      margin-top: 100px;
  }

  #fila p{
      text-wrap: wrap;
  }

  @media screen and (max-width: 750px) {
      .card{
          width: 90%;
          padding: 10px;
      }
      
      button{
          margin: 10px 0;
          width: 100%;
          height: 50px;
      }
  }
</style>       