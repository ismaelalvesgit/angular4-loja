import { Component, OnInit } from '@angular/core';
import { ordemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers:[ ordemCompraService ]
})
export class OrdemCompraComponent implements OnInit {
  
  public idPedido:number

  public pedido:Pedido = new Pedido("","","","")

  public endereco:string = 'rua padre galvão'

  public numero:string = '41'

  public complemento:string = 'branco'

  public pagamento:string = 'boleto'

  constructor( private Ordemcompra:ordemCompraService ) { }

  ngOnInit() {
  }

  public finalizarCompra():void{

  this.pedido.endereco = this.endereco

  this.pedido.numero = this.numero

  this.pedido.complemento = this.complemento

  this.pedido.pagamento = this.pagamento

  this. Ordemcompra.efetivarCompra(this.pedido)
    .subscribe(
      (idpedidio:number)=>{
        this.idPedido = idpedidio
        console.log(this.idPedido)
      }
    )
  }

}
