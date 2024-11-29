import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDarkMode!: boolean;

  constructor(public sharedService: SharedService) {
    this.isDarkMode = localStorage.getItem('isDarkMode') ? JSON.parse(localStorage.getItem('isDarkMode')!) : localStorage.setItem('isDarkMode', 'false');
  }

  ngOnInit(): void {
    let bodyElement = document.querySelector('body')
    if (this.isDarkMode) {
      bodyElement?.classList.add('dark')
    } else {
      bodyElement?.classList.remove('dark')
    }
  }

  toggleDarkMode() {
    let bodyElement = document.querySelector('body')
    console.log(this.isDarkMode);
    console.log(typeof(this.isDarkMode));
    
    if (this.isDarkMode) {
      bodyElement?.classList.remove('dark')
    } else {
      bodyElement?.classList.add('dark')
    }
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', String(this.isDarkMode))
  }
}
