import { Categoria } from '../Categoria/Categoria';
import { Imagen } from '../Imagen/Imagen';



export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    especificaciones: string;
    precio: number;
    imagen: string;
    categoria_producto: Categoria;
    img: Imagen;
}