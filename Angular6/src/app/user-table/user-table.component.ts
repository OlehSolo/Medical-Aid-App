import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  panelOpenState = false;

  control: FormArray;
  mode: boolean;
  userTable: FormGroup;
  touchedRows: any;
  detailForm: FormGroup;

  constructor(private fb: FormBuilder, private router:
    Router) {

    this.detailForm = fb.group({
      title : new FormControl(''),
      initials: new FormControl(''),
      firstName : new FormControl(''),
      surname : new FormControl(''),
      idNumber : new FormControl(''),
      dateOfBirth : new FormControl(''),
      gender : new FormControl(''),
      contactNumber : new FormControl(''),
      cellphoneNumber : new FormControl(''),
      address: new FormControl(''),
      grossMonthlyIncome : new FormControl(''),
      relationshipToMember : new FormControl(''),
      isBenefiaryLivesSameAddress : new FormControl(''),
      city : new FormControl(''),
      nameOfGeneralPractiner : new FormControl(''),
      doctorAdddress : new FormControl(''),
      doctorContactNumber :new FormControl(''),
      numOfYearsConsulted : new FormControl(''),
      weight : new FormControl(''),
      height : new FormControl(''),
      employer : new FormControl(''),
      jobTitle : new FormControl(''),
      duration : new FormControl(''),
      refContactNumber : new FormControl(''),
      bankName : new FormControl(''),
      bankCode : new FormControl(''),
      branchName : new FormControl(''),
      accHolderName : new FormControl(''),
      accountNumber : new FormControl(''),
      accountType : new FormControl(''),



  })
  }

  ngOnInit(): void {

    }

  saveAndAddBeneficiary(){

    console.log("form was successfully submitted",this.detailForm.value);
    // after validating and successfully adding member navigate to add beneficiary page
    this.router.navigateByUrl('/beneficiary');

  }


}



