import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';

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

  constructor(private prodService: ProductoService) { }

  ngOnInit() {
  
this.listar();
   
  }
  listar(){
    this.prodService.getProductos()
    .subscribe(data => {
      this.prodService.producto = data as Producto[];
      console.log(this.prodService.producto);
    });
  }



}
