import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexResponsive, ApexXAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-stacked-chart',
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.scss']
})
export class StackedChartComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  @Input() series: any[] = [];
  @Input() categories: any[] = [];
  @Input() colors: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [ ...this.series ],
      chart: {
        type: "bar",
        height: 235,
        width: 521,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      colors: {
        backgroundBarColors: [ ...this.colors ]
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%',
          borderRadius: 5,
        }
      },
      dataLabels: {
        enabled: false, // Disables numbers on bars
      },
      xaxis: {
        type: "category",
        categories: [ ...this.categories ],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            fontSize: '12px',
            cssClass: 'apexcharts-xaxis-label'
          }
        }
      },
      yaxis: {
        show: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      fill: {
        opacity: 1
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              width: 521
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              width: 470
            }
          }
        },
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 852
            }
          }
        },
        {
          breakpoint: 767,
          options: {
            chart: {
              width: 580
            }
          }
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              width: 368
            }
          }
        }
      ],
    };
  }
}
