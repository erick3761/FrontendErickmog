import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Producto/producto.service';
import { Producto } from 'src/app/Producto/Producto';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagenService } from '../imagen.service';
import { Categoria } from 'src/app/Categoria/Categoria';
import { CategoriaService } from 'src/app/Categoria/categoria.service';
import { AuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-pruebaimg',
  templateUrl: './pruebaimg.component.html',
  styleUrls: ['./pruebaimg.component.css']
})
export class PruebaimgComponent implements OnInit {

  user: any;


  //usuario fb
  userfb: SocialUser;
  loggedIn: boolean;
  constructor(private socioAoth: AuthService) { }



  ngOnInit() {
  }
  //google
  ingresar(plata: string): void {
    plata = GoogleLoginProvider.PROVIDER_ID;
    this.socioAoth.signIn(plata).then((response) => {
      console.log(plata + " logeado con " + response.lastName);
      this.user = response;
    });
  }
  ingresarfbk(plata: string): void {

    plata = FacebookLoginProvider.PROVIDER_ID;
    this.socioAoth.signIn(plata).then((response) => {
      console.log(plata + " logeado con " + response.lastName);
      this.user = response;
    });
  }

  cerrarsesion(): void {
    this.socioAoth.signOut();
    console.log("cerrado sesion")
  }
  //facebook

  funcionfb() {
    this.socioAoth.authState.subscribe((usuario) => {
      this.userfb = usuario;
      this.loggedIn = (usuario != null);
    });
  }
  ingresarfb(): void {
    this.socioAoth.signIn(FacebookLoginProvider.PROVIDER_ID);


  }

}

