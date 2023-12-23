import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestuarntitemsComponent } from './pages/restuarntitems/restuarntitems.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectFoodComponent } from './pages/select-item/select-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    RestuarntitemsComponent,
    CreateOrderComponent,
    LayoutComponent,
    SelectFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
