import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';


// graficas ng-charts
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';

// In your App's module:


// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ChartsModule]
})
export class PagesModule {}
