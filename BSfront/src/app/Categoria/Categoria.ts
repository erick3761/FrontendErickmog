import { Producto } from '../Producto/Producto';
import { Servicio } from '../Servicio/Servicio';


export class Categoria {

    id: number;
    nombre: string;
    descripcion: string;
    productos: Producto[];
    servicios: Servicio[];
}