import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiplos',
  templateUrl: './multiplos.component.html',
  styleUrls: ['./multiplos.component.scss'],
})
export class MultiplosComponent {
  numeroControl = new FormControl();
  numeros: any[] = [];

  buscarMultiplos() {
    const numero = this.numeroControl.value;

    const colores: { [key: string]: string } = {
      '3': 'verde',
      '5': 'rojo',
      '7': 'azul',
    };

    let allMultiplos = [];

    for (let i = 1; i <= numero; i++) {
      let multi = [];

      if (i % 3 === 0) {
        multi.push(3);
      }
      if (i % 5 === 0) {
        multi.push(5);
      }
      if (i % 7 === 0) {
        multi.push(7);
      }

      let color;

      if (multi.length == 0) {
        color = 'black';
      } else {
        color = colores[multi[0]];
      }

      let multiplos = {
        numero: i,
        color: color,
        multiplos: multi,
      };

      allMultiplos.push(multiplos);
    }
    this.numeros = allMultiplos;
  }
}
