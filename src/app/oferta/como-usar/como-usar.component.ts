import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ofertaService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ ofertaService ]
})
export class ComoUsarComponent implements OnInit {

  public descricao:string = ''

  constructor( 
    
    private router: ActivatedRoute,
    
    private Ofertaservice:ofertaService
  ) { }

  ngOnInit() {

    this.router.parent.params.subscribe(
      (parametros: Params) =>{
        
        this.Ofertaservice.getComoUsarPorId(parametros.id)
        
        .then((descricao:string) =>{
  
        this.descricao = descricao
        }) 
      }
    )
  }
}
