import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',     
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
    productoForm: FormGroup; //variable productoForm tipo FromGroup

  constructor(private fb: FormBuilder,  //clase form builder inyección de dependencias
              private router: Router,
              private toastr: ToastrService) {                
    this.productoForm = this.fb.group({
      producto: ['',Validators.required],
      categoria: ['',Validators.required],
      ubicacion: ['',Validators.required],
      precio: ['',Validators.required],
    })       
   }
 
    ngOnInit(): void {
  }
  agregarProducto() {
    
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,

    }
    
    console.log(PRODUCTO);
    this.toastr.success('Producto Registrado con Exito!', 'Producto Registrado!');
    this.router.navigate(['/']);
  }
 }

 