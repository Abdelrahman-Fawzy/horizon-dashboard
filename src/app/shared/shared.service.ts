import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sidebarVisible: boolean = false;

  constructor() { }
}
