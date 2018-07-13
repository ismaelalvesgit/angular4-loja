import { Component, OnInit, ViewChild } from '@angular/core';
import { ordemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { Subscriber } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers:[ ordemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  })
  
  public idPedido:number


  constructor( private Ordemcompra:ordemCompraService ) { }

  ngOnInit() {
  }

  public finalizarCompra():void{
  
  let pedido:Pedido = new Pedido(
    this.formulario.value.endereco,  
    this.formulario.value.numero,
    this.formulario.value.complemento,
    this.formulario.value.formaPagamento
  )
    
  this. Ordemcompra.efetivarCompra(pedido)
    .subscribe(
      (idpedidio:number)=>{
        this.idPedido = idpedidio
        console.log(this.idPedido)
      }
    )
  }

}
