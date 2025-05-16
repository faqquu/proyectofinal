import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto.models';
import { DeseadosService } from '../../servicios/deseados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deseados',
  imports: [CommonModule, FormsModule],
  templateUrl: './deseados.component.html',
  styleUrl: './deseados.component.css'
})
export class DeseadosComponent implements OnInit {
  productoEnDeseados: { producto: Producto; cantidad: number;}[] = [];

  constructor(private deseadosService: DeseadosService) { };

  ngOnInit(): void {
    this.deseadosService.deseados$.subscribe((productos) => {
      this.productoEnDeseados = productos
    })
  };

  agregarCantidad(index: number) {
    this.productoEnDeseados[index].cantidad++
  };

  quitarCantidad(index: number) {
    if (this.productoEnDeseados[index].cantidad > 1) {
      this.productoEnDeseados[index].cantidad--
    };
  }

  eliminarProducto(productoId: number) {
    this.deseadosService.eliminarDeDeseados(productoId)
  }

  vaciarDeseados() {
    this.deseadosService.vaciarDeseados()
  }

  realizarCompra(){
    alert("Compra Realizada Exitosamente");
    this.vaciarDeseados();
  }


}