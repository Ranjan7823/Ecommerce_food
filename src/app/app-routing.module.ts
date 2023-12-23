import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'foodCategory', component: CategoriesComponent },
  { path: '**', component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
