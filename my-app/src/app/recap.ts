//Variables en TS
//Podemos asignarle a una variable un tipo de dato explicitamente
const var1 : string = 'Este es un string';
//A su vez puedo declarar una variable que pueda permitir 2 tipos de datos
const username : string | number = 'AlvaroH';

//Podemos crear funciones de tipo flecha protegidas por un tipado
const suma = (a:number, b:number)=>{
  return a + b;
}

//Aqui sabemos que la funcion necesita 2 paramentros
// A diferencia de JavaScript, TypeScript me permite recibir feedback en dado caso
//que el tipo de dato que se envie este mal.
//suma(2,'holamundo')

//La manera correcta seria enviar los parametros que esta esta pidiendo.
suma(2,3)

//A qui podemos ver como TypeScript nos permite trabajar con el paradigma orientado a objetos
//Inicialización de clase
class Persona{
  //Podemos incluir en la clase modificadores de acceso a los atributos
  // Por ejemplo private edad esto restringe el uso del atributo fuera de un objeto
  // Por defecto cada atributo viene con acceso publico
  edad : number;
  apellido: string;
  //constructor, si pongo el alcance como parametro, la variable se crea y se autoasigna con el parametro
  //Este nos permite inicializar los datos que la clase necesite
  //constructor (public edad: number, public apellido: string){}

  constructor(edad: number, apellido:string){
    this.edad = edad;
    this.apellido = apellido;
  }
}

//Podemos crear una instancia de la clase Persona
//const marcia = new Persona();

//Si podemos observar la instancia anterior nos dara un error ya que el constructor
//Esta esperando los parametros de la clase, la forma correcta seria
const marcia = new Persona(19, 'Rodriguez');

//Si en dado caso el atributo edad estuviera private esto daria un error de acceso
// pero como esta publico el acceso es permitido
marcia.edad;

// A medida que aprendemos como funciona typeScript podemos simplificar una clase
// que recibe atributos y luego los asigna con la siguiente forma

//const PersonaL{
  //constructor(public edad: number, public apellido:string){}
//}

// Permitiendome asi poder crear la misma intancia anterior
// const alvaro = new PersonaL(21, 'Hernandez');
// como a su ves sus atributos si estos son publicos
// alvaro.apellido;



