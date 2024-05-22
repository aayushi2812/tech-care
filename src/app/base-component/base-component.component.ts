import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { PatientsComponent } from '../patients/patients.component';
import { DiagnosisComponent } from '../diagnosis/diagnosis.component';
import { ProfileComponent } from '../profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { AccountsService } from '../accounts.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-base-component',
  standalone: true,
  imports: [PatientsComponent, DiagnosisComponent, ProfileComponent, MatButtonModule, NgIf],
  templateUrl: './base-component.component.html',
  styleUrl: './base-component.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseComponentComponent {

  accounts: any;
  currentAcc: any;
  labels: any[] = [];
  data1: any[] = [];
  data2: any[] = [];
  

  constructor(private service: AccountsService) {
    this.getAccounts();
    if(this.accounts){
      this.currentAccount(this.accounts[0]);
    }
  }

    async getAccounts(){
    await this.service.getAccounts().subscribe((data) => {
      this.accounts = data;
    })
  }

  currentAccount(event: any){
    this.currentAcc = event;
    const lengthOfArray = this.currentAcc.diagnosis_history.length;
      for(var i=0;i<lengthOfArray;i++){
        var temp = this.currentAcc.diagnosis_history[i];
        this.labels.push(temp.month + " " +temp.year);
        this.data1.push(temp.blood_pressure.systolic.value);
        this.data2.push(temp.blood_pressure.diastolic.value);
      }
  }
}
