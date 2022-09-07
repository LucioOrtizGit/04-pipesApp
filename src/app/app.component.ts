import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'LuCio';

  mostrarNombre(){
    console.log(this.nombre);  
  }

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Tenemos data de promesa")
    },3500);
  });
}
