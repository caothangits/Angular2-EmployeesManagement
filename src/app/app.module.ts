import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

//routing
import { routing } from './app.routing';

//components
import { AppComponent } from './app.component';
import { AlertComponent } from './-directives/index';
import { AuthGuard } from './-guards/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

//services
import { AlertService, AuthenticationService, UserService } from './-services/index';
import { UserdataService } from './-services/userdata.service';


//Routing
// import { StudyHttpRoutingModule } from './app.routing';
// Component
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
// SharedModule
import { SharedModule } from './shared/shared.module';

import { NewUserComponent } from './add-edit-user/new-user.component';
import { EditUserComponent } from './add-edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
	  UserDetailComponent,	  
    NewUserComponent,
    EditUserComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule,
    HttpModule
    
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,        
    UserdataService,   
    UserService,        
    // providers used to create fake backend
    //fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
