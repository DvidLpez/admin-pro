import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  // Doughnut
  @Input('chartLabels') public doughnutChartLabels: string[] = [];
  @Input('chartData') public doughnutChartData: number[] = [];
  @Input('chartType') public doughnutChartType: string = '';

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
