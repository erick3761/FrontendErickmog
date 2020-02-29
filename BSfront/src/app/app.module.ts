import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "primeng/fileupload";


import { MegaMenuModule } from "primeng/megamenu";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarproductoComponent } from './Producto/listarproducto/listarproducto.component';
import { EditarproductoComponent } from './Producto/editarproducto/editarproducto.component';
import { EliminarproductoComponent } from './Producto/eliminarproducto/eliminarproducto.component';
import { IngresarproductoComponent } from './Producto/ingresarproducto/ingresarproducto.component';
import { BuscarproductoComponent } from './Producto/buscarproducto/buscarproducto.component';
import { IngresarcategoriaComponent } from './Categoria/ingresarcategoria/ingresarcategoria.component';
import { EditarcategoriaComponent } from './Categoria/editarcategoria/editarcategoria.component';
import { EliminarcategoriaComponent } from './Categoria/eliminarcategoria/eliminarcategoria.component';
import { BuscarcategoriaComponent } from './Categoria/buscarcategoria/buscarcategoria.component';
import { ListarcategoriaComponent } from './Categoria/listarcategoria/listarcategoria.component';
import { ListarservicioComponent } from './Servicio/listarservicio/listarservicio.component';
import { IngresarservicioComponent } from './Servicio/ingresarservicio/ingresarservicio.component';
import { EditarservicioComponent } from './Servicio/editarservicio/editarservicio.component';
import { EliminarservicioComponent } from './Servicio/eliminarservicio/eliminarservicio.component';
import { BuscarservicioComponent } from './Servicio/buscarservicio/buscarservicio.component';
import { IngresarimgComponent } from './Imagen/ingresarimg/ingresarimg.component';

import { ServicioService } from './Servicio/servicio.service';
import { ProductoService } from './Producto/producto.service';
import { CategoriaService } from './Categoria/categoria.service';
import { PruebaimgComponent } from './Imagen/pruebaimg/pruebaimg.component';
import { ImagenService } from './Imagen/imagen.service';
import { PagopruebaComponent } from './Pago/pagoprueba/pagoprueba.component';

//google
const aothclient: string = "799281769519-ddmij1unglk1hi4ee8sqfl1mn3p1vvf2.apps.googleusercontent.com";


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(aothclient)
  },
  {
    //facebook
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2937619732925232')
  }
]);



export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    ListarproductoComponent,
    EditarproductoComponent,
    EliminarproductoComponent,
    IngresarproductoComponent,
    BuscarproductoComponent,
    IngresarcategoriaComponent,
    EditarcategoriaComponent,
    EliminarcategoriaComponent,
    BuscarcategoriaComponent,
    ListarcategoriaComponent,
    ListarservicioComponent,
    IngresarservicioComponent,
    EditarservicioComponent,
    EliminarservicioComponent,
    BuscarservicioComponent,
    IngresarimgComponent,
    PruebaimgComponent,
    PagopruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    SocialLoginModule.initialize(config),

  ],
  providers: [ServicioService, ProductoService,
    CategoriaService, ImagenService, { provide: AuthServiceConfig, useFactory: provideConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
