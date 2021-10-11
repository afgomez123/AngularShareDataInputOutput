import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HijoComponent, NavbarComponent],

  exports: [HijoComponent, NavbarComponent],
})
export class ComponentsModule {}
