import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineItemCreateComponent } from './feature/line-item/line-item-create/line-item-create.component';
import { LineItemDetailComponent } from './feature/line-item/line-item-detail/line-item-detail.component';
import { LineItemEditComponent } from './feature/line-item/line-item-edit/line-item-edit.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestLinesComponent } from './feature/request/request-lines/request-lines.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch:'full'},
  { path: 'user-list', component: UserListComponent},
  { path: 'user-create', component: UserCreateComponent},
  { path: 'user-edit/:id', component: UserEditComponent},
  { path: 'user-detail/:id', component: UserDetailComponent},
  { path: 'user-detail/:id', component: UserDetailComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'vendor-list', component: VendorListComponent},
  { path: 'product-detail/:id', component: ProductDetailComponent},
  { path: 'product-edit/:id', component: ProductEditComponent},
  { path: 'product-create', component: ProductCreateComponent},
  { path: 'vendor-detail/:id', component: VendorDetailComponent},
  { path: 'vendor-edit/:id', component: VendorEditComponent},
  { path: 'vendor-create', component: VendorCreateComponent},
  { path: 'request-list', component: RequestListComponent},
  { path: 'request-detail/:id', component: RequestDetailComponent},
  { path: 'request-edit/:id', component: RequestEditComponent},
  { path: 'request-create', component: RequestCreateComponent},
  { path: 'request-lines/:id', component: RequestLinesComponent},
  { path: 'request-review', component: RequestReviewComponent},
  { path: 'request-approve/:id', component: RequestApproveComponent},
  { path: 'line-item-create/:id', component: LineItemCreateComponent},
  { path: 'line-item-detail/:id', component: LineItemDetailComponent},
  { path: 'line-item-edit/:id', component: LineItemEditComponent},
  { path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
