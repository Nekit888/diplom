import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdministrationRoutingModule } from './administration-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserFormComponent } from './pages/users-page/components/add-user-form/add-user-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminPageComponent,
    UsersPageComponent
    AddUserFormComponent
  ],
  imports: [

    SharedModule,
    ReactiveFormsModule

    AdministrationRoutingModule,
    CommonModule,
  ]
})
export class AdministrationModule { }