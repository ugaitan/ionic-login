import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header2Component } from './header2/header2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderComponent,Header2Component,FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],  
  exports: [HeaderComponent,Header2Component,FooterComponent]
})
export class ComponentsModule { }
