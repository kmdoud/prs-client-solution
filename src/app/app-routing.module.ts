import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';


import { LoginComponent } from './user/login/login.component';

const routes: Routes = 
[
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //always first route

  {path: 'login', component: LoginComponent },

  {path: 'user/list', component: UserListComponent },
  {path: 'user/detail/:id', component: UserDetailComponent },
  {path: 'user/create', component: UserCreateComponent },
  {path: 'user/edit/:id', component: UserEditComponent },
  
  {path: 'vendor/list', component: VendorListComponent },
  {path: 'vendor/detail/:id', component: VendorDetailComponent },
  {path: 'vendor/create', component: VendorCreateComponent },
  {path: 'vendor/edit/:id', component: VendorEditComponent },

  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },

  {path: '**' , component: HomeComponent }           //always last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
