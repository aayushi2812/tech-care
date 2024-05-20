import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import {MatTableModule} from '@angular/material/table';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-diagnosis',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './diagnosis.component.html',
  styleUrl: './diagnosis.component.css'
})
export class DiagnosisComponent implements OnInit, OnChanges{
  @Input() accounts: any;

  ngOnInit(): void {
    new Chart('lineChart',this.lineChart)
  }
  dataSource : any;
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.accounts){
      this.dataSource = this.accounts[3].diagnostic_list;
    }
  }
  displayedColumns: string[] = ['diagnosis', 'description', 'status'];
  
  lineChart:any = {
    type: 'line',
   data: {
       labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2023', 'Feb, 2023', 'Mar, 2023'],
       datasets: [{
           label: 'Systolic',
           data: [120, 110, 150, 105, 145, 150],
           backgroundColor: [
            'rgb(192, 53, 150)'
           ],
           borderColor: [
            'rgb(192, 53, 150)'
           ],
           borderWidth: 2,
           lineTension: 0.4
       },
       {
        label: 'Diastolic',
        data: [110, 70, 110, 90, 70, 80],
        backgroundColor: [
            'rgb(148, 53, 192)',
        ],
        borderColor: [
            'rgb(148, 53, 192)'
        ],
        borderWidth: 2,
        lineTension: 0.4
    }
      ]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero: true
               }
           }]
       }
   }
 };
}
