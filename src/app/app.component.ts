import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-tecnotrust';

  numeroIngresado:any;
  auxNumero:any = 2;
  resultado:any;

 mostrarMultiplos():void {
  for (this.auxNumero = 2;this.auxNumero < this.numeroIngresado/2; this.auxNumero++) {
    if (this.numeroIngresado % this.auxNumero === 0) {
        console.log(this.auxNumero,"Multiplos");
    }
}
  }
}
