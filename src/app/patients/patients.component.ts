import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
  standalone: true,
  imports: [NgFor]
})
export class PatientsComponent {
  @Input() accounts: any;
}
