import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ofertaService } from '../ofertas.service';
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
    
    private OfertaService:ofertaService  

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

}
