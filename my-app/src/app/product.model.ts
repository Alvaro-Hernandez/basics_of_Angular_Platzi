export interface Product{
  name: string;
  price: number;
  image: string;
  //Variable de la interfaz la cual puede estar en algunos objetos y en otros no
  category?:string;
}
