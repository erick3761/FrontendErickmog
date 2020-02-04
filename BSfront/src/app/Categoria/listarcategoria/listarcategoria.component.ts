import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../Categoria';

@Component({
  selector: 'app-listarcategoria',
  templateUrl: './listarcategoria.component.html',
  styleUrls: ['./listarcategoria.component.css']
})
export class ListarcategoriaComponent implements OnInit {


  categorias=new Array <Categoria>();
  cols:any[];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.listarcategoria();
  }


  listarcategoria(){

    
        this.categoriaService.getCategorias().subscribe(data=>{
          this.categoriaService.categoria=data as Categoria[];
          console.log(this.categoriaService.categoria);
        });
      }
}
