import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu-component/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { AppRoutingModule } from './app-routing.module';
import { TableListComponent } from './table/table-list/table-list.component';



@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    MenuComponent,
    MenuItemComponent,
    FooterComponent,
    TableListComponent
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
