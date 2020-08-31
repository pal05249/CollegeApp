import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ApiConService } from '../api-con.service'
import { User } from '../user.model'

interface UserPersona {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  Formbuilder: any
  constructor(private service: ApiConService, private formBuilder: FormBuilder) { }
  signupForm: FormGroup
  userType: ''
  username: ''
  password: ''
  email: ''
  contact: ''


  users: UserPersona[] = [
    { value: 'parent-0', viewValue: 'Parent' },
    { value: 'guardian-1', viewValue: 'Guardian' },
    { value: 'student-2', viewValue: 'Student' }
  ];

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      'userType': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'contact': ['', Validators.required]
    });




  }

  onSubmit() {
    this.service.addUser(this.signupForm.value);
    console.log(this.signupForm.value)
  }
}
