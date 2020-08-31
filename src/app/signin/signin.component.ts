
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ApiConService } from '../api-con.service'
import { User } from '../user.model'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  Formbuilder: any
  constructor(private service: ApiConService, private formBuilder: FormBuilder) { }
  signinForm: FormGroup
  userType: ''
  username: ''
  password: ''
  email: ''
  contact: ''

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      'userType': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'contact': ['', Validators.required]
    });




  }

  onSubmit() {
    this.service.addUser(this.signinForm.value);
    console.log(this.signinForm.value)
  }
}
