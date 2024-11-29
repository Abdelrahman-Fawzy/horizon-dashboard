import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataItemsComponent } from './components/data-items/data-items.component';
import { QuickChartsComponent } from './components/quick-charts/quick-charts.component';
import { TasksRowComponent } from './components/tasks-row/tasks-row.component';
import { TrendingsRowComponent } from './components/trendings-row/trendings-row.component';
import { HistoryAndCalendarComponent } from './components/history-and-calendar/history-and-calendar.component';
import { TeamAndTableComponent } from './components/team-and-table/team-and-table.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';
import { CarouselModule } from 'primeng/carousel';
import { AreaChartComponent } from './shared/area-chart/area-chart.component';
import { StackedChartComponent } from './shared/stacked-chart/stacked-chart.component';
import { ColumnChartComponent } from './shared/column-chart/column-chart.component';
import { CheckboxModule } from 'primeng/checkbox';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DataItemsComponent,
    QuickChartsComponent,
    TasksRowComponent,
    TrendingsRowComponent,
    HistoryAndCalendarComponent,
    TeamAndTableComponent,
    PieChartComponent,
    AreaChartComponent,
    StackedChartComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SplitButtonModule,
    RippleModule,
    OverlayPanelModule,
    CalendarModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    ChartModule,
    DropdownModule,
    FormsModule,
    NgApexchartsModule,
    CarouselModule,
    CheckboxModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
