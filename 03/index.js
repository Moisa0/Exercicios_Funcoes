
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function(){
    
    console.log(`Cliente: ${this.nomeDoCliente}`)
    console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
    console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()/100}`)
    },
    addProdutos: function(produto){
        let indiceProdutoExistente = -1
        for (let i = 0; i < this.produtos.length; i++) {
            if(produto.id === this.produtos[i].id){
                indiceProdutoExistente = i
                break;
            }
        }
        if(indiceProdutoExistente === -1){
            this.produtos[this.produtos.length] = produto
        }else{
            this.produtos[indiceProdutoExistente].qtd += produto.qtd
        }
    },
    imprimirDetalhes: function(){
        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log("")
        
        let totalPagar = this.calcularTotalAPagar()
    
        for (let item = 0; item < this.produtos.length; item++) {
            let produto = this.produtos[item]
            
            console.log(`Item ${produto.id} - ${produto.nome} - ${produto.qtd} und - R$ ${produto.precoUnit/100}`)
        }
        
        let totalEmReais = totalPagar/100
        console.log("")
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$ ${totalEmReais}`)  
    },
    calcularTotalDeItens: function(){
        let somaDosItens = 0
    

        for(let item of this.produtos){
            somaDosItens += item.qtd   
    }
    return somaDosItens;
    },
    calcularTotalAPagar: function(){
        let totalPagar = 0

        for(let item of this.produtos){
            totalPagar += item.qtd*item.precoUnit
    }
    return totalPagar;
},
    calcularDesconto: function(){
        let somaDosItens = this.calcularTotalDeItens()
        let totalPagar = this.calcularTotalAPagar()

        let descontoPorItens = 0
        let descontoPorPreco = 0

        if (somaDosItens > 4) {
            descontoPorItens = this.produtos[0].precoUnit/100

            for (let i = 1; i < this.produtos.length; i++) {
                if(this.produtos[i].precoUnit < this.produtos[0].precoUnit){
                    descontoPorItens = this.produtos[i].precoUnit/100
                } 
            }
        }
        if(totalPagar/100 > 100){
            descontoPorPreco = totalPagar/100*0.1
        }   

        if(descontoPorItens >= descontoPorPreco){
            return `R$ ${descontoPorItens}`;
        } else{
            return `O desconto de R$ ${descontoPorPreco} será aplicado`;
        }
    }
}
 



let novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProdutos(novaBermuda);

let novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProdutos(novoTenis);


carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
carrinho.calcularDesconto();


