import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ofertaService } from '../ofertas.service';
import { CarrinhoService } from '../carrinho.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ ofertaService ]
})
export class OfertaComponent implements OnInit {

  public oferta:Oferta

  constructor( 
    private route:ActivatedRoute,
    
    private OfertaService:ofertaService,
    
    private CarrinhoService:CarrinhoService

  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (parametros: Params ) => {

        this.OfertaService.getOfertaPorId(parametros.id)
        .then( (oferta:Oferta) => {

        this.oferta = oferta
      })

    })
    
  }

  public getOferta():void{
    this.CarrinhoService.itemsCarrinho(this.oferta)
  }

}
