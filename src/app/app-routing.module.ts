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

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';

import { RequestLineListComponent } from './requestLine/request-line-list/request-line-list.component';
import { RequestLineEditComponent } from './requestLine/request-line-edit/request-line-edit.component';
import { RequestLineCreateComponent } from './requestLine/request-line-create/request-line-create.component';

import { RequestReviewComponent } from './request/request-review/request-review.component';

import { RequestReviewLinesComponent } from './request/request-review-lines/request-review-lines.component';



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

  {path: 'product/list', component: ProductListComponent },
  {path: 'product/detail/:id', component: ProductDetailComponent },
  {path: 'product/create', component: ProductCreateComponent },
  {path: 'product/edit/:id', component: ProductEditComponent },

  {path: 'request/list', component: RequestListComponent },
  {path: 'request/detail/:id', component: RequestDetailComponent },
  {path: 'request/create', component: RequestCreateComponent },
  {path: 'request/edit/:id', component: RequestEditComponent },

  {path: 'requestLine/list/:prid', component: RequestLineListComponent },
  {path: 'requestLine/create/:prid', component: RequestLineCreateComponent },
  {path: 'requestLine/edit/:id', component: RequestLineEditComponent },

  {path: 'request/review', component: RequestReviewComponent},

  {path: 'request/review/lines/:id', component: RequestReviewLinesComponent },

  

  

  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },

  {path: '**' , component: HomeComponent }           //always last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
