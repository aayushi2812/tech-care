import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [NgFor, NgIf, MatButtonModule]
})
export class ProfileComponent{
  @Input() accounts: any;
}
