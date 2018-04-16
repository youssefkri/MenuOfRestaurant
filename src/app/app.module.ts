import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PanierComponent } from './panier/panier.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu.service';
import { PanierService } from './panier.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategorieComponent,
    PanierComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService, PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
