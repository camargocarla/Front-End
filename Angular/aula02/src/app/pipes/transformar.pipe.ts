import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  transform(media:number): string {
    return media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';
  }

}
