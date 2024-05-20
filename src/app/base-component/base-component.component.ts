import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { PatientsComponent } from '../patients/patients.component';
import { DiagnosisComponent } from '../diagnosis/diagnosis.component';
import { ProfileComponent } from '../profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-base-component',
  standalone: true,
  imports: [PatientsComponent, DiagnosisComponent, ProfileComponent, MatButtonModule],
  templateUrl: './base-component.component.html',
  styleUrl: './base-component.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseComponentComponent {

  accounts: any;

  constructor(private service: AccountsService) {
    this.getAccounts();
  }

    getAccounts(){
    this.service.getAccounts().subscribe((data) => {
      this.accounts = data;
    })
  }
}
