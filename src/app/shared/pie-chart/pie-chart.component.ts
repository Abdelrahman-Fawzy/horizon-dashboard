import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  @Input() series: number[] = [];
  @Input() labels: string[] = [];
  @Input() colors: string[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    console.log(this.series);
    console.log(this.labels);
    
    this.chartOptions = {
      series: [...this.series],
      chart: {
        width: 250,
        type: "pie"
      },
      labels: [...this.labels],
      colors:[...this.colors],
      legend: {
        show: false,
        position: 'bottom', // Positions labels at the bottom
        // horizontalAlign: 'center', // Centers the labels horizontally
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
