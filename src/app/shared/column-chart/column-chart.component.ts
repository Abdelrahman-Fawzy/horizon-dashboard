import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Traffic",
          data: [110, 80, 150, 100, 130, 160, 60]
        }
      ],
      chart: {
        height: 210,
        type: "bar",
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          },
          columnWidth: '30%',
          borderRadius: 5,
        }
      },
      dataLabels: {
        enabled: false, // Disables numbers on bars
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          '00',
          '04',
          '08',
          '12',
          '14',
          '16',
          '18',
        ],
        position: "bottom",
        // labels: {
        //   offsetY: -18
        // },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical', // Vertical gradient
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 1, // Fully opaque at the top
          opacityTo: 1, // Fully transparent at the bottom
          stops: [0, 100], // Transition from 0% to 100% of the bar
          colorStops: [
            {
              offset: 0,
              color: 'rgba(120, 21, 230, 1)', // Purple at the top
              opacity: 1,
            },
            {
              offset: 100,
              color: 'rgba(120, 21, 230, 1)', // Transparent purple at the bottom
              opacity: 0.1,
            },
          ],
        },
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val: any) {
            return val;
          }
        }
      }
    };
  }
}
