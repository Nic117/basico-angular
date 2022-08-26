export class Producto {
    _id?: number; //opcional
    nombre: string; //atributos
    categoria: string;
    ubicacion: string;
    precio: number; 

    constructor(nombre: string, categoria: string, ubicacion: string, precio: number ) { //inicializa cuando creamos el producto
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }

}