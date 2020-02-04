import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url: string = "http://localhost:8585/categoria";
//
  catSele: Categoria;
  categoria: Categoria[];

  constructor(private http: HttpClient) {

    this.catSele = new Categoria();
  }


  getCategorias() {
    return this.http.get(this.url + '/listar');
  }

  GuardarCategoria(categoria: Categoria): Observable<any> {
    return this.http.post(this.url + '/guardar', categoria);
  }
  CategoriaId(id: number) {
    return this.http.get<Categoria>(this.url + "/categoria/" + id);
  }

  ModificarCategoria(categoria: Categoria) {
    return this.http.put(this.url + `/editar/${categoria.id}`, categoria);
  }

  EliminarCategoria(id: number) {
    return this.http.delete(this.url + `/eliminar/${id}`);
  }

}
