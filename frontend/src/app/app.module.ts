import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdalService, AdalGuard, AdalInterceptor } from 'adal-angular4';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { LoginAadComponent } from './loginaad.component';
import { LogoutComponent } from './logout.component';
import { BypassSecurityComponent} from './bypass-security.component';

const routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'bypass',
  component: BypassSecurityComponent,
  canActivate: [AdalGuard]
},
{
  path: 'bypass/:name',
  component: BypassSecurityComponent,
  canActivate: [AdalGuard]
},
{
  path: 'login',
  component: LoginAadComponent
},
{
  path: 'logout',
  component: LogoutComponent
},
{
  path: 'messages',
  component: MessagesComponent,
  canActivate: [AdalGuard]
},
{
  path: 'messages/:name',
  component: MessagesComponent,
  canActivate: [AdalGuard]
}];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    LoginAadComponent,
    LogoutComponent,
    BypassSecurityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WebService,
    AdalService, AdalGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
