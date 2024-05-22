import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { NgClass, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle]
})
export class PatientsComponent{
  @Input() accounts: any;
  @Output() currentAccount = new EventEmitter<any>();
  indexNum : any = 0;

  constructor(){
    
  }

  selectedAccount(acc: any, i : any){
    this.currentAccount.emit(acc);
    this.indexNum = i;
  }
}
