import { Categoria } from '../Categoria/Categoria';



export class Servicio{
    id: number;
    nombre_servicio: string;
    precio_servicio: number;
    descripcion_servicio: string;
    imagen_servicio: string;
    servicio_categoria: Categoria;
}