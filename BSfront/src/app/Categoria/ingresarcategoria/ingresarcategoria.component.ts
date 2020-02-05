import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingresarcategoria',
  templateUrl: './ingresarcategoria.component.html',
  styleUrls: ['./ingresarcategoria.component.css']
})
export class IngresarcategoriaComponent implements OnInit {

  constructor(private catService: CategoriaService, private router: Router) { }

  ngOnInit() {
  }

  ingresarCat(form: NgForm) {

    this.catService.GuardarCategoria(this.catService.catSele).subscribe(res => {
      this.router.navigate(['/categoria/listar']);
    });
  }

}
