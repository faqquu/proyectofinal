import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../modelos/producto.models';

@Injectable({
  providedIn: 'root'
})
export class DeseadosService {

  private deseadosSubject = new BehaviorSubject<{ producto: Producto; cantidad: number; }[]>([]);
  deseados$ = this.deseadosSubject.asObservable();

  agregarADeseados(producto: Producto) {
    const productos = this.deseadosSubject.getValue();
    const encontrado = productos.find(p => p.producto.id === producto.id);

    if (encontrado) {
      let i;
      encontrado.cantidad++;
  
    } else {
      this.deseadosSubject.next([...productos, { producto, cantidad: 1}])
    }
  }

  eliminarDeDeseados(productoId: number) {
    const productos = this.deseadosSubject.getValue().filter(p => p.producto.id != productoId);
    this.deseadosSubject.next(productos)
  }

  vaciarDeseados() {
    this.deseadosSubject.next([])
  }

  
  constructor() { }
}