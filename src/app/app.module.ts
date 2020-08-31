import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SignupComponent } from './signup/signup.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ApiConService } from './api-con.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import { SigninComponent } from './signin/signin.component';
import { MatIconModule } from '@angular/material/icon';
import { StudentDetailsPageComponent } from './student-details-page/student-details-page.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [AppComponent, SignupComponent, SigninComponent, StudentDetailsPageComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
