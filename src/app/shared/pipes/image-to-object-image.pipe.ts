import {Pipe, PipeTransform} from '@angular/core';
import {Evidencia} from "../../pages/denuncias/shared/evidencia.model";

@Pipe({
  name: 'imageToObjectImagePipe'
})
export class ImageToObjectImagePipe implements PipeTransform {

  transform(evidencias: Evidencia[]): Array<object> {
    const array: Array<object> = [];
    if (evidencias != null)
    evidencias.forEach(evidencia => array.push({
      image: evidencia.url,
      thumbImage: evidencia.url
    }))

    return array;
  }

}
