import { Component, OnInit } from '@angular/core';
import { Servicio } from '../Servicio';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarservicio',
  templateUrl: './listarservicio.component.html',
  styleUrls: ['./listarservicio.component.css']
})
export class ListarservicioComponent implements OnInit {

  servicios = new Array<Servicio>();
  cols: any[];

  constructor(private servService: ServicioService, private router: Router) { }

  ngOnInit() {
    this.listarservicio();
  }

  listarservicio() {

    //cabar vista servicio categoria 
    this.servService.getServicios().subscribe(data => {
      this.servService.servicio = data as Servicio[];
      console.log(this.servService.servicio);
    });
  }

  data(serv: Servicio, link: String) {
    localStorage.setItem("id", serv.id.toString());
    this.router.navigate([link]);
  }

}
