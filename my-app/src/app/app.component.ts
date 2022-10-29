import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Alvaro'; //👌Public
  edad = 21;
  //Estando en el componente debemos crear un atributo que guarde la imagen
  //En este caso usaremos una direccion que genera imagenes aleartorias al recargar la pagina
  img = 'https://source.unsplash.com/random';
}
