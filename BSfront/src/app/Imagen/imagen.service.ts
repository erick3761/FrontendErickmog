import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagen } from './Imagen';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  url: string = "http://localhost:8585/image";

  imagen: Imagen[];
  imagensele: Imagen;
  constructor(private http: HttpClient) {
    this.imagensele = new Imagen();

  }

  getImagen(nombre: string) {
    return this.http.get<Imagen>(this.url + "/get/" + nombre);
  }

  pruebasubir(fd: FormData): Observable<any> {
    return this.http.post(this.url + "/guardar", fd);
  }

}
