import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../Categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminarcategoria',
  templateUrl: './eliminarcategoria.component.html',
  styleUrls: ['./eliminarcategoria.component.css']
})
export class EliminarcategoriaComponent implements OnInit {

  constructor(private catServ: CategoriaService, private router: Router) { }

  ngOnInit() {
    this.cargarCategoria();
  }


  cargarCategoria() {
    let ide = localStorage.getItem("id");
    this.catServ.CategoriaId(+ide).subscribe(data => {
      this.catServ.catSele = data as Categoria;
    });
    console.log("cargando..." + ide);
  }

  eliminarCategoria() {
    this.catServ.EliminarCategoria(this.catServ.catSele.id)
      .subscribe(data => {
        this.router.navigate(['/categoria/listar']);
        console.log(this.catServ.catSele.id);
      });
  }
}
