import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { LadoLesteComponent } from './ladoLeste/ladoLeste.component';

import { LadoOesteComponent } from './ladoOeste/lado-oeste.component';
import { ServecosComponent } from './servecos/servecos.component';





@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    LadoLesteComponent,
    ServecosComponent,
    LadoOesteComponent
  ],

  exports:[
    HeaderComponent,
    MenuComponent,
    LadoLesteComponent,
    ServecosComponent,
    LadoOesteComponent
  ],

  imports: [
    IonicModule,
    CommonModule,
    RouterModule    
  ]
})
export class ComponentsModule { }