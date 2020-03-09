import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './Producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  producto: Producto[];
  url: string = environment.servidorpuerto + "producto";
  produSel: Producto;

  constructor(private http: HttpClient) {
    this.produSel = new Producto();

  }


  getProductos() {
    return this.http.get(this.url + '/listar');
  }
  GuardarProductos(producto: Producto): Observable<any> {
    return this.http.post(this.url + '/guardar', producto);
  }
  ProductoId(id: number) {
    return this.http.get<Producto>(this.url + "/producto/" + id);
  }

  ModificarProducto(producto: Producto) {
    return this.http.put(this.url + `/editar/${producto.id}`, producto);
  }

  EliminarProducto(id: number) {
    return this.http.delete(this.url + `/eliminar/${id}`);
  }

}
