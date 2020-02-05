import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
import { Servicio } from '../Servicio';

@Component({
  selector: 'app-eliminarservicio',
  templateUrl: './eliminarservicio.component.html',
  styleUrls: ['./eliminarservicio.component.css']
})
export class EliminarservicioComponent implements OnInit {

  constructor(private servService: ServicioService, private router: Router) { }

  ngOnInit() {
    this.cargarServicio();
  }

  cargarServicio() {
    let ide = localStorage.getItem("id");
    this.servService.ServicioId(+ide).subscribe(data => {
      this.servService.servicioSelect = data as Servicio;
    });
    console.log("cargando..." + ide);
  }

  eliminarServicio() {
    this.servService.EliminarServicio(this.servService.servicioSelect.id)
      .subscribe(data => {
        this.router.navigate(['/servicio/listar']);
        console.log(this.servService.servicioSelect.id);
      });
  }

}
