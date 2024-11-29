import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  @Input() series: any[] = []
  @Input() categories: any[] = []
  @Input() colors: any[] = []

  constructor() {
    
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [...this.series],
      chart: {
        height: 235,
        type: "line",
        toolbar: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      colors: [ ...this.colors ],
      xaxis: {
        type: "string",
        categories: [ ...this.categories ],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false, // Hides the Y-axis
      },
    };
  }
}
