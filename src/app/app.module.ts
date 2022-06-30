import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ListadoRepartidorComponent } from './componentes/listado-repartidor/listado-repartidor.component';
import { TransformBooleanPipe } from './pipes/transform-boolean.pipe';
import { DetalleRepartidorComponent } from './componentes/detalle-repartidor/detalle-repartidor.component';
import { AltaRepartidorPizzaRoutingModule } from './modules/alta-repartidor-pizza/alta-repartidor-pizza-routing.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ListadoRepartidorComponent,
    DetallePaisComponent,
    DetalleComponent,
    DetalleRepartidorComponent,
    NavbarComponent,
    TransformBooleanPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AltaRepartidorPizzaRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
