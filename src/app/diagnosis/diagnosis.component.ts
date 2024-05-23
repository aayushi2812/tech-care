import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import {MatTableModule} from '@angular/material/table';
import { AccountsService } from '../accounts.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-diagnosis',
  standalone: true,
  imports: [MatTableModule, NgIf],
  templateUrl: './diagnosis.component.html',
  styleUrl: './diagnosis.component.css'
})
export class DiagnosisComponent implements OnInit, OnChanges{
  @Input() currentAcc: any;
  @Input() labels: any;
  @Input() data1: any;
  @Input() data2: any;
  lineChart: any;
  line: ChartType = "line";
  
  ngOnInit(): void {
    Chart.register(...registerables);
    this.lineChart = new Chart('lineChart', {
      type: this.line,
     data: {
         labels : this.labels, 
         datasets: [{
             label: 'Systolic',
             data: this.data1,
             backgroundColor: [
              'rgb(192, 53, 150)'
             ],
             borderColor: [
              'rgb(192, 53, 150)'
             ],
             borderWidth: 2,
            //  lineTension: 0.4
         },
         {
          label: 'Diastolic',
          data: this.data2,
          backgroundColor: [
              'rgb(148, 53, 192)',
          ],
          borderColor: [
              'rgb(148, 53, 192)'
          ],
          borderWidth: 2,
          // lineTension: 0.4
      }
        ]
     },
     options: {
         scales: {
            //  yAxes: [{
            //      ticks: {
            //          beginAtZero: true
            //      }
            //  }]
         }
     }
   });
  }

  dataSource : any;
  constructor() { }
  
  respiratory_rate: any;
  temperature: any;
  heart_rate: any;
  
  loading: boolean =  false;

  ngOnChanges(changes: SimpleChanges){
    this.lineChart.data.datasets.forEach((dataset: any) => {
      dataset.data.forEach((d: any) => {
        dataset.data.pop();
        this.lineChart.data.labels.pop();
      })
    });

    if(this.currentAcc){
      this.dataSource = this.currentAcc.diagnostic_list;
    }

    const lengthOfArray = changes['currentAcc'].currentValue.diagnosis_history.length;
    this.respiratory_rate= changes['currentAcc'].currentValue.diagnosis_history[lengthOfArray-1].respiratory_rate.value;
    this.temperature= changes['currentAcc'].currentValue.diagnosis_history[lengthOfArray-1].temperature.value;
    this.heart_rate= changes['currentAcc'].currentValue.diagnosis_history[lengthOfArray-1].heart_rate.value;

    for(var i=0;i<lengthOfArray;i++){
      var temp = this.currentAcc.diagnosis_history[i];
      this.labels.push(temp.month + " " +temp.year);
      this.data1.push(temp.blood_pressure.systolic.value);
      this.data2.push(temp.blood_pressure.diastolic.value);
    }

    this.updateChart();
  }

  updateChart(){
    this.lineChart.update();
  }

  displayedColumns: string[] = ['diagnosis', 'description', 'status'];
}
