import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'users/add', component: AddUserComponent, canActivate: [AuthGuard] },
  {
    path: 'users/edit/:id',
    component: EditUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/detail/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/history',
    component: HistoryComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
