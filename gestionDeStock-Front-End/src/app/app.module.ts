import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { PageAddCategorieComponent } from './pages/page-categorie/page-add-categorie/page-add-categorie.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { PageAddUserComponent } from './pages/page-users/page-add-user/page-add-user.component';
import { PageUserProrfileComponent } from './pages/page-user-prorfile/page-user-prorfile.component';
import { SuccsAlertComponent } from './succs-alert/succs-alert.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,


  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SuccsAlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
