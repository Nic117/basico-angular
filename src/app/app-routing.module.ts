import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

//componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent }, //objeto ruta vacia 
  { path: 'crear-producto', component: CrearProductoComponent }, //usuario coloca localhost 4200 se renderiza ListarProductosComponent
  { path: 'editar-producto/:id', component: CrearProductoComponent }, //comodin: id pasar un producto
  { path: '**', redirectTo: '', pathMatch: 'full' }, //redireccione a la ruta raiz cuando el usuario coloca otra url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
