import { Component, OnInit, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-trendings-row',
  templateUrl: './trendings-row.component.html',
  styleUrls: ['./trendings-row.component.scss']
})
export class TrendingsRowComponent implements OnInit {
  @ViewChild(Carousel) carousel!: Carousel;
  
  periods!: any[];
  selectedPeriod: any;

  data: any;
  options: any;

  products: any;

  responsiveOptions: any;

  constructor() {
    this.periods = [
      {name: 'Weekly'},
      {name: 'Monthly'},
      {name: 'Yearly'}
    ]

    this.selectedPeriod = this.periods[1];

    this.products = [
      {
        img: 'assets/carousel1.png',
        title: 'colorful heaven',
        user: 'mark benjamin',
        currentBid: 1.30
      },
      {
        img: 'assets/carousel2.png',
        title: 'abstract colors',
        user: 'esthera jackson',
        currentBid: 0.91
      },
      {
        img: 'assets/carousel3.png',
        title: 'ETH al brain',
        user: 'nick wilson',
        currentBid: 2.82
      },
      {
        img: 'assets/carousel4.png',
        title: 'swipe circles',
        user: 'peter will',
        currentBid: 2.30
      },
      {
        img: 'assets/carousel5.png',
        title: 'mesh gradients',
        user: 'will smith',
        currentBid: 0.56
      },
      {
        img: 'assets/carousel6.png',
        title: '3d cubes art',
        user: 'manny gates',
        currentBid: 6.58
      }
    ];
  }

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
        labels: ['Your Files', 'System'],
        datasets: [
            {
                data: [65, 35],
                backgroundColor: ['#4318FF', '#04BDFD'],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400')]
            }
        ]
    };

    this.options = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                },
                width: '500px'
            }
        }
    };

    this.responsiveOptions = [
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  prev() {
    console.log(this.carousel);
    if (this.carousel.page != 0) this.carousel.page--;
  }

  next() {
    if (this.carousel.page != Math.ceil(this.carousel.value.length - this.carousel._numVisible)) {
      console.log(this.carousel);
      this.carousel.page++;
    }
  }
}
