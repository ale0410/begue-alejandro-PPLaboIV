import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalenPizzasComponent } from './salen-pizzas.component';

const routes: Routes = [
  {
    path: '',
    component: SalenPizzasComponent ,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalenPizzasRoutingModule { }
