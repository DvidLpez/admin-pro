import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

    @ViewChild('txtProgress') progress: ElementRef;
    @Input('nombre') leyenda: string = 'Leyenda';
    @Input('total') porcentaje: number = 50;
    @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChanges(valor: number) {



    if (valor >= 100) {
        this.porcentaje = 100;
    } else if (valor < 0) {
        this.porcentaje = 0;
    } else {
        this.porcentaje = valor;
    }

        this.progress.nativeElement.value = this.porcentaje;
        this.cambioValor.emit(this.porcentaje);

  }

  cambiarValor(valor) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
    this.progress.nativeElement.focus();
  }
}
