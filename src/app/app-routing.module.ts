import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
{path: '', redirectTo: 'listMascotas', pathMatch: 'full'},
{path: 'listMascotas', component: ListadoMascotasComponent},
{path: 'agregarMascota', component: AgregarEditarMascotaComponent},
{path: 'verMascota/:id', component: VerMascotaComponent},
{path: '**', component: PaginaNoEncontradaComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
