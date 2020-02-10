import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { RouterLink, Router } from '@angular/router';
import { CategoriaService } from 'src/app/Categoria/categoria.service';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/Categoria/Categoria';

@Component({
  selector: 'app-ingresarproducto',
  templateUrl: './ingresarproducto.component.html',
  styleUrls: ['./ingresarproducto.component.css']
})
export class IngresarproductoComponent implements OnInit {

  public prodFile: any = File;
  constructor(private Proservice: ProductoService, private router: Router, private Categservice: CategoriaService) { }

  ngOnInit() {
    this.listarCateg();
  }

  listarCateg() {
    this.Categservice.getCategorias().subscribe(res => {
      this.Categservice.categoria = res as Categoria[];

    });
  }

  ingresarPro(form: NgForm) {

    this.Proservice.GuardarProductos(this.Proservice.produSel).subscribe(res => {
      this.router.navigate(['/producto/listar']);
      //agg
      const formdata = new FormData();
      formdata.append('file', this.prodFile);
      console.log(this.listarCateg());
    });
  }


  onSelectFile(event) {
    const file = event.target.files[0];
    console.log(file);
    this.prodFile = file;
  }

}
