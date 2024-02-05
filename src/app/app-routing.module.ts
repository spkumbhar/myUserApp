import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"list", component:ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
