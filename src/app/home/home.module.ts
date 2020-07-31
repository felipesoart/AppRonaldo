import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { ServecosComponent } from '../components/servecos/servecos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,    
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
