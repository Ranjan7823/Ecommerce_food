import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RestuarntitemsComponent } from './pages/restuarntitems/restuarntitems.component';
import { SelectFoodComponent } from './pages/select-item/select-item.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'foodCategory', component: CategoriesComponent },
  { path: '',
  component:LayoutComponent,
children:[
  {path:'food-category',component:CategoriesComponent},
  {path:'restaurant-items/:categoryname',component:RestuarntitemsComponent},
  {path:'select-items/:restaurantId/:categoryId',component:SelectFoodComponent}
]
},
  { path: '**', component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
