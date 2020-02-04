import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from './Servicio';
import { Observable } from 'rxjs';
import { Categoria } from '../Categoria/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  //
  private url: string = "http://localhost:8585/servicio";
  servicioSelect: Servicio;
  servicio: Servicio[];


  constructor(private http: HttpClient) {
    this.servicioSelect = new Servicio();

  }

  getServicios() {
    return this.http.get(this.url + '/listar');
  }

  GuardarServicio(servicio: Servicio): Observable<any> {
    return this.http.post(this.url + '/guardar', servicio);
  }
  ServicioId(id: number) {
    return this.http.get<Servicio>(this.url + "/servicio/" + id);
  }

  ModificarServicio(servicio: Servicio) {
    return this.http.put(this.url + `/editar/${servicio.id}`, servicio);
  }

  EliminarServicio(id: number) {
    return this.http.delete(this.url + `/eliminar/${id}`);
  }
}


