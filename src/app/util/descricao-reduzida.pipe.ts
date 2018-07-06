import  { Pipe, PipeTransform } from '@angular/core'    

@Pipe({

    name:"DescricaoReduzida"
})

export class DescricaoReduzida implements PipeTransform{

    transform( texto:string ):string{

        if(texto.length > 15){

            return texto.substr(0,15) + "... "
        
        }else{

            return texto
        }
    }

}