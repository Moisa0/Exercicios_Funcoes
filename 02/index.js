const carro = {
  ligado: false,
  velocidade: 0,
  devolveStatusTexto: function () {
     return this.ligado ? "ligado" : "desligado" // Se this.ligado for true, então retorne "ligado", se não, retorne "desligado"
  },
  imprimeStatusEVelocidade: function () {
    console.log(`Carro ${this.devolveStatusTexto()}. Velocidade: ${this.velocidade}`) 
 },
  ligar: function(){
    if(this.ligado === true){
      console.log("Este carro já está ligado")
    }else{
      this.ligado = true;
      this.imprimeStatusEVelocidade();
    }
  },
  desligar: function(){
    if(this.ligado === false){
      console.log("Este carro já está desligado")
    }else{
      this.ligado = false 
      this.velocidade = 0 
      this.imprimeStatusEVelocidade()
    }
  },
  acelerar: function(){
    if(this.ligado === false){
      console.log("Não é possível acelerar um carro desligado")
    }else{
      this.velocidade += 10;
      this.imprimeStatusEVelocidade()
    }
  },
  desacelerar: function(){
    if(this.ligado === false){
      console.log("Não é possível desacelerar um carro desligado")
    }else{
      this.velocidade -= 10;
      this.imprimeStatusEVelocidade()
    }
  }
}
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
