import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/Categoria/categoria.service';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Categoria/Categoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingresarservicio',
  templateUrl: './ingresarservicio.component.html',
  styleUrls: ['./ingresarservicio.component.css']
})
export class IngresarservicioComponent implements OnInit {

  constructor(private catServi: CategoriaService, private servService: ServicioService, private router: Router) { }
  //
  ngOnInit() {
    this.listarCateg();
  }


  listarCateg() {
    this.catServi.getCategorias().subscribe(res => {
      this.catServi.categoria = res as Categoria[];

    });
  }

  ingresarServi(form: NgForm) {
    this.servService.GuardarServicio(this.servService.servicioSelect).subscribe(res => {
      this.router.navigate(['/servicio/listar']);
    });
  }

}
