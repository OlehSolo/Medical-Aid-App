import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-benefiaciary',
  templateUrl: './benefiaciary.component.html',
  styleUrls: ['./benefiaciary.component.css']
})
export class BenefiaciaryComponent implements OnInit {
  detailForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  saveBeneficiary(){}

}
