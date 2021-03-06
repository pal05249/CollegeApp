import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ApiConService } from '../api-con.service'
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { MatYearView } from '@angular/material/datepicker';


interface Array {
  value: string;

  viewValue: string;
}





@Component({
  selector: 'app-student-details-page',
  templateUrl: './student-details-page.component.html',
  styleUrls: ['./student-details-page.component.css']
})



export class StudentDetailsPageComponent implements OnInit {
  Formbuilder: any
  constructor(private service: ApiConService, private formBuilder: FormBuilder) { }
  signupForm: FormGroup

  studentName: ''
  combination: ''
  email: ''
  contact: ''
  today: number = Date.now();








  religions: Array[] = [
    { value: 'Hindu-0', viewValue: 'Hindu' },
    { value: 'Muslim-1', viewValue: 'Muslim' },
    { value: 'Christian-2', viewValue: 'Christian' },
    { value: 'Other-3', viewValue: 'Other' }
  ];
  cats: Array[] = [
    { value: 'SC-0', viewValue: 'Scheduled Caste' },
    { value: 'ST-1', viewValue: 'Scheduled Tribe' },
    { value: 'OBC-2', viewValue: 'Other Backward Class' },
    { value: 'GEN-3', viewValue: 'General' }
  ];
  nats: Array[] = [
    { value: 'Indian-0', viewValue: 'Indian' },
    { value: 'NRI-1', viewValue: 'Non-Resident-Indian' }

  ];

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      'studentName': ['', Validators.required],
      'combination': ['', Validators.required],
      'dob': ['', Validators.required],
      'pob': ['', Validators.required],
      'motherTongue': ['', Validators.required],
      'fathersName': ['', Validators.required],
      'fathersContact': ['', Validators.required],
      'mothersName': ['', Validators.required],
      'mothersContact': ['', Validators.required],
      'guardiansName': ['', Validators.required],
      'guardiansContact': ['', Validators.required],
      'caste': ['', Validators.required],
      'regNumber': ['', Validators.required],
      'board': ['', Validators.required],
      'schoolName': ['', Validators.required],
      'schoolAddress': ['', Validators.required],
      'totalMarks': ['', Validators.required],
      'marksObtained': ['', Validators.required],
      'percentage': ['', Validators.required],
      'remarks': ['', Validators.required],
      'basisOfAdmission': ['', Validators.required],
      'admissionStatus': ['', Validators.required]
    });

  }

  date = new FormControl(new Date());


  onSubmit() {
    this.service.addUser(this.signupForm.value);
    console.log(this.signupForm.value)
  }




}
