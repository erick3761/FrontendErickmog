import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarproducto',
  templateUrl: './listarproducto.component.html',
  styleUrls: ['./listarproducto.component.css']
})
export class ListarproductoComponent implements OnInit {
  //
  productos = new Array<Producto>();
  cols: any[];

  este: { id: number, nom: string }[] = [
    { id: 2, nom: 'erick' },
    { id: 3, nom: 'ganso' },
  ];

  constructor(private prodService: ProductoService, private router: Router) { }

  ngOnInit() {

    this.listar();

  }
  listar() {
    this.prodService.getProductos()
      .subscribe(data => {
        this.prodService.producto = data as Producto[];
        console.log(this.prodService.producto);
      });
  }

  data(prod: Producto, link: String) {
    localStorage.setItem("id", prod.id.toString());
    this.router.navigate([link]);
  }

}
