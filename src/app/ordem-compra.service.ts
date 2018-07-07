import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from "@angular/http"
import { Pedido } from './shared/pedido.model';
import { Observable } from 'rxjs';
import { URL_API } from './app.api';

import 'rxjs/add/operator/map'

@Injectable()
export class ordemCompraService{

    constructor( private http:Http ){}

    efetivarCompra(pedido: Pedido):Observable<number>{

        let headers: Headers = new Headers()

        headers.append('Content-type','application/json')

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({headers: headers})
        )

        .map( ( resposta: any ) =>
             resposta.json().id )
    }

}