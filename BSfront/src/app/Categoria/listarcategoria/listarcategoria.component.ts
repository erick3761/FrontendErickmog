import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../Categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarcategoria',
  templateUrl: './listarcategoria.component.html',
  styleUrls: ['./listarcategoria.component.css']
})
export class ListarcategoriaComponent implements OnInit {


  categorias = new Array<Categoria>();
  cols: any[];
  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit() {
    this.listarcategoria();
  }


  listarcategoria() {


    this.categoriaService.getCategorias().subscribe(data => {
      this.categoriaService.categoria = data as Categoria[];
      console.log(this.categoriaService.categoria);
    });
  }

  data(cat: Categoria, link: String) {
    localStorage.setItem("id", cat.id.toString());
    this.router.navigate([link]);
  }

}
