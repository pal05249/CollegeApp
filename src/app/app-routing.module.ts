import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignupComponent } from './signup/signup.component'
import { SigninComponent } from './signin/signin.component'
import { StudentDetailsPageComponent } from './student-details-page/student-details-page.component'
const routes: Routes = [

  {
    path: 'api/User/registration',
    component: SignupComponent,

  },
  {
    path: '',
    redirectTo: 'api/User/applicationForm',
    pathMatch: 'full'
  },
  {
    path: 'api/User/login',
    component: SigninComponent,

  },
  {
    path: 'api/User/applicationForm',
    component: StudentDetailsPageComponent,

  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
