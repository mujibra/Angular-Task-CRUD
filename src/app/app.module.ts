import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TableComponent } from './components/table/table.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HistoryComponent } from './components/history/history.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainPageComponent,
    TableComponent,
    AddUserComponent,
    EditUserComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    HistoryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
