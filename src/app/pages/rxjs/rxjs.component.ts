// PRACTICAS SOBRE OBSERVADORES MAP, FILTER, RETRY, ...


import { Component, OnInit, OnDestroy } from '@angular/core';
// Este seria para proyecto ya que pesa mas y carga todo
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs/Rx';
import { retry, map, filter } from 'rxjs/operators';
// Este seria para produccion
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()
      // .pipe(
      //   // Intenta conectar n veces más
      //   retry(2)
      // )
      .subscribe(
        numero => console.log('Sus ', numero),
        error => console.log('Error en el observador', error),
        () => console.log( 'El observable termino!!' )
      );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( ( observer: Subscriber<any> ) => {

      let contador = 0;
      let intervalo = setInterval(() => {

        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('Auxilio... ');
        // }

      }, 1000);

    })
    .pipe(
      map( resp => resp.valor ),
      filter( ( valor, index ) => {
        // console.log('Filter', valor, index);

        if ( (valor % 2 ) === 1 ) {
          return true;
        } else {

          return false;
        }
      })
    );
  }

}
