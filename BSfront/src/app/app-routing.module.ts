import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarproductoComponent } from './Producto/ingresarproducto/ingresarproducto.component';
import { EliminarproductoComponent } from './Producto/eliminarproducto/eliminarproducto.component';
import { EditarproductoComponent } from './Producto/editarproducto/editarproducto.component';
import { BuscarproductoComponent } from './Producto/buscarproducto/buscarproducto.component';
import { ListarproductoComponent } from './Producto/listarproducto/listarproducto.component';
import { IngresarcategoriaComponent } from './Categoria/ingresarcategoria/ingresarcategoria.component';
import { BuscarcategoriaComponent } from './Categoria/buscarcategoria/buscarcategoria.component';
import { EliminarcategoriaComponent } from './Categoria/eliminarcategoria/eliminarcategoria.component';
import { ListarcategoriaComponent } from './Categoria/listarcategoria/listarcategoria.component';
import { EditarcategoriaComponent } from './Categoria/editarcategoria/editarcategoria.component';
import { IngresarservicioComponent } from './Servicio/ingresarservicio/ingresarservicio.component';
import { BuscarservicioComponent } from './Servicio/buscarservicio/buscarservicio.component';
import { EditarservicioComponent } from './Servicio/editarservicio/editarservicio.component';
import { EliminarservicioComponent } from './Servicio/eliminarservicio/eliminarservicio.component';
import { ListarservicioComponent } from './Servicio/listarservicio/listarservicio.component';


const routes: Routes = [


  { path: 'producto/ingresar', component: IngresarproductoComponent },
  { path: 'producto/eliminar', component: EliminarproductoComponent },
  { path: 'producto/editar/:id', component: EditarproductoComponent },
  { path: 'producto/buscar/:id', component: BuscarproductoComponent },
  { path: 'producto/listar', component: ListarproductoComponent },

  { path: 'categoria/ingresar', component: IngresarcategoriaComponent },
  { path: 'categoria/buscar/:id', component: BuscarcategoriaComponent },
  { path: 'categoria/eliminar', component: EliminarcategoriaComponent },
  { path: 'categoria/listar', component: ListarcategoriaComponent },
  { path: 'categoria/editar/:id', component: EditarcategoriaComponent },


  { path: 'servicio/ingresar', component: IngresarservicioComponent },
  { path: 'servicio/buscar/:id', component: BuscarservicioComponent },
  { path: 'servicio/editar/:id', component: EditarservicioComponent },
  { path: 'servicio/eliminar', component: EliminarservicioComponent },
  { path: 'servicio/listar', component: ListarservicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
