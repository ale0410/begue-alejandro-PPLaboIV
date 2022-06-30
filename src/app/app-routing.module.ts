import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivarInicioGuard } from './guards/activar-inicio.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { DetalleRepartidorComponent } from './componentes/detalle-repartidor/detalle-repartidor.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: 'bienvenida',
    component: BienvenidaComponent,
    canActivate : [ActivarInicioGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate : [ActivarInicioGuard]
  },
  {
    path: 'detalle',
    component: DetalleRepartidorComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'altaRepartidorPizza',
    loadChildren: () => import('./modules/alta-repartidor-pizza/alta-repartidor-pizza.module').then((m) => m.AltaRepartidorPizzaModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'pizzas',
    loadChildren: () => import('./modules/salen-pizzas/salen-pizzas.module').then(m => m.SalenPizzasModule),
    canActivate : [AuthGuard, AdminGuard]
  },
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
