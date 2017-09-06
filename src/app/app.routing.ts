import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './-guards/index';

// Component
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewUserComponent } from './add-edit-user/new-user.component';
import { EditUserComponent } from './add-edit-user/edit-user.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full'},
	{ path: '', component: UserListComponent },
	{ path: 'users', component: UserListComponent },  
  { path: 'user/:id', component: UserDetailComponent },
{ path: 'user1/newUser', component: NewUserComponent },
{ path: 'user/:id/editUser', component: EditUserComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);

// export class StudyHttpRoutingModule {}