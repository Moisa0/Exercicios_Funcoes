const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function(valor){
        this.saldo += valor;
        this.historicos[this.historicos.length] = {
            tipo: "Depósito",
            valor: valor 
        }
        console.log(`Deposito de R$${valor} realizado para o cliente: ${this.nome}`) 
    },

    sacar: function(valor){
        if(valor> this.saldo){
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        }else{
            this.saldo -= valor
            this.historicos[this.historicos.length] = {
                tipo: "Saque",
                valor: valor
            }
            console.log(`Saque de R$${valor} realizado para o cliente: ${this.nome}`)
        }
    },

    extrato: function(){
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo}`)
        console.log("Histórico:")
        for (let itens = 0; itens < this.historicos.length; itens++) {
            console.log(`${this.historicos[itens].tipo} de ${this.historicos[itens].valor}`)
            
        }
    }


}
contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();