import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { DeseadosComponent } from '../deseados/deseados.component';
import { CarritoService } from '../../servicios/carrito.service';
import { DeseadosService } from '../../servicios/deseados.service';
import { Producto } from '../../modelos/producto.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent {
  Productos: Producto[] = [

    {
      id: 1,
      nombre: 'Hola',
      descripcion: 'Mundo',
      precio: 10,
      imagen: 'https://preview.redd.it/variable-quality-hideo-kojima-thinking-v0-tbztklkehktc1.jpg?width=640&crop=smart&auto=webp&s=61c8fe0e3169b69829af8d919ce32160de9ecfe0',
      disponibilidad: true
    },

    {
      id: 2,
      nombre: 'radio',
      descripcion: 'head',
      precio: 20,
      imagen: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dd/50/c7/dd50c790-99ac-d3d0-5ab8-e3891fb8fd52/634904032463.png/1200x630bf-60.jpg',
      disponibilidad: true
    }
  ];

  productos = [];

  constructor(private carritoService: CarritoService, private deseadosService: DeseadosService) { }

  //metodo para agregar un producto al carrito

  agregarC(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); //Muestra el mensaje
  }
  agregarD(producto: Producto) {
    this.deseadosService.agregarADeseados(producto);
    alert('Producto agregado a deseados'); //Muestra el mensaje
  }
}
