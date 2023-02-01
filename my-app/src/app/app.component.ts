import { Component } from '@angular/core';

//Decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angie'; //👌Public
  edad = 20;
  //Estando en el componente debemos crear un atributo que guarde la imagen
  //En este caso usaremos una direccion que genera imagenes aleartorias al recargar la pagina
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  //Vamos a crear un objeto para poder modificar a nivel dinamico los atributos
  persona ={
    name : 'Mauricio',
    edad : 10,
    img : 'https://source.unsplash.com/random'
  }

  //Vamos a crear nuestro primer metodo para activar o desactivar un boton
  //Hay que destacar que ocupamos el paradigma orientado a objetos ya que tenemos atributos
  // a los cuales podemos acceder dentro de una clase, como tambien podemos poner modificadores de acceso
  // a los metodos del mismo, pero en esta ocacion sera publico por defecto para poder usarlo en el componente de html
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  // Con este evento incrementamos la edad del atributo edad en el objeto persona
  incrementoEdad(){
   if(this.persona.edad <100){
    this.persona.edad += 1;
   }
   else if(this.persona.edad >= 100){
    alert("No puedes tener mas de 100 años no manches");
   }
  }

  decrementoEdad(){
    if(this.persona.edad > 0 && this.persona.edad <=100){
      this.persona.edad -= 1;
    }
    else if(this.persona.edad <= 0){
      alert("No has nacido amigo mio");
    }
  }

  // Vamos a crear un evento que al momento de dar scroll haga una funcion recibiendo el evento
  onScroll(event : Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  //Vamos a crear un evento al momento de teclear
  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.persona.name=element.value;
  }

  //Creremos un arreglo que estara tipado en tipo string
  emojis: string[] = ['💛' , '🐦', '🐳','🌮', '✨'];
  newEmoji= '';

  //Vamos a crear un evento para poder agregar un emoji
  addEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji='';
  }

  //Vamos a crear un evento para eliminar un emoji
  deleteEmoji(index : number){
    this.emojis.splice(index, 1);
  }

  //Crearemos un Reto sobre las Metas
  metas: String[] = [];
  newMeta = '';
  //Evento para añadir una meta al arreglo
  addMeta(){
    this.metas.push(this.newMeta);
    this.newMeta = '';
  }
  //Evento para eliminar una meta del arreglo
  deleteMeta(index: number){
    this.metas.splice(index, 1);
  }
}
