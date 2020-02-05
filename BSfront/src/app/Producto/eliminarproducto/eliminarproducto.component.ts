import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Producto } from '../Producto';

@Component({
  selector: 'app-eliminarproducto',
  templateUrl: './eliminarproducto.component.html',
  styleUrls: ['./eliminarproducto.component.css']
})
export class EliminarproductoComponent implements OnInit {

  constructor(private prodService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.cargarProducto();
  }


  cargarProducto() {
    let ide = localStorage.getItem("id");
    this.prodService.ProductoId(+ide).subscribe(data => {
      this.prodService.produSel = data as Producto;
    });
    console.log("cargando..." + ide);
  }

  eliminarProducto() {
    this.prodService.EliminarProducto(this.prodService.produSel.id)
      .subscribe(data => {
        this.router.navigate(['/producto/listar']);
        console.log(this.prodService.produSel.id);
      });
  }

}
