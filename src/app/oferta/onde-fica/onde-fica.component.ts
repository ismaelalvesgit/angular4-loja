import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ofertaService } from '../../ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ ofertaService ]
})
export class OndeFicaComponent implements OnInit {

  public descricao:string = ''

  constructor( 
    private router: ActivatedRoute,
    
    private Ofertaservice:ofertaService
  ) { }

  ngOnInit() {

    this.router.parent.params.subscribe(
      ( parametro:Params )=>{
        
        this.Ofertaservice.getOndeFicaPorId(parametro.id)
        
        .then( (descricao:string) => {

        this.descricao = descricao
        })
      }
    )
  }
}
