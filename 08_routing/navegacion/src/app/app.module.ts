// Módulos Angular
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AutoresModule } from './autores/autores.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { EnlacesModule } from './enlaces/enlaces.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';

// Módlos de la aplicación



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EnlacesModule,
    CatalogoModule,
    AutoresModule,
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
