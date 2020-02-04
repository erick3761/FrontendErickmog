import { Categoria } from '../Categoria/Categoria';



export class Producto{
    id:number;
    nombre:string;
    descripcion:string;
    especificaciones:string;
    precio:number;
    imagen: string;
    categoria_producto: Categoria;
}