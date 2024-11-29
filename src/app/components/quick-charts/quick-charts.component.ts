import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-charts',
  templateUrl: './quick-charts.component.html',
  styleUrls: ['./quick-charts.component.scss']
})
export class QuickChartsComponent {
  date1: Date | undefined | any;
  dateFormatted: string = 'Jan 2024'
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  areaChartsSeries = [
    {
      name: "Line 1",
      data: [80, 100, 80, 150, 100, 120]
    },
    {
      name: "Line 2",
      data: [20, 60, 10, 80, 30, 80]
    }
  ]

  stackedChartsSeries = [
    {
      name: "Current clients",
      data: [360, 260, 240, 320, 320, 180, 280, 400, 240]
    },
    {
      name: "Subscribers",
      data: [380, 320, 260, 340, 290, 240, 300, 300, 220]
    },
    {
      name: "New Customers",
      data: [340, 300, 240, 280, 260, 200, 240, 360, 280]
    }
  ]

  areaChartsCategories = [
    "SEP",
    "OCT",
    "NOV",
    "DEC",
    "JAN",
    "FEB"
  ]

  stackedChartsCategories = [17, 18, 19, 20, 21, 22, 23, 24, 25]

  areaChartsColors = ['#4318FF', '#04BEFE']

  stackedChartsColors = ['#6946FF', '#6AD2FF', '#E9EDF7']

  change() {
    console.log(this.date1);
    this.dateFormatted = this.months[this.date1.getMonth()] + ' ' + this.date1.getFullYear()
  }
}
