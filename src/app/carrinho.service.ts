import { Carrinho } from './shared/carrinho.model';
import { Oferta } from './shared/ofertas.model';
  
export class CarrinhoService{
    
    public items: Carrinho[] = []

    constructor(){}

    public exibirItems(): Carrinho[] {
        
        return this.items
    }
    
    public itemsCarrinho(oferta: Oferta):void{
        let carrinho: Carrinho = new Carrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )
        let carrinhoIgual = this.items.find((items:Carrinho) => items.id == carrinho.id)
        
        if(carrinhoIgual){
            carrinhoIgual.quantidade += 1
        }else{  
            this.items.push(carrinho)
        }
    }
    public totalCarrinho():number{
        let total:number = 0

        this.items.map((items:Carrinho) =>
            total = total + ( items.valor * items.quantidade )
        )

        return total
    }
    public adicionarQuantidade(itens:Carrinho):void{

        let adicinar = this.items.find((items:Carrinho) => items.id == itens.id)
        
        if(adicinar){
            adicinar.quantidade += 1
        }
    }
    public diminuirQuantidade(itens:Carrinho):void{

        let diminuir = this.items.find((items:Carrinho) => items.id == itens.id)
        
        if(diminuir){
            diminuir.quantidade -= 1

            if( diminuir.quantidade == 0){
                this.items.splice(this.items.indexOf(diminuir), 1)
            }
        }
    }
}

